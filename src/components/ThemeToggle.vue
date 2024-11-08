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
</style>
