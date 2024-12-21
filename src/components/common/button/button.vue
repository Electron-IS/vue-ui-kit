<script setup lang="ts">
import { computed } from 'vue';
import ButtonProps from './types';

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'button',
  variant: 'primary',
  size: 'medium',
  disabled: false,
});


type Emits = {
  (e: 'click'): void;
}

const emit = defineEmits<Emits>();

const onClick = () => {
  console.log('click')
  emit('click');
};

const computedClass = computed(() => `btn btn-${props.variant} btn-${props.size} ${props.disabled ? 'btn-disabled-' + props.variant : ''}`);
</script>

<template>
  <button :disabled="props.disabled" :class="computedClass" @click="onClick">
    <slot />
  </button>
</template>

<style scoped lang="scss">
@forward 'button';

.btn {
  padding: 0.5rem 1rem;
  border-radius: 16px;
  cursor: pointer;
  height: 64px;
  border: none;
  font-family: 'Montserrat', sans-serif !important;
  font-size: 16px;
  box-sizing: border-box;
  transition: 0.3s ease;
  &:hover {
    background-color: #0048E5;
  }
}
.btn-primary {
  background-color: #2B6EFF;
  color: white;
}
.btn-outline {
  color: #2B6EFF;
  background-color: white;
  border: 2px solid #2B6EFF;
  &:hover {
    background-color: #2B6EFF;
    color: white;
  }
}

.btn-disabled-primary {
  background-color: #E8E8E8;
  &:hover {
    background-color: #E8E8E8;
    cursor: auto;
  }
}

.btn-disabled-outline {
  background-color: white;
  color: #E8E8E8;
  border-color: #E8E8E8;
  &:hover {
    background-color: white;
    cursor: auto;
    color: #E8E8E8;
  }
}

.btn-medium {
  font-size: 16px;
}
</style>
