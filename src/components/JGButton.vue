<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { computed, type PropType } from 'vue'

export type ThemeType = 'primary' | 'secondary' | 'link' | 'disabled' | 'ghost'

const emit = defineEmits(['click'])

const props = defineProps({
  theme: {
    type: String as PropType<ThemeType>,
    default: 'primary',
  },
  to: {
    type: String,
    default: null,
  },
  action: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  outline: {
    type: Boolean,
    default: false,
  },
})

// Определение классов на основании темы
const classes = computed(() => {
  return {
    [`${props.theme}`]: props.theme !== null,
    disabled: props.disabled,
    outline: props.outline,
  }
})
</script>

<template>
  <router-link
    class="jg-button"
    :class="classes"
    :to="props.to"
    :disabled="props.disabled"
  >
    <slot></slot>
  </router-link>
</template>

<style lang="scss">
.jg-button {
  margin: 0;
  background: none;
  border: none;
  padding: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  text-decoration: none;

  &.primary {
    background-color: var(--button-primary-background);
    color: var(--button-primary-text);

    &.disabled {
      background-color: var(--button-primary-background);
      color: var(--button-primary-text);
      opacity: 0.5;
      cursor: not-allowed;
    }

    &.outline {
      background-color: transparent;
      color: var(--text);
      border: 2px solid var(--button-primary-background);
      cursor: not-allowed;
    }
  }

  &.secondary {
    background-color: var(--button-secondary-background);
    color: var(--button-secondary-text);

    &.outline {
      background-color: transparent;
      color: var(--text);
      border: 2px solid var(--button-secondary-background);
      cursor: not-allowed;
    }
  }

  &.link {
    background-color: var(--button-link-background);
    color: var(--button-link-text);
  }

  &.ghost {
    background-color: var(--button-ghost-background);
    color: var(--button-ghost-text);
  }

  &.disabled {
    background-color: var(--button-disabled-background);
    color: var(--button-disabled-text);
    cursor: not-allowed;
  }
}

$themes: (
  light: (
    text: #1d2023,
    button-primary-text: #fefefe,
    button-primary-background: #2d6ff0,
    button-secondary-text: #1d2023,
    button-secondary-background: #f2f3f7,
    button-link-text: #2d6ff0,
    button-link-background: transparent,
    button-disabled-text: #969fa8,
    button-disabled-background: #ebedf1,
    button-ghost-text: #1d2023,
    button-ghost-background: transparent,
  ),
  dark: (
    text: #fafafa,
    button-primary-text: #fefefe,
    button-primary-background: #2d6ff0,
    button-secondary-text: #fafafa,
    button-secondary-background: #2c3136,
    button-link-text: #2d6ff0,
    button-link-background: transparent,
    button-disabled-text: #969fa8,
    button-disabled-background: #4b4c4f,
    button-ghost-text: #fafafa,
    button-ghost-background: transparent,
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
