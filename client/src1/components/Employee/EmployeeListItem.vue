<template>
  <div :class="employeeItemClasses" @click="onEmployeeClick">
    <div class="employee-item__image">
      <ImageIcon />
    </div>
    <div class="employee-item__info">
      <p class="employee-item__username">{{ employee.username }}</p>
      <p class="employee-item__email">{{ employee.email }}</p>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import ImageIcon from '@/components/SvgIcons/ImageIcon';

export default defineComponent({
  name: 'EmployeeItem',
  components: {
    ImageIcon
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
    const { employee } = props;
    const store = useStore();

    const onEmployeeClick = () => {
      store.dispatch('setEmployee', employee);
    };

    const isCurrentEmployeeSelected = computed(() => {
      return store.state.selectedEmployee !== null && employee.id === store.state.selectedEmployee.id;
    });

    const employeeItemClasses = computed(() => {
      return {
        'employee-item': true,
        'employee-item--active': isCurrentEmployeeSelected.value
      };
    });

    return { onEmployeeClick, isCurrentEmployeeSelected, employeeItemClasses };
  }
});
</script>

<style lang="scss" scoped>
.employee-item {
  display: flex;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  min-height: 70px;
  transition: border-color 0.25s ease;
  cursor: pointer;

  &--active {
    .employee-item__info {
      background: #e0e0e0;
    }
  }

  &:hover {
    border-color: #cccccc;
  }

  &__image {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border-right: 1px solid #e0e0e0;
    min-width: 70px;
  }
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    padding: 8px;
    width: 100%;
    min-width: 0;
  }
  &__username {
    color: #333;
    font-size: 14px;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__email {
    color: #76787d;
    font-size: 14px;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>