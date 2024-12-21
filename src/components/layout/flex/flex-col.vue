<script setup lang="ts">
  import Flex from './flex.vue';
  import type { FlexProps } from './types';

  const props = withDefaults(defineProps<FlexProps>(), {
    gap: 4,
    direction: 'col',
  });
</script>

<template>
  <Flex v-bind="props">
    <slot />
  </Flex>
</template>
