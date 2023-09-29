<template>
  <header class="header">
    <h1 class="header__logo">Жилфонд</h1>

    <button class="header__profile">Пользователь</button>
  </header>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header'
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(17, 17, 17, 0.1);
  width: 100%;
  gap: 12px;
  min-height: 76px;
  padding: 32px;

  &__logo {
    color: #e31f24;
    font-size: 32px;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  &__profile {
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
}
</style>