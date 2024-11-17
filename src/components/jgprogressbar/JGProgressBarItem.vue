<script setup lang="ts">
import { computed, ref, type PropType } from 'vue'

export type ThemeType = 'primary'

const props = defineProps({
  theme: {
    type: String as PropType<ThemeType>,
    default: 'primary',
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const classes = computed(() => {
  return {
    [`${props.theme}`]: props.theme !== null,
    disabled: props.disabled,
    isActive: props.isActive,
  }
})

const items = ref([
  {
    title: String,
    message: String,
    button: Boolean,
  },
])
</script>
<template>
  <div class="jg-progress-bar">
    <div
      v-for="(item, index) in items"
      class="item"
      :class="classes"
      :disabled="props.disabled"
      :isActive="props.isActive"
    ></div>
    <slot></slot>
  </div>
</template>

<style lang="scss">
.jg-progress-bar {
  background-color: var(--progress-background);
  height: 4px;
  display: flex;
  flex-direction: row;

  .item {
    height: 4px;
    width: 52px;
    border-radius: 4px;

    &.primary {
      background-color: var(--progress-primary-item);

      &.isActive {
        background-color: var(--progress-primary-item-active);
      }
    }
  }
}

$themes: (
  light: (
    primary-color: #2d6ff0,
    progress-primary-item: #b5b2b0,
    progress-primary-item-active: #7b2df0,
  ),
  dark: (
    primary-color: #2d6ff0,
    progress-primary-item: #414141,
    progress-primary-item-active: #7b2df0,
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
