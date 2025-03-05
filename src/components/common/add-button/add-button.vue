<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";

// Пропсы
const props = defineProps({
  addLabel: {
    type: String,
    required: true, // Текст для кнопки добавления
  },
  deleteLabel: {
    type: String,
    required: true, // Текст для кнопки удаления
  },
});

// События
const emit = defineEmits(["addAction", "deleteAction"]);

// Локальное состояние видимости меню
const isDropdownVisible = ref(false);

// Функция для переключения видимости меню
const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};

// Обработка добавления
const handleAddAction = () => {
  emit("addAction");
  isDropdownVisible.value = false; // Закрытие меню после действия
};

// Обработка удаления
const handleDeleteAction = () => {
  emit("deleteAction");
  isDropdownVisible.value = false; // Закрытие меню после действия
};
</script>

<template>
  <div class="dropdown">
    <!-- Кнопка для открытия/закрытия меню -->
    <button class="dropdown__toggle" @click="toggleDropdown">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    </button>

    <!-- Выпадающее меню -->
    <div v-if="isDropdownVisible" class="dropdown__menu">
      <button class="dropdown__item" @click="handleAddAction">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        {{ addLabel }}
      </button>
      <button class="dropdown__item dropdown__item--delete" @click="handleDeleteAction">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
        {{ deleteLabel }}
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dropdown {
  position: relative;
  display: inline-block;

  &__toggle {
    background-color: #2b6eff;
    color: white;
    border: none;
    border-radius: 50%;
    padding: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s;

    &:hover {
      background-color: #235bd4;
    }
  }

  &__menu {
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-top: 8px;
    z-index: 1000;
    width: 200px;
    padding: 8px 0;
  }

  &__item {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    font-size: 14px;
    color: #000;
    background: none;
    border: none;
    cursor: pointer;
    width: 100%;
    transition: background-color 0.3s;

    &:hover {
      background-color: #f0f0f0;
    }

    svg {
      margin-right: 8px;
    }

    &--delete {
      color: #d9534f;

      &:hover {
        background-color: #f8d7da;
      }
    }
  }
}
</style>
