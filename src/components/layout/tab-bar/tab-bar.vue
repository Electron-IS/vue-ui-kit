<script setup lang="ts">
  import { onBeforeUnmount, onMounted, ref, watchEffect } from 'vue';

  // Components
  import SelIcon from '@/components/common/sel-icon/sel-icon.vue';

  // Utils
  import { debounce } from '../../../utils/debounce';

  // Types
  import { TabBarMenuItem } from './types';

  type TabBarProps = {
    /**
     * Массив с описанием табов
     */
    items: TabBarMenuItem[]
    /**
     * Значение из параметра value текущего таба
     */
    modelValue: string | number
    /**
     * Тип отображения основные табы / табы второго уровня
     */
    type?: 'main' | 'sub'
    /**
     * Количество элементов прокручиваемых за 1 итерацию слайда при наличии слайдера в таьбах
     * слайдер появляется автоматически если количество табов не умещается в отведенной для табов области
     */
    slideElementsCount?: number
    /**
     * Продолжительность анимации слайда и  изменения активно таба в табах типа main в милисекундах
     */
    transitionDuration?: number
  }

  type TabBarEmits = {
    (e: 'update:modelValue', value: string | number): void
  }

  const props = withDefaults(defineProps<TabBarProps>(), {
    type: 'main',
    slideElementsCount: 1,
    transitionDuration: 500,
  });
  const emit = defineEmits<TabBarEmits>();

  const tabListWrapper = ref<HTMLElement|null>();
  const tabListContent = ref<HTMLElement|null>();
  const tabListMarker = ref<HTMLElement|null>();
  const offsetContent = ref<number>(0);
  const showArrows = ref<boolean>(false);
  const disableLeftArrow = ref<boolean>(true);
  const disableRightArrow = ref<boolean>(true);
  const transitions = ref<string>('');

  const setValue = (value: string | number) => {
    emit('update:modelValue', value);
  };

  const onTabClick = (event: Event, value: string | number, disabled?: boolean) => {
    if (disabled) return;

    if (tabListContent.value && tabListWrapper.value) {
      const target = event.currentTarget as HTMLElement;
      if (target.dataset.position === 'left') {
        moveLeft(1);
      } else if (target.dataset.position === 'right') {
        moveRight(1);
      }
      setValue(value);
    }
  };

  const calculatePos = (el: HTMLElement) => {
    const tlOffsetWidth = tabListWrapper.value?.offsetWidth || 0;
    if (el.offsetLeft + offsetContent.value < 0) {
      el.dataset.position = 'left';
      disableLeftArrow.value = false;
    } else if (el.offsetLeft + el.offsetWidth + offsetContent.value > tlOffsetWidth) {
      el.dataset.position = 'right';
      disableRightArrow.value = false;
    } else {
      el.dataset.position = 'visible';
    }
  };

  const calculateAllPoses = () => {
    disableRightArrow.value = true;
    disableLeftArrow.value = true;
    tabListContent.value?.querySelectorAll('li')?.forEach((e) => calculatePos(e));
  };

  const moveLeft = (count: number) => {
    const invisible = tabListContent.value?.querySelectorAll('[data-position="left"]');
    if (invisible?.length) {
      let closestLeft = invisible[0] as HTMLElement;
      if (invisible.length > count) {
        closestLeft = invisible[invisible.length - count] as HTMLElement;
      }
      offsetContent.value = -closestLeft.offsetLeft;
      calculateAllPoses();
    }
  };

  const moveRight = (count: number) => {
    const invisible = tabListContent.value?.querySelectorAll('[data-position="right"]');
    const tlOffsetWidth = tabListWrapper.value?.offsetWidth || 0;
    if (invisible?.length) {
      let closestRight = invisible[invisible.length - 1] as HTMLElement;
      if (invisible.length > count) {
        closestRight = invisible[count - 1] as HTMLElement;
      }
      offsetContent.value = tlOffsetWidth - closestRight.offsetLeft - closestRight.offsetWidth;
      calculateAllPoses();
    }
  };

  const slideToActiveTabIfInvisible = () => {
    if (props.type === 'main') {
      const active = tabListWrapper.value?.querySelector(`[data-value="${props.modelValue}"]`) as HTMLElement;
      if (active?.dataset.position === 'right') {
        const tlOffsetWidth = tabListWrapper.value?.offsetWidth || 0;
        offsetContent.value = tlOffsetWidth - active.offsetLeft - active.offsetWidth;
        calculateAllPoses();
      }
    }
  };

  const calculateIfNeedsArrows = () => {
    if ((tabListContent.value?.offsetWidth || 0) > (tabListWrapper.value?.offsetWidth || 0)) {
      showArrows.value = true;
    }
  };

  const resizeEventHandlerDebounced = debounce((): void => {
    calculateIfNeedsArrows();
    calculateAllPoses();
  }, 5);

  watchEffect(() => {
    if (props.type === 'main') {
      const active = tabListWrapper.value?.querySelector(`[data-value="${props.modelValue}"]`);
      if (active && tabListMarker.value) {
        tabListMarker.value.style.left = `${(active.querySelector('span')?.offsetLeft || 0) + offsetContent.value}px`;
        tabListMarker.value.style.width = `${active.querySelector('span')?.offsetWidth || 0}px`;
      }
    }
  });

  onMounted(() => {
    calculateIfNeedsArrows();
    document.fonts?.ready.then(() => {
      calculateAllPoses();
      slideToActiveTabIfInvisible();
      setTimeout(() => { transitions.value = `all ${props.transitionDuration / 1000}s`; }, 500);
    });
    addEventListener('resize', resizeEventHandlerDebounced);
  });

  onBeforeUnmount(() => {
    removeEventListener('resize', resizeEventHandlerDebounced);
  });
</script>

<template>
  <div
    :class="{
      'tab-bar': true,
      'tab-bar--main': type === 'main',
      'tab-bar--sub': type === 'sub',
    }"
  >
    <div
      v-if="showArrows"
      :class="{
        'tab-bar__arrow': true,
        'tab-bar__arrow--left': true,
        'tab-bar__arrow--disabled': disableLeftArrow,
      }"
      @click="() => !disableLeftArrow ? moveLeft(slideElementsCount) : null"
    >
      <SelIcon name="IconChevronBaseLeft" size="medium" />
    </div>
    <div
      ref="tabListWrapper"
      :class="{
        'tab-bar__container': true,
      }"
    >
      <ul
        ref="tabListContent"
        :style="{
          left: offsetContent + 'px',
        }"
      >
        <li
          v-for="(item, index) in items"
          :key="index"
          class="tab-bar__item"
          :class="{
            active: modelValue === item.value,
            'tab-bar__item--disabled': item.disabled,
          }"
          :data-value="item.value"
          @click="(event) => onTabClick(event, item.value, item.disabled)"
        >
          <slot :item="item" name="prependElement" />
          <SelIcon
            v-if="!!item.iconStart"
            :color="item.iconStart.color || '#9CA9C1'"
            :name="item.iconStart.name"
            :size="type === 'main' ? 'large' : 'medium'"
          />
          <span class="label">
            {{ item.label }}
          </span>
          <SelIcon
            v-if="!!item.iconEnd"
            :color="item.iconEnd.color || '#9CA9C1'"
            :name="item.iconEnd.name"
            :size="type === 'main' ? 'large' : 'medium'"
          />
          <slot :item="item" name="appendElement" />
        </li>
      </ul>
      <div class="tab-bar__container-sl" />
      <span v-show="modelValue && type !== 'sub'" ref="tabListMarker" class="tab-bar__active-marker" />
    </div>
    <div
      v-if="showArrows"
      :class="{
        'tab-bar__arrow': true,
        'tab-bar__arrow--right': true,
        'tab-bar__arrow--disabled': disableRightArrow,
      }"
      @click="() => !disableRightArrow ? moveRight(slideElementsCount) : null"
    >
      <SelIcon name="IconChevronBaseRight" size="medium" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @forward 'tab-bar';

  .tab-bar__active-marker {
    transition: v-bind('transitions');
  }

  ul {
    transition: v-bind('transitions');
  }
</style>
