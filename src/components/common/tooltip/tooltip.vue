<script setup lang="ts">
  import { Tippy } from 'vue-tippy';
  import 'tippy.js/dist/tippy.css';
  import { ref, computed } from 'vue';
  import { setZIndex, Z_INDEX } from '../../../composables/defaults';
  import TooltipProps, { TooltipEmits, TooltipExpose } from './types';
  import ContentC from './tooltip-content.vue';

  const props = withDefaults(defineProps<TooltipProps>(), {
    theme: 'default',
    content: '',
    offset: () => [0, 8],
    placement: 'bottom',
    delay: 100,
    hideOnClick: true,
    maxHeight: 200,
    trigger: 'mouseenter',
  });

  const emit = defineEmits<TooltipEmits>();

  const isComponent = computed(() => typeof props.content === 'object');
  const _theme = computed(() => (isComponent.value ? 'default' : 'table-tooltip'));

  // TODO: Экранировать
  const _content = computed(() => props.content);

  const tooltip = ref<typeof Tippy>();
  const zIndexC = setZIndex(props, Z_INDEX.MODAL_HINTS);

  const closeTooltip = () => {
    tooltip?.value?.hide();
  };

  defineExpose<TooltipExpose>({
    closeTooltip,
    tooltip,
  });
</script>

<template>
  <Tippy
    v-if="!disabled"
    :content="content"
    ref="tooltip"
    v-bind="$attrs"
    :allowHTML="allowHTML"
    :animateFill="animateFill"
    :appendTo="appendTo"
    arrow
    :delay="delay"
    :hideOnClick="hideOnClick"
    :inlinePositioning="inlinePositioning"
    :interactive="interactive"
    :offset="offset"
    :placement="placement"
    :theme="_theme"
    :trigger="trigger"
    :zIndex="zIndexC"
    :maxWidth="maxWidth"
    @hidden="emit('toggle', false)"
    @show="emit('toggle', true)"
  >
    <template v-if="!isComponent" #content>
      <ContentC v-if="allowHTML" :maxHeight="Number(maxHeight)" v-html="_content" />
      <ContentC v-else :maxHeight="Number(maxHeight)" v-text="_content" />
    </template>
    <slot />
  </Tippy>
  <span v-else>
    <slot />
  </span>
</template>

<style lang="scss">
  @forward 'tooltip';
</style>
