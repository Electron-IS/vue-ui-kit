<script setup lang="ts">
  import { computed } from 'vue';
  import type { FlexProps } from './types';

  const props = withDefaults(defineProps<FlexProps>(), {
    gap: 5,
    direction: 'col',
  });

  const classes = computed(() => {
    const classes = [];

    classes.push(props.autoGap ? 'flex-gap-auto' : `flex-gap-${props.gap}`);
    return classes;
  });
</script>

<template>
  <div
    :class="[
      'flex',
      // `flex-gap-${gap}`,
      `flex-${direction}`,
      {
        [`flex-justify-${justify}`]: justify,
        [`flex-align-${align}`]: align,
        [`flex-full-width`]: fullWidth,
        [`flex-full-height`]: fullHeight,
        [`flex-wrap`]: wrap,
      },
      ...classes,
    ]"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">
  @import 'flex';
</style>
