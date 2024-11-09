<script setup lang="ts">
import JGInput from '../JGInput.vue'
</script>

<template>
  <div class="grid-container">
    <JGInput
      placeholder="Заблокированный инпут"
      type="text"
      theme="text"
      disabled
    />
    <JGInput
      placeholder="Пароль"
      type="password"
      theme="password"
      icon="solar:user-bold"
    />
    <JGInput
      placeholder="Номер"
      type="number"
      theme="number"
      icon="solar:phone-bold"
    />
    <JGInput placeholder="Без иконки" type="text" theme="text" />
  </div>
</template>

<style lang="scss" scoped></style>
