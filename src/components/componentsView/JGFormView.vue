<script setup lang="ts">
import JGButton from '../JGButton.vue'
import JGInput from '../JGInput.vue'
import JGTextarea from '../JGTextarea.vue'
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const handleSubmit = () => {
  console.log('Имя:', form.name)
  console.log('Email:', form.email)
  console.log('Сообщение:', form.message)
}
</script>

<template>
  <div class="form-container">
    <form @submit.prevent="handleSubmit">
      <JGInput
        v-model="form.name"
        type="text"
        icon="solar:phone-bold"
        placeholder="Ваш телефон"
      />
      <JGInput
        v-model="form.email"
        type="email"
        required
        placeholder="Ваш email"
      />
      <JGTextarea
        v-model="form.message"
        type="text"
        placeholder="Ваше сообщение"
      />
      <JGButton theme="primary" type="submit">Отправить</JGButton>
    </form>
  </div>
</template>

<style scoped>
.form-container {
  display: flex;
  gap: 12px;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #ffffff;

  form {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
}
</style>
