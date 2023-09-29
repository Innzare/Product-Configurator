<template>
  <button :class="['button', { 'button--active': isActive }]">
    {{ text }}
  </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  props: {
    text: {
      type: String,
      default: ''
    },
    isActive: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style scoped lang="scss">
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
</style>