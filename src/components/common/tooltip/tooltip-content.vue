<script lang="ts" setup>
  import { computed } from 'vue';

  const props = defineProps<{
    maxHeight: number,
  }>();

  const maxHeight = computed(() => `${props.maxHeight}px`);
</script>

<template>
  <div class="long-text-formatter-content">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  @import "../../../styles/mixins/scroll";

  .long-text-formatter-content {
    max-height: v-bind(maxHeight);
    overflow: auto;
    word-wrap: break-word;

    padding: 12px;

    @include scrollbar;
  }
</style>
