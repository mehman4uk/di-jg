<script setup lang="ts">
import { computed, ref, type PropType } from 'vue'
import { Icon } from '@iconify/vue'

const inputValue = ref('')

const lockIcon = 'mdi:lock'
const clearIcon = 'solar:close-square-bold-duotone'

export type ThemeType = 'text' | 'password' | 'textarea' | 'number'

// Определение пропсов
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
  icon: {
    type: String,
    default: '',
  },
  number: {
    type: Number,
    default: null,
  },
  type: {
    type: String,
    default: 'text',
  },
})

const computedClasses = computed(() => ({
  [props.theme]: !!props.theme,
  disabled: props.disabled,
}))

const computedIcon = computed(() => (props.disabled ? lockIcon : props.icon))

const showClearIcon = computed(() => inputValue.value.length > 0)

const clearInput = () => {
  inputValue.value = ''
}
</script>

<template>
  <div class="jg-wrapper">
    <input
      v-model="inputValue"
      v-mask="'###-###-####'"
      class="jg-input"
      :type="props.type"
      :class="computedClasses"
      :disabled="props.disabled"
      :placeholder="props.placeholder"
      :style="{ paddingLeft: computedIcon ? '34px' : '10px' }"
    />
    <Icon v-if="computedIcon" :icon="computedIcon" class="jg-icon" />
    <Icon
      v-if="showClearIcon"
      :icon="clearIcon"
      class="jg-clear-icon"
      @click="clearInput"
    />
  </div>
</template>

<style lang="scss">
.jg-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  .jg-icon {
    position: absolute;
    left: 10px;
    font-size: 16px;
    color: var(--input-placeholder);
  }

  .jg-clear-icon {
    position: absolute;
    right: 10px;
    font-size: 16px;
    color: var(--input-placeholder);
    cursor: pointer;
  }
}

.jg-input {
  margin: 0;
  border: 0;
  padding: 12px 10px;
  border-radius: 16px;
  font-size: 12px;
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
  color: var(--input-placeholder-filled);
  background-color: var(--background-color);
  border: 1px solid var(--input-stroke);

  &:disabled {
    cursor: not-allowed;
    background-color: var(--input-disabled-background);
    padding-left: 34px;

    &::placeholder {
      color: var(--input-disabled-text);
    }

    &:hover {
      border: 1px solid var(--input-stroke);
    }
  }

  &:focus {
    border: 1px solid var(--input-stroke-focus);
    outline: none;
  }

  &:hover {
    border: 1px solid var(--input-stroke-focus);
  }

  // &.text,
  // &.password,
  // &.number,
  // &.textarea {
  //
  // }
}

$themes: (
  light: (
    primary-color: #2d6ff0,
    input-placeholder-filled: #1d2023,
    input-placeholder: #626c77,
    input-stroke: #f2f3f7,
    input-stroke-focus: var(--primary-color),
    input-disabled-text: #969fa8,
    input-disabled-background: #f8f8fb,
  ),
  dark: (
    primary-color: #2d6ff0,
    input-placeholder-filled: #fafafa,
    input-placeholder: #969fa8,
    input-stroke: #3c434a,
    input-stroke-focus: var(--primary-color),
    input-disabled-text: #626c77,
    input-disabled-background: #282b30,
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
