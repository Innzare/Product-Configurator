<template>
  <footer class="footer">
    <span>AISA</span>
  </footer>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer'
});
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 76px;
  border-top: 1px solid rgba(163, 163, 163, 0.4);

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #000000;
  }
}
</style>