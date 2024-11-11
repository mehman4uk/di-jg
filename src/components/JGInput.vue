<script setup lang="ts">
import { computed, ref, type PropType } from 'vue'
import { Icon } from '@iconify/vue'

const modelValue = ref('')

const lockIcon = 'mdi:lock'
const clearIcon = 'solar:close-square-bold-duotone'

export type ThemeType = 'text' | 'password' | 'textarea' | 'number'

const props = defineProps({
  theme: {
    type: String as PropType<ThemeType>,
    default: 'text',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  required: {
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
  type: {
    type: String,
    default: 'text',
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: '',
  },
})

const computedClasses = computed(() => ({
  [props.theme]: !!props.theme,
  disabled: props.disabled,
}))

const computedIcon = computed(() => (props.disabled ? lockIcon : props.icon))

const showClearIcon = computed(
  () => modelValue.value.length > 0 && !props.disabled,
)

const clearInput = () => {
  if (!props.disabled) {
    modelValue.value = ''
  }
}
</script>

<template>
  <div class="jg-wrapper">
    <input
      class="jg-input"
      v-model="modelValue"
      :type="type"
      :class="computedClasses"
      :disabled="disabled"
      :required="required"
      :placeholder="placeholder"
      :style="{ paddingLeft: computedIcon ? '32px' : '12px' }"
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
  padding: 12px 10px;
  border-radius: 16px;
  font-size: 12px;
  display: flex;
  align-items: center;
  width: 100%;
  color: var(--input-placeholder-filled);
  background-color: var(--input-background);
  border: 1px solid var(--input-stroke);
  cursor: text;

  &:disabled {
    cursor: not-allowed;
    background-color: var(--input-disabled-background);
    padding-left: 34px;

    &::placeholder {
      color: var(--input-disabled-text);
    }
  }

  &:focus {
    border: 1px solid var(--input-stroke-focus);
    outline: none;
  }

  &:hover:not(:disabled) {
    border: 1px solid var(--input-stroke-focus);
  }
}

$themes: (
  light: (
    primary-color: #2d6ff0,
    input-background: #f2f3f7,
    input-placeholder-filled: #1d2023,
    input-placeholder: #626c77,
    input-stroke: #d7dbe4,
    input-stroke-focus: var(--primary-color),
    input-disabled-text: #969fa8,
    input-disabled-background: #f8f8fb,
  ),
  dark: (
    primary-color: #2d6ff0,
    input-background: #0f1012,
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
