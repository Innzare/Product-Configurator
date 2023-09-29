<template>
  <div :class="isOpen ? 'snackbar snackbar--open' : 'snackbar'">
    Ошибка при получении данных <span @click="$emit('onClose')">✕</span>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Snackbar',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style lang="scss" scoped>
.snackbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  position: fixed;
  bottom: 20px;
  left: 20px;
  padding: 16px;
  border-radius: 4px;
  transition: transform 0.25s ease-in-out;
  transform: translateY(calc(100% + 20px));
  z-index: 20;
  background-color: #ff9da0;

  &--open {
    transform: translateY(0%);
  }

  span {
    cursor: pointer;
  }
}
</style>