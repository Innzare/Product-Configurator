<template>
  <div class="preview">
    <h1 class="preview__title">Корзина</h1>

    <div class="preview__content">
      <h2 v-if="configurations.length === 0">У вас нет сохраненных конфигураций</h2>

      <div v-else class="items-list">
        <CartItem v-for="item of configurations" :key="item.id" :data="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import CartItem from '@/components/CartItem';

export default defineComponent({
  name: 'Preview',
  components: {
    CartItem
  },

  setup(props) {
    const store = useStore();

    const configurations = computed(() => store.state.configurations);

    return { configurations };
  }
});
</script>

<style lang="scss" scoped>
.preview {
  animation-name: fade-in;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  display: flex;
  flex-direction: column;
  height: 100%;
  animation-name: fade-in;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  &__title {
    margin-bottom: 16px;
    font-weight: 400;
  }

  &__content {
    padding: 32px;
    background-color: #fff;
    display: flex;
    height: 100%;
    border: 1px solid rgba(163, 163, 163, 0.4);
    border-radius: 8px;

    .items-list {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      height: max-content;
    }
  }
}
</style>