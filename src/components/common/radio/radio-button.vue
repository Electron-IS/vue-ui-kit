<script setup lang="ts">
import { ref, defineEmits, inject } from "vue";
import {RadioButtonProps} from "./types";
import {nanoid} from "nanoid";

const props = withDefaults(defineProps<RadioButtonProps>(), {
  label: '',
  value: '',
});

const emit = defineEmits(["update:modelValue"]);
const groupValue = inject("groupValue", ref(""));
const isDisabled = inject("isDisabled", ref(false));
const updateValue = inject<(value: string) => void>("updateValue");

const isChecked = ref(groupValue.value === props.value);

const onClick = () => {
  if (!isDisabled.value && updateValue) updateValue(props.value);
};
</script>

<template>
  <div
      :key="nanoid()"
      class="radio-button"
      :class="{ 'radio-button--checked': isChecked, 'radio-button--disabled': isDisabled }"
      @click="onClick"
  >
    <div class="radio-button__circle"></div>
    <span class="radio-button__label">{{ label }}</span>
  </div>
</template>

<style scoped lang="scss">
.radio-button {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  margin-bottom: 8px;
}

.radio-button--checked .radio-button__circle {
  background-color: #2B6EFF;
  border-color: #2B6EFF;
}

.radio-button__circle {
  width: 14px;
  height: 14px;
  border: 1px solid #2B6EFF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  background-color: white;
  transition: background-color 0.3s, border-color 0.3s;
}

.radio-button__label {
  font-family: 'Montserrat', sans-serif !important;
  font-size: 16px;
  color: #2F2F2F;
}

.radio-button--disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
