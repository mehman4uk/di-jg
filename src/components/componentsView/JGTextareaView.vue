<script setup lang="ts">
import JGTextarea from '../JGTextarea.vue'
</script>

<template>
  <div class="grid-container">
    <JGTextarea
      placeholder="123317, г. Москва, ул. Красногвардейская, дом 10, квартира 134, 5 подъезд, 28 этаж"
      theme="textarea"
      disabled
    />
    <JGTextarea placeholder="Комментарий" theme="textarea" />
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
