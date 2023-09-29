<template>
  <div :class="classes">
    <input
      :value="modelValue"
      @input="onChange"
      @blur="onBlur"
      type="text"
      placeholder=""
      required
    >
    <label>{{ label }}</label>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'TextField',
  emits: ['update:modelValue'],
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
      default: '',
    },
    isNumberField: {
      type: Boolean,
      default: false,
    }
  },

  setup(props, { emit }) {
    const { label, isNumberField } = props;

    const isError = ref(false);

    const onChange = (event) => {
      isNumberField && (isError.value = false);

      const value = event.target.value;
      const regex = /^\d*$/;

      if (isNumberField && !regex.test(value)) {
        isError.value = true;
        return;
      };

      emit('update:modelValue', value)
    };

    const onBlur = () => {
      isNumberField && (isError.value = false);
    };

    const classes = computed(() => {
      return {
        'text-feild': true,
        'text-feild--error': isError.value,
      };
    })

    return {
      label,
      isError,
      classes,
      onChange,
      onBlur
    }
  }
})
</script>

<style lang="scss" scoped>
  .text-feild {
    width: 100%;
    position: relative;
    padding: 0;
    border: none;
    overflow: visible;
    background-color: #fff;

    input {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 26px 16px 6px;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #111111;
      box-shadow: none;
      border: 1px solid #F1F1F1;
      font-size: 14px;
      border-radius: 4px;
      transition: all 150ms ease;
      cursor: text;

      &:hover {
        border-color: #e6e6e6;
      }
    }

    label {
      position: absolute;
      top: 50%;
      left: 16px;
      transform: translateY(-50%);
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
      color: rgba(17, 17, 17, 0.48);
      transform-origin: 0 -100%;
      transition: all 300ms ease;
      pointer-events: none;

      @media(max-width: 768px) {
        font-size: 12px;
      }
    }

    input:focus ~ label,
    input:valid ~ label {
      top: 30%;
      color: #01A7FD;
      transform: scale(0.7);

      -webkit-transform: scale(0.7);
    }

    input:focus {
      outline: none !important;
      border-color: #01A7FD;
    }

    &--error {
      input {
        border-color: red;

        &:focus {
          border-color: red;
        }
      }
    }
  }
</style>