<template>
  <div class="cart-item">
    <button @click="removeItem" class="cart-item__remove-button">✕</button>
    <CoffeeMachineIcon width="100" height="100" :colorPalette="selectedColor" />

    <div class="cart-item__info">
      <div class="cart-item__text">
        <p><span>Размер:</span> {{ data.size.text }}</p>
        <p><span>Цвет:</span> {{ data.color.text }}</p>
        <p><span>Кол-во напитков:</span> {{ data.drinksCount.text }}</p>
      </div>

      <div class="cart-item__counter">
        <button class="cart-item__counter-decrease" :disabled="itemCount <= 1" @click="decreaseCount">-</button>
        <span class="cart-item__counter-number"> {{ itemCount }}</span>
        <button class="cart-item__counter-increase" @click="increaseCount">+</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, ref } from 'vue';
import { useStore } from 'vuex';
import CoffeeMachineIcon from '@/components/SvgIcons/CoffeeMachineIcon';

const AVAILABLE_COLORS = {
  white: {
    main: '#ccc',
    shadow: '#999'
  },
  black: {
    main: '#4f4f4f',
    shadow: '#333'
  }
};

const AVAILABLE_SIZES = {
  medium: {
    width: '150',
    height: '150'
  },
  large: {
    width: '250',
    height: '250'
  }
};

const AVAILABLE_DRINKS_COUNT = {
  6: '6',
  8: '8',
  12: '12'
};

export default defineComponent({
  name: 'CartItem',
  components: {
    CoffeeMachineIcon
  },
  props: {
    data: {
      type: Object,
      default: {}
    }
  },

  setup(props) {
    const { data } = props;
    const store = useStore();
    const itemCount = ref(1);

    const increaseCount = () => itemCount.value++;
    const decreaseCount = () => {
      if (itemCount.value > 1) {
        itemCount.value--;
      }
    };
    const removeItem = () => {
      store.commit('removeConfiguration', data);
    };

    const selectedSize = computed(() => AVAILABLE_SIZES[data.size.value]);
    const selectedColor = computed(() => AVAILABLE_COLORS[data.color.value]);
    const selectedDrinksCount = computed(() => AVAILABLE_DRINKS_COUNT[data.drinksCount.value]);

    return { selectedSize, selectedColor, selectedDrinksCount, itemCount, removeItem, increaseCount, decreaseCount };
  }
});
</script>

<style lang="scss" scoped>
.cart-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;

  &__remove-button {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    width: 18px;
    height: 18px;
    border-radius: 100%;
    background-color: #ccc;
    color: #fff;
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    gap: 16px;

    span {
      font-weight: bold;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__counter {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 6px;

    &-number {
      width: 15px;
      text-align: center;
    }

    &-decrease {
      padding: 8px;
      font-size: 18px;
    }

    &-increase {
      padding: 8px;
      font-size: 18px;
    }
  }
}
</style>