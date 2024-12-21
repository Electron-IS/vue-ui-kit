<script lang="ts" setup>
  import { SelIconProps, useSizeClass } from './icons';
  import { getColor } from '../../../composables/colors';
  import * as icons from '../icons';

  const props = defineProps<SelIconProps>();

  const sizeClass = useSizeClass(props);
  const isCustomSize = props.customSize === undefined || 'custom-size';

</script>

<template>
  <i
    :class="['sel-icon', isCustomSize === true ? sizeClass : isCustomSize]"
    :style="{ color: getColor(color)!, ...(customSize ? { width: `${props.customSize}px`, height: `${props.customSize}px` } : {}) }"
  >
    <Component :is="icons[name!]" />
  </i>
</template>

<style lang="scss" scoped>
  @forward 'sel-icon';
</style>
