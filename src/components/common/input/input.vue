<script setup lang="ts">
import {ref, defineEmits, watch} from "vue";
import InputProps from "./types";
// Props
const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  placeholder: '',
  label: '',
  disabled: false,
  error: false,
  errorMessage: '',
});

// Emits
const emit = defineEmits(["update:modelValue"]);

// Локальное состояние
const inputValue = ref(props.modelValue);
const isActive = ref(false);

// Ссылка на input
const inputRef = ref<HTMLInputElement | null>(null);

// Методы для обновления состояния
const onFocus = () => {
  isActive.value = true;
};

const onBlur = () => {
  isActive.value = inputValue.value !== "";
};

// Программный фокус
const focusInput = () => {
  if (!props.disabled && inputRef.value) {
    inputRef.value?.focus();
    isActive.value = true;
  }
};

// Watch для синхронизации значений
watch(
    () => inputValue.value,
    (newValue) => emit("update:modelValue", newValue)
);
</script>

<template>
  <div
      class="custom-input"
      :class="[
      { 'custom-input--active': isActive },
      { 'custom-input--disabled': disabled },
      { 'custom-input--error': error },
    ]"
  >
    <label
        class="custom-input__label"
        @click="focusInput"
        :class="{
          'custom-input__label--error': error,
          'custom-input__label--active': isActive || inputValue,
          'custom-input__label--disabled': disabled
        }"
    >
      {{ label }}
    </label>
    <input
        ref="inputRef"
        v-model="inputValue"
        :disabled="disabled"
        placeholder=""
        class="custom-input__field"
        @focus="onFocus"
        @blur="onBlur"
    />
    <p v-if="errorMessage" class="custom-input__error-message">{{ errorMessage }}</p>
  </div>
</template>

<style scoped lang="scss">
@forward 'input';

.custom-input {
  width: 100%;
  font-family: 'Montserrat', sans-serif !important;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 8px 0;
}

.custom-input__label {
  position: absolute;
  top: 22px;
  left: 32px;
  color: #8F8F8F;
  font-size: 16px;
  transition: all 0.3s;
  cursor: text;
}

.custom-input__label--active {
  top: 14px;
  left: 32px;
  font-size: 12px;
  color: #8F8F8F;
}

.custom-input__label--error {
  color: #8F8F8F;
}

.custom-input__field {
  background-color: #F8F8F8;
  color: black;
  box-sizing: border-box;
  height: 64px;
  font-family: 'Montserrat', sans-serif !important;
  padding: 0px 32px;
  padding-top: 12px;
  font-size: 16px;
  border: none;
  border-radius: 16px;
  transition: border-color 0.3s, background-color 0.3s;
  outline: none;
}

.custom-input__field:focus {
  border: 1px solid #2B6EFF;
}

.custom-input--active .custom-input__field {
  border-color: #2B6EFF;
}

.custom-input--disabled .custom-input__field {
  background-color: #F5F5F5;
  color: black;
  cursor: not-allowed;
}

.custom-input--error .custom-input__field {
  background-color: #FCE0E4;
  border: 1px solid #F35252;
}

.custom-input__error-message {
  font-family: 'Montserrat', sans-serif !important;
  color: #F30B0F;
  font-size: 12px;
  margin-top: 4px;
}

.custom-input__label--disabled {
  color: #C6C6C6;
  cursor: not-allowed;
}
</style>
