<script setup lang="ts">
import { ref } from 'vue'
import JGButton from '@/components/JGButton.vue'
import JGInput from '@/components/JGInput.vue'
import JGLogo from '@/components/JGLogo.vue'
import axios from 'axios'

const phoneNumber = ref('')

const login = async () => {
  try {
    const response = await axios.post('/api/login', {
      phone: phoneNumber.value,
    })
    console.log('Успешная авторизация: ', response.data)
  } catch (error) {
    console.error('Ошибка авторизации: ', error)
  }
}
</script>
<template>
  <div class="jg-auth">
    <JGLogo />
    <h1>Введите номер телефона любого оператора</h1>
    <div class="content">
      <JGInput
        v-model="phoneNumber"
        placeholder="Номер телефона"
        type="number"
        theme="number"
        icon="solar:phone-bold"
      />
      <JGButton theme="primary" type="submit" @click="login">Войти</JGButton>
    </div>
  </div>
</template>

<style lang="scss">
@use '../assets/typography.scss' as *;

.jg-auth {
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;

  & .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  h1 {
    @include paragraph-p1-bold;
    color: var(--title-color);
    margin-bottom: 12px;
  }
}

$themes: (
  light: (
    primary-color: #2d6ff0,
    title-color: #333333,
  ),
  dark: (
    primary-color: #2d6ff0,
    title-color: #ffffff,
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
