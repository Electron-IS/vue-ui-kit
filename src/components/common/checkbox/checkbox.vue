<script setup lang="ts">
import { ref, defineEmits } from "vue";
import CheckboxProps from "./types";

// Props
const props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: false, // двустороннее связывание
  label: '', // текст рядом с чекбоксом
  disabled: false, // отключение чекбокса
});

// Emits
const emit = defineEmits(["update:modelValue"]);

// Локальное состояние
const isChecked = ref(props.modelValue);

// Обновление состояния
const toggleCheckbox = () => {
  if (!props.disabled) {
    isChecked.value = !isChecked.value;
    emit("update:modelValue", isChecked.value);
  }
};
</script>

<template>
  <div
      class="custom-checkbox"
      :class="{ 'custom-checkbox--disabled': props.disabled }"
      @click="toggleCheckbox"
  >
    <div
        class="custom-checkbox__box"
        :class="{
          'custom-checkbox__box--checked': isChecked,
          'custom-checkbox__box--disabled': disabled,
          'custom-checkbox__box--disabled--checked': disabled && isChecked
        }"
    >
      <svg
          v-if="isChecked"
          class="custom-checkbox__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
    <span class="custom-checkbox__label">{{ label }}</span>
  </div>
</template>

<style scoped lang="scss">
@forward 'checkbox';

.custom-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.custom-checkbox__box {
  width: 24px;
  height: 24px;
  border: 2px solid #2B6EFF;
  background-color: #F8F8F8;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  transition: background-color 0.3s, border-color 0.3s;
}

.custom-checkbox__box--checked {
  background-color: #2B6EFF;
  border-color: #2B6EFF;
}

.custom-checkbox__checkmark {
  color: white;
  font-size: 16px;
  line-height: 1;
}

.custom-checkbox__label {
  font-size: 16px;
  color: #000;
  font-family: 'Montserrat', sans-serif !important;
}

.custom-checkbox--disabled {
  cursor: not-allowed;
}

.custom-checkbox__box--disabled {
  border-color: #C6C6C6;
}
.custom-checkbox__box--disabled--checked {
  background-color: #C6C6C6;
}
</style>
