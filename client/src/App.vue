<template>
  <div class="app-wrapper">
    <Header />

    <main class="main">
      <div class="container">
        <router-view></router-view>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Preview from '@/views/Preview';
import Configurator from '@/views/Configurator';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

export default defineComponent({
  name: 'App',
  components: {
    Preview,
    Configurator,
    Header,
    Footer
  },

  setup() {
    return {};
  }
});
</script>

<style lang='scss'>
@import '@/assets/styles/main.scss';

.app-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main {
  flex: 1;
  padding: 30px 0;
  background: #ecf1f4;

  @media (max-width: 768px) {
    padding-inline: 15px;
  }

  .container {
    max-width: 90%;
    height: 100%;
    margin-inline: auto;

    @media (max-width: 768px) {
      max-width: 100%;
    }
  }
}
</style>