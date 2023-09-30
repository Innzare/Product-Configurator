<template>
  <div class="form">
    <h1 class="form__title">Конфигуратор кофемашины</h1>

    <div :class="['form__content', { 'form__content--loading': isLoading }]">
      <Loader v-if="isLoading" />

      <template v-else>
        <ConfigurationSettings
          :config="configurationsToRender"
          @onSettingsChange="onSelectedConfigurationsChange"
          @onSettingsClear="onSelectedConfigurationsClear"
        />
        <ConfigurationPreview :settings="selectedConfigurations" :config="configurations" />
      </template>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed, onMounted } from 'vue';
import { getConfigurations } from '@/api';
import Loader from '@/components/Loader';
import ConfigurationSettings from '@/components/Configuration/ConfigurationSettings';
import ConfigurationPreview from '@/components/Configuration/ConfigurationPreview';

export default defineComponent({
  name: 'Configurator',
  components: {
    ConfigurationSettings,
    ConfigurationPreview,
    Loader
  },

  setup() {
    const isLoading = ref(true);
    const configurations = ref([]);
    const selectedConfigurations = ref({});
    const initialConfigurations = {};

    onMounted(() => {
      getConfigurations().then(({ configurations: configurationsFromResponse }) => {
        configurations.value = configurationsFromResponse;

        configurationsFromResponse.forEach((config) => {
          const { field, values } = config;
          const isValuesExist = Array.isArray(values) && values.length > 0;

          if (isValuesExist) {
            initialConfigurations[field] = values[0];
          }
        });

        selectedConfigurations.value = { ...initialConfigurations };

        isLoading.value = false;
      });
    });

    const configurationsToRender = computed(() => {
      return configurations.value.map((config) => {
        const valuesWithIsActiveField = config.values.map((valuesItem) => ({
          ...valuesItem,
          isActive: selectedConfigurations.value[config.field].value === valuesItem.value
        }));

        return {
          ...config,
          values: valuesWithIsActiveField
        };
      });
    });

    const onSelectedConfigurationsClear = () => {
      Object.keys(selectedConfigurations.value).forEach((key) => {
        selectedConfigurations.value[key] = initialConfigurations[key];
      });
    };

    const onSelectedConfigurationsChange = (field, data) => {
      selectedConfigurations.value[field] = data;
    };

    return {
      configurations,
      selectedConfigurations,
      configurationsToRender,
      isLoading,
      onSelectedConfigurationsChange,
      onSelectedConfigurationsClear
    };
  }
});
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  height: 100%;
  animation-name: fade-in;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  .save-button-wrapper {
    display: flex;
    justify-content: flex-start;
    gap: 10px;
  }

  &__title {
    margin-bottom: 16px;
    font-weight: 400;
  }

  &__content {
    background-color: #fff;
    display: flex;
    height: 100%;
    border: 1px solid rgba(163, 163, 163, 0.4);
    border-radius: 8px;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    &--loading {
      justify-content: center;
      align-items: center;
    }
  }
}
</style>