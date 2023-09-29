<template>
  <div class="configuration">
    <div class="configuration__settings">
      <h2 class="configuration__title">Параметры:</h2>

      <div v-for="field of config" :key="field.title" class="configuration__field">
        <h3 class="configuration__field-title">{{ field.title }}:</h3>
        <section class="configuration__field-content">
          <Button
            v-for="item of field.values"
            :isActive="item.isActive"
            :key="item.value"
            :text="item.text"
            @click="() => $emit('onSettingsChange', field.field, item)"
          />
        </section>
      </div>
    </div>

    <div>
      <ActionButton type="outlined" text="Сбросить" fullWidth @click="() => $emit('onSettingsClear')" />
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import Button from '@/components/Button';
import ActionButton from '@/components/ActionButton';

export default defineComponent({
  name: 'ConfigurationSettings',
  components: {
    Button,
    ActionButton
  },
  props: {
    config: {
      type: Array,
      default: []
    }
  },

  setup(props) {
    const { config } = props;

    const settingFieldsArray = computed(() => {
      return Object.values(config);
    });

    return { settingFieldsArray };
  }
});
</script>

<style lang="scss" scoped>
.configuration {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  min-width: 250px;
  padding: 16px 24px;
  border-right: 1px solid rgba(163, 163, 163, 0.4);

  &__settings {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
  }

  &__title {
    margin-bottom: 16px;
    font-weight: 400;
  }

  &__field {
    &-title {
      margin-bottom: 8px;
    }

    &-content {
      display: flex;
      gap: 8px;
    }
  }
}
</style>