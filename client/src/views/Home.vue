<template>
  <main class="home">
    <h1 class="home__title">Главная страница</h1>
    <div class="home__content">
      <h2>Тестовое задание на позицию Frontend-разработчика</h2>
      <p>Чтобы перейти в Конфигуратор воспользуйтесь навигацией в хедере <span class="emoji">&#128070;</span></p>

      <div>
        Ссылки:
        <a class="home__link" href="https://github.com/Innzare/Product-Configurator" target="_blank">Исходный код</a>,
        <a class="home__link" href="https://hh.ru/resume/63f494faff051df1290039ed1f756c33416479" target="_blank">
          Резюме
        </a>
      </div>
    </div>
  </main>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',

  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100%;

  .emoji {
    font-size: 24px;
  }

  &__title {
    margin-bottom: 16px;
    font-weight: 400;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 32px;
    height: 100%;
    border: 1px solid rgba(163, 163, 163, 0.4);
    border-radius: 8px;
  }

  &__link {
    text-decoration: none;
    color: #1965c5;
  }
}
</style>