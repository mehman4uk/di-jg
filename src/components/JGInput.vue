<script setup lang="ts">
import { computed, type PropType } from 'vue'

export type ThemeType = 'text' | 'password' | 'textarea' | 'number'

const props = defineProps({
  theme: {
    type: String as PropType<ThemeType>,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    required: true,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
  password: {
    type: String,
    default: '',
  },
  textarea: {
    type: String,
    default: '',
  },
  number: {
    type: Number,
    default: 0,
  },
})

// Определение классов на основании темы
const classes = computed(() => {
  return {
    [`${props.theme}`]: props.theme !== null,
    disabled: props.disabled,
  }
})
</script>

<template>
  <input
    class="jg-input"
    :class="classes"
    :disabled="disabled"
    :placeholder="placeholder"
  />
</template>

<style lang="scss">
.jg-input {
  margin: 0;
  border: 0;
  padding: 12px 10px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &.text {
    background-color: var(--background-color);
    color: red;
    border: 1px solid var(--stroke);
  }

  &.password {
    background-color: var(--background-color);
    color: red;
    border: 1px solid var(--stroke);
  }

  &.number {
    background-color: var(--background-color);
    color: red;
    border: 1px solid var(--stroke);
  }

  &.textarea {
    background-color: var(--background-color);
    color: red;
    border: 1px solid var(--stroke);
  }
}

$themes: (
  light: (
    background-color: #f2f3f7,
    stroke: #f2f3f7,
    placeholder: #626c77,
  ),
  dark: (
    background-color: #181b1e,
    stroke: #3c434a,
    placeholder: #969fa8,
  ),
);

@each $theme-name, $theme-map in $themes {
  [data-theme='#{$theme-name}'] {
    @each $key, $value in $theme-map {
      --#{$key}: #{$value};
    }
  }
}
</style>
