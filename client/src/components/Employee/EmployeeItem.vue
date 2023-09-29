<template>
  <div class="employee-item-form">
    <div class="employee-item-form__fields-wrapper">
      <span>{{ index + 1 }}</span>

      <TextField label='Имя' v-model="employee.name" />
      <TextField label='Фамилия' v-model="employee.surname" />
      <TextField label='Возраст' v-model="employee.age" isNumberField />
      <TextField label='Стаж' v-model="employee.experience" isNumberField />
      <TextField label='Адрес' v-model="employee.address" />

      <button @click="removeEmployee">Удалить</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import TextField from '@/components/TextField';

export default defineComponent({
  name: 'EmployeeItem',
  components: {
    TextField
  },

  props: {
    employee: {
      type: Object,
      default: () => {}
    },

    index: {
      type: Number,
      default: 0
    }
  },

  setup(props, { emit }) {
    const removeEmployee = () => {
      emit('removeEmployee', props.employee);
    };

    return { removeEmployee };
  }
})
</script>

<style lang="scss" scoped>
  .employee-item-form {
    animation-name: fade-in;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;

    @media(max-width: 768px) {
      border-bottom: 1px solid #cccccc82;
    }

    &__title {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #111111;
      margin-bottom: 20px;
    }

    &__fields-wrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 18px;

      span {
        font-weight: bold;
      }

      @media(max-width: 768px) {
        gap: 8px;
        flex-direction: column;
        align-items: flex-start;
      }

      button {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #01A7FD;
      border-bottom: 1px solid transparent;
      transition: all .2s ease-in-out;

      &:hover {
        border-color: #01A7FD;
      }

      @media(max-width: 768px) {
        margin-bottom: 16px;
      }
    }
    }
  }
</style>