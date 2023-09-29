<template>
  <div>
    <div class="sidebar-overflow" @click="$emit('toggleSidebar')"></div>
    <div class="sidebar">
      <div class="sidebar__search-section">
        <h3 class="sidebar__section-title">Поиск сотрудников</h3>
        <TextField v-model="searchText" @input="searchEmployee" label="Введите Id или имя " />
      </div>

      <div class="sidebar__results-section">
        <div class="sidebar__results-title-wrapper">
          <h3 class="sidebar__section-title">Результаты</h3>
          <button v-if="!isLoading && searchText !== ''" @click="clearResults">Очистить</button>
        </div>
        <EmployeeList :employees="employees" :searchText="searchText.trim()" :isLoading="isLoading" />
      </div>
    </div>

    <Snackbar :isOpen="isError" @onClose="onCloseSnackbar" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import TextField from '@/components/TextField';
import EmployeeList from '@/components/Employee/EmployeeList';
import Snackbar from '@/components/Snackbar';

export default defineComponent({
  name: 'Sidebar',
  emits: ['toggleSidebar'],
  components: {
    TextField,
    EmployeeList,
    Snackbar
  },

  setup() {
    const employees = ref([]);
    const isLoading = ref(false);
    const isError = ref(false);
    const searchText = ref('');

    const searchEmployee = async (value) => {
      try {
        isLoading.value = true;

        if (value.trim() === '') {
          employees.value = [];
          isLoading.value = false;
          return;
        }

        const values = value.split(',');
        const valuesFiltered = values.filter((item) => item.trim() !== '');

        const urls = valuesFiltered.map((value) => {
          const isSearchById = !isNaN(Number(value));

          return isSearchById
            ? `https://jsonplaceholder.typicode.com/users?id=${value.trim()}`
            : `https://jsonplaceholder.typicode.com/users?username_like=${value.trim()}`;
        });

        const responses = await Promise.all(urls.map((url) => fetch(url)));
        if (!responses.every((response) => response.ok)) {
          throw new Error('Не удалось получить данные');
        }
        const data = await Promise.all(responses.map((response) => response.json()));

        const allData = data.reduce((accumulator, currentData) => accumulator.concat(currentData), []);

        let uniqueObjects = {};

        allData.forEach((obj) => {
          uniqueObjects[obj.id] = obj;
        });

        let uniqueArrayOfObjects = Object.values(uniqueObjects);

        employees.value = uniqueArrayOfObjects;
        isLoading.value = false;
      } catch (error) {
        isError.value = true;
        isLoading.value = false;
        console.error('Произошла ошибка:', error);
        return [];
      }
    };

    const clearResults = () => {
      searchText.value = '';
      employees.value = [];
    };

    const onCloseSnackbar = () => {
      isError.value = false;
    };

    return { searchEmployee, clearResults, employees, searchText, isLoading, isError, onCloseSnackbar };
  }
});
</script>

<style lang="scss" scoped>
.sidebar-overflow {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
  height: 100vh;
  width: 100vw;
  background: #00000057;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
}
.sidebar {
  display: flex;
  flex-direction: column;
  min-width: 320px;
  height: 100%;
  border-right: 1px solid rgba(17, 17, 17, 0.1);

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    z-index: 10;
    background: #fff;
  }

  &__section-title {
    color: #333;
    font-size: 16px;
    margin-bottom: 16px;
  }

  &__search-section {
    padding: 32px 32px 0 32px;
    margin-bottom: 24px;

    @media (max-width: 768px) {
      padding: 16px 16px 0 16px;
    }
  }
  &__results-section {
    padding: 0 32px 32px 32px;
    height: 100%;
    overflow-y: auto;

    @media (max-width: 768px) {
      padding: 16px 16px 0 16px;
    }

    h3 {
      margin-bottom: 0;
    }

    .sidebar__results-title-wrapper {
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>