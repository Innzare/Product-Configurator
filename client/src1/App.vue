<template>
  <div class="app-wrapper">
    <Header />

    <main class="main">
      <Sidebar v-show="isSidebarOpen" @toggleSidebar="toggleSidebar" />
      <EmployeeInfo @toggleSidebar="toggleSidebar" />
    </main>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import Header from '@/components/Layout/Header';
import Sidebar from '@/components/Sidebar/Sidebar';
import EmployeeInfo from '@/components/Employee/EmployeeInfo';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Sidebar,
    EmployeeInfo
  },

  setup() {
    const isSidebarOpen = ref(true);

    const toggleSidebar = () => {
      isSidebarOpen.value = !isSidebarOpen.value;
    };

    return {
      isSidebarOpen,
      toggleSidebar
    };
  }
});
</script>

<style lang='scss'>
@import '@/assets/styles/main.scss';

.app-wrapper {
  display: flex;
  flex-direction: column;
}

.main {
  display: flex;
  height: calc(100vh - 104px);
}
</style>