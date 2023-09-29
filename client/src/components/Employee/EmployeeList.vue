<template>
  <div class="employee-list">
    <div class="employee-list__title-wrapper">
      <h1 class="employee-list__title">Сотрудники</h1>

      <ActionButton text="Добавить сотрудника" type="outlined" @click="addEmployee">
        <template #icon>
          <PlusIcon primary />
        </template>
      </ActionButton>
    </div>

    <div class="employee-form-wrapper">
      <EmployeeItem v-for="(employee, index) of employees" :employee="employee" :index="index" @removeEmployee="removeEmployee" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Employee } from '@/helpers/employee';
import EmployeeItem from './EmployeeItem';
import ActionButton from '@/components/ActionButton';
import PlusIcon from '@/components/SvgIcons/PlusIcon';

export default defineComponent({
  name: 'EmployeeList',
  components: {
    EmployeeItem,
    ActionButton,
    PlusIcon
  },

  props: {
    employees: {
      type: Array,
      default: () => {}
    }
  },

  setup(props, { emit }) {
    const addEmployee = () => {
      const employee = new Employee();

      emit('addEmployee', employee);
    };

    const removeEmployee = (employee) => {
      emit('removeEmployee', employee);
    };

    return { addEmployee, removeEmployee };
  }
})
</script>

<style lang="scss" scoped>
  .employee-list {
    .employee-form-wrapper {
      display: flex;
      flex-direction: column;
      gap: 10px;
      height: 100%;
    }
    
    &__title-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 15px;
      align-items: center;
      margin-bottom: 10px;
      min-height: 50px;
    }

    &__title {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #111111;
    }
  }
</style>