<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import type { PropType } from 'vue'

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
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue', 'clear'])

const modelValue = computed({
  get: () => props.modelValue,
  set: value => {
    emit('update:modelValue', value)
  },
})

const classes = computed(() => {
  return {
    [props.theme]: props.theme !== null,
    disabled: props.disabled,
  }
})

const textarea = ref<HTMLTextAreaElement | null>(null)

const adjustHeight = () => {
  if (textarea.value) {
    textarea.value.style.height = 'auto'
    textarea.value.style.height = `${textarea.value.scrollHeight}px`
  }
}

onMounted(() => {
  adjustHeight()
})
</script>

<template>
  <textarea
    class="jg-textarea"
    v-model="modelValue"
    :class="classes"
    :disabled="disabled"
    :placeholder="placeholder"
    @input="adjustHeight"
    ref="textarea"
    style="overflow: hidden"
  />
</template>

<style lang="scss">
.jg-textarea {
  border: 1px solid var(--textarea-stroke);
  padding: 12px 10px;
  border-radius: 16px;
  background-color: var(--textarea-background);
  color: var(--textarea-placeholder);
  font-size: 12px;
  width: 100%;

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
      border: 1px solid var(--textarea-stroke);
    }
  }

  &:hover {
    border: 1px solid var(--textarea-stroke-focus);
  }

  &:focus {
    border: 1px solid var(--textarea-stroke-focus);
    outline: none;
  }
}

$themes: (
  light: (
    primary-color: #2d6ff0,
    textarea-background: #f2f3f7,
    textarea-placeholder-filled: #1d2023,
    textarea-placeholder: #626c77,
    textarea-stroke: #d7dbe4,
    textarea-stroke-focus: var(--primary-color),
    textarea-disabled-text: #969fa8,
    textarea-disabled-background: #f8f8fb,
  ),
  dark: (
    primary-color: #2d6ff0,
    textarea-background: #0f1012,
    textarea-placeholder-filled: #fafafa,
    textarea-placeholder: #969fa8,
    textarea-stroke: #3c434a,
    textarea-stroke-focus: var(--primary-color),
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
