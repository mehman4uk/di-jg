<script setup lang="ts">
import JGButton from '../JGButton.vue'
import JGInput from '../JGInput.vue'
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
      <textarea
        v-model="form.message"
        type="text"
        placeholder="Ваше сообщение"
      ></textarea>
      <JGButton theme="primary" type="submit">Отправить</JGButton>
    </form>
  </div>
</template>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
}
</style>
