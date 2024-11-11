<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Icon } from '@iconify/vue'

const theme = ref('')
const AppElement = document.getElementById('app')

onMounted(() => {
  theme.value = AppElement?.dataset.theme || 'light'
})

const onChangeTheme = () => {
  AppElement!.dataset.theme = theme.value
}

const setTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  onChangeTheme()
}
</script>

<template>
  <div class="menu">
    <a href="/jginput">Input</a>
    <a href="/jgbutton">Button</a>
    <a href="/jgtextarea">Textarea</a>
    <a href="/jgform">Form</a>
  </div>
  <div class="change-theme" @click="setTheme">
    <Icon
      icon="solar:moon-bold-duotone"
      width="48"
      height="48"
      style="color: #2d6ff0"
    />
  </div>
</template>

<style lang="scss" scope>
.change-theme {
  position: fixed;
  left: 24px;
  bottom: 24px;
  margin: 0;
  padding: 0;
  color: #ffffff;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.menu {
  width: 100%;
  height: 64px;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 0 16px;
  box-sizing: border-box;
  z-index: 999;
  a {
    display: flex;
    align-items: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
}
</style>
