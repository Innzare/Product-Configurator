<template>
  <div class="employee-info">
    <div class="employee-info__actions">
      <button @click="$emit('toggleSidebar')">
        <BurgerIcon />
      </button>
      <button v-if="employee !== null" @click="removeEmployee">Закрыть</button>
    </div>

    <div class="employee-info__not-selected" v-if="employee === null">
      Выберите сотрудника, чтобы посмотреть его профиль
    </div>

    <div v-else class="employee-info__content">
      <div class="employee-info__image">
        <ImageIcon width="100" height="100" />
      </div>

      <div class="employee-info__text">
        <p class="employee-info__name">{{ employee.name }}</p>
        <p class="employee-info__section"><span>email:</span> {{ employee.email }}</p>
        <p class="employee-info__section"><span>phone:</span> {{ employee.phone }}</p>

        <div class="employee-info__about">
          <h3>О себе:</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus at quaerat est eum dolores cum
            incidunt odio. Aliquam sequi ab deleniti ipsam, blanditiis quae? Quas, reiciendis. Dicta ipsam ad et? Unde
            earum odio enim ut saepe assumenda, voluptas ullam architecto repellat eum officiis porro dicta voluptatibus
            ipsam laborum expedita deleniti aspernatur animi dolorum ipsa tempore, illo repudiandae placeat incidunt.
            Veniam!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import ImageIcon from '@/components/SvgIcons/ImageIcon';
import BurgerIcon from '@/components/SvgIcons/BurgerIcon';

export default defineComponent({
  name: 'EmployeeInfo',
  components: {
    ImageIcon,
    BurgerIcon
  },

  setup(props) {
    const store = useStore();

    const employee = computed(() => store.state.selectedEmployee);
    const removeEmployee = () => {
      store.dispatch('removeEmployee');
    };

    return { employee, removeEmployee };
  }
});
</script>

<style lang="scss" scoped>
.employee-info {
  position: relative;
  padding: 52px 32px 52px;
  width: 100%;

  &__actions {
    position: absolute;
    top: 16px;
    left: 32px;
    right: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  &__not-selected {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;

    @media (max-width: 1024px) {
      flex-wrap: wrap;
      gap: 30px;
    }
  }

  &__image {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #e0e0e0;
    flex: 1 1 40%;
    width: 420px;
    height: 280px;

    @media (max-width: 1024px) {
      width: 100%;
      flex: 1 1 100%;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;

    @media (max-width: 1024px) {
      flex-wrap: wrap;
      gap: 30px;
    }
  }

  &__name {
    color: #000;
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
    margin-bottom: 10px;
  }

  &__section {
    margin-bottom: 10px;

    span {
      color: #333;
      font-weight: 600;
    }
  }

  &__about {
    margin-top: 10px;

    h3 {
      color: #333;
      font-size: 16px;
      font-weight: 600;
      line-height: 140%;
      margin-bottom: 25px;
    }
  }
}
</style>