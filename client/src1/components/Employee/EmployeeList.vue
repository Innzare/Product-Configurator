<template>
  <div class="employee-list">
    <div v-if="isLoading" class="employee-list__load">
      <Loader />
    </div>
    <span v-if="employees.length === 0 && !isLoading" class="employee-list__empty">
      {{ searchText === '' ? 'Начните поиск' : 'Ничего не найдено' }}
    </span>

    <template v-if="!isLoading">
      <EmployeeListItem v-for="(employee, index) of employees" :key="index" :employee="employee" />
    </template>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import EmployeeListItem from './EmployeeListItem';
import Loader from '@/components/Loader';

export default defineComponent({
  name: 'EmployeeList',
  components: {
    EmployeeListItem,
    Loader
  },

  props: {
    employees: {
      type: Array,
      default: () => {}
    },
    searchText: {
      type: String,
      default: ''
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },

  setup(props, { emit }) {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.employee-list {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__load {
    display: flex;
    justify-content: center;
  }

  &__empty {
    color: #76787d;
    font-size: 14px;
  }
}
</style>