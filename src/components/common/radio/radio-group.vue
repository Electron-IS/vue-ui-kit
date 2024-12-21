<script setup lang="ts">
// Компонент RadioGroup
import { ref, defineEmits, provide } from "vue";
import {RadioGroupProps} from "./types";
import {nanoid} from "nanoid";

const props = withDefaults(defineProps<RadioGroupProps>(), {
  modelValue: '',
  disabled: false,
});

const emitGroup = defineEmits(["update:modelValue"]);
const groupValue = ref(props.modelValue);

provide("groupValue", groupValue);
provide("updateValue", (value: string) => {
  if (!props.disabled) {
    groupValue.value = value;
    emitGroup("update:modelValue", value);
  }
});
provide("isDisabled", ref(props.disabled));
</script>

<template>
  <div :key="nanoid()" class="radio-group">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.radio-group {
  display: flex;
  flex-direction: column;
}
</style>
