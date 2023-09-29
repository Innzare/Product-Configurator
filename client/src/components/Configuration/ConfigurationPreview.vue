<template>
  <div class="configuration-preview">
    <div class="configuration-preview__title-wrapper">
      <div class="configuration-preview__title">
        <h3>Конфигурация:</h3>
        <span>{{ configurationText }}</span>
      </div>
      <ActionButton type="outlined" text="Сохранить" @click="onSaveConfigurationClick" />
    </div>

    <div class="configuration-preview__content">
      <div class="configuration-preview__drinks-count">
        <CupIcon />
        <span>✕ {{ selectedDrinksCount }}</span>
      </div>
      <CoffeeMachineIcon :width="selectedSize.width" :height="selectedSize.height" :colorPalette="selectedColor" />
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import CoffeeMachineIcon from '@/components/SvgIcons/CoffeeMachineIcon';
import CupIcon from '@/components/SvgIcons/CupIcon';
import ActionButton from '@/components/ActionButton';
import { generateRandomId } from '@/helpers/common';

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
  name: 'ConfigurationPreview',
  components: {
    CoffeeMachineIcon,
    CupIcon,
    ActionButton
  },
  props: {
    settings: {
      type: Object,
      default: {}
    },
    config: {
      type: Array,
      default: []
    }
  },

  setup(props) {
    const { settings, config } = props;
    const store = useStore();

    const selectedSize = computed(() => AVAILABLE_SIZES[settings.size.value]);
    const selectedColor = computed(() => AVAILABLE_COLORS[settings.color.value]);
    const selectedDrinksCount = computed(() => AVAILABLE_DRINKS_COUNT[settings.drinksCount.value]);

    const configurationText = computed(() => {
      const selectedConfigValues = config.map((item) => {
        const field = item.title;
        const value = settings[item.field].text;

        return `${field}: ${value}`;
      });

      return selectedConfigValues.join(', ');
    });

    const onSaveConfigurationClick = () => {
      const id = generateRandomId();
      store.dispatch('addConfiguration', { ...settings, id });
    };

    return {
      selectedSize,
      selectedColor,
      configurationText,
      selectedDrinksCount,
      onSaveConfigurationClick
    };
  }
});
</script>

<style lang="scss" scoped>
.configuration-preview {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  &__title-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 21px;
    border-bottom: 1px solid rgba(163, 163, 163, 0.4);

    h3 {
      font-weight: 400;
    }
  }

  &__title {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  &__drinks-count {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 22px;
    font-weight: bold;

    span {
      margin-top: 10px;
    }
  }
}
</style>