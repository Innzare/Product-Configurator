<template>
  <button :class="classes" :disabled="disabled">
    <slot name="icon"></slot>

    <span>
      {{ text }}
    </span>
  </button>
</template>

<script>
import { defineComponent, computed } from 'vue';
export default defineComponent({
  name: 'ActionButton',
  props: {
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  setup(props) {
    const { text, type, fullWidth } = props;

    const classes = computed(() => {
      return {
        'action-button': true,
        'action-button--full-width': fullWidth,
        'action-button--filled': type == 'filled',
        'action-button--outlined': type == 'outlined'
      };
    });

    return {
      text,
      type,
      classes
    };
  }
});
</script>

<style lang="scss" scoped>
.action-button {
  padding: 10px 20px;
  background: #fff;
  border-radius: 100px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #111;
  transition: background 0.2s ease;

  @media (max-width: 768px) {
    padding: 5px 10px;
    font-size: 12px;
  }

  &:hover {
    background: #cccccc9e;
  }

  &.action-button--full-width {
    width: 100%;
  }

  &.action-button--filled {
    background: #2ab8ff;
    color: #fff;

    &:hover {
      background: #44c1ff;
    }

    &:disabled {
      background: #ccc;
    }
  }

  &.action-button--outlined {
    background: transparent;
    border: 1px solid #2ab8ff;
    color: #2ab8ff;

    &:hover {
      border-color: #06acff;
      color: #06acff;
    }
  }
}
</style>