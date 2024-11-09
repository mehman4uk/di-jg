<script setup lang="ts">
import { computed, type PropType } from 'vue'
export type ThemeType = 'textarea'

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
  textarea: {
    type: String,
    default: '',
  },
})

const classes = computed(() => {
  return {
    [`${props.theme}`]: props.theme !== null,
    disabled: props.disabled,
  }
})
</script>

<template>
  <textarea
    class="jg-textarea"
    :class="classes"
    :disabled="disabled"
    :placeholder="placeholder"
  />
</template>

<style lang="scss">
.jg-textarea {
  border: 1px solid var(--stroke);
  padding: 12px 10px;
  border-radius: 16px;
  background-color: var(--background-color);
  color: var(--placeholder);
  font-size: 12px;

  // &.textarea {

  // }

  &:disabled {
    cursor: not-allowed;
    background-color: var(--textarea-disabled-background);
    color: var(--textarea-disabled-text);

    &::placeholder {
      color: var(--textarea-disabled-text);
    }

    &:hover {
      border: 1px solid var(--stroke);
    }
  }

  &:hover {
    border: 1px solid var(--focus);
  }

  &:focus {
    border: 1px solid var(--focus);
    outline: none;
  }
}

$themes: (
  light: (
    background-color: #f2f3f7,
    focus: #007cff,
    stroke: #f2f3f7,
    placeholder: #626c77,
    textarea-disabled-text: #969fa8,
    textarea-disabled-background: #f8f8fb,
  ),
  dark: (
    background-color: #181b1e,
    focus: #45b6fc,
    stroke: #3c434a,
    placeholder: #969fa8,
    textarea-disabled-text: #626c77,
    textarea-disabled-background: #282b30,
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
