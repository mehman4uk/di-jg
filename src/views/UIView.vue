<script setup lang="ts">
import JGButton from '@/components/JGButton.vue'
import JGInput from '@/components/JGInput.vue'
</script>

<template>
  <div class="grid-container">
    <JGButton theme="primary" to="/">Primary</JGButton>
    <JGButton theme="primary" :outline="true" to="/">Primary Outline</JGButton>
    <JGButton theme="primary" :disabled="true" to="/"
      >Primary Disabled</JGButton
    >
    <JGButton theme="secondary" to="/">Secondary</JGButton>
    <JGButton theme="secondary" :outline="true" to="/"
      >Secondary Outline</JGButton
    >
    <JGButton theme="secondary" :disabled="true" to="/"
      >Secondary Disabled</JGButton
    >
    <JGButton theme="disabled" :disabled="true" to="/">Disabled</JGButton>
    <JGButton theme="link" to="/">Link</JGButton>
    <JGButton theme="ghost" to="/">Ghost</JGButton>
  </div>

  <div class="grid-container">
    <JGInput placeholder="Текст" type="text" theme="text" />
    <JGInput placeholder="Пароль" type="password" theme="password" />
    <JGInput placeholder="Комментарий" type="textarea" theme="textarea" />
    <JGInput placeholder="Номер" type="number" theme="number" />
  </div>
</template>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  gap: 12px;
  padding: 16px;
  border-radius: 20px;
}
</style>
