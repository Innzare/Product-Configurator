<template>
  <header class="header">
    <router-link class="header__logo" to="/">
      <button>
        <HomeIcon />
      </button>
    </router-link>

    <router-link v-for="page in PAGES" :key="page.text" :to="page.path">
      <button
        @click="$emit('onChangePage', page.value)"
        :class="{
          button: true,
          'button--active': page.isActive
        }"
      >
        {{ page.text }}
      </button>
    </router-link>
  </header>
</template>

<script>
import { defineComponent } from 'vue';
import HomeIcon from '@/components/SvgIcons/HomeIcon';

const PAGES = [
  {
    text: 'Конфигуратор',
    path: '/configurator'
  },
  {
    text: 'Корзина',
    path: '/cart'
  }
];

export default defineComponent({
  name: 'Header',
  components: {
    HomeIcon
  },

  setup() {
    return { PAGES };
  }
});
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(163, 163, 163, 0.4);
  width: 100%;
  gap: 12px;
  min-height: 76px;

  &__logo {
    position: absolute;
    left: 50px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .router-link-active {
    button {
      color: #01a7fd;
      border-color: #01a7fd;
    }
  }

  .button {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: rgba(17, 17, 17, 0.48);
    padding: 4px 12px;
    border: 1px solid transparent;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: #01a7fd;
      border-color: #01a7fd;
    }

    &--active {
      color: #01a7fd;
      border-color: #01a7fd;
    }
  }
}
</style>