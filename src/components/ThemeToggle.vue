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

const showModal = ref(false)
</script>

<template>
  <div id="modal">
    <div class="modal" v-if="showModal">
      <div class="modal-content">
        <span class="close" @click="showModal = false">&times;</span>
        <div class="menu">
          <a href="/jginput">Input</a>
          <a href="/jgbutton">Button</a>
          <a href="/jgtextarea">Textarea</a>
          <a href="/jgform">Form</a>
          <a href="/jgstories">Stories</a>
        </div>
      </div>
    </div>
  </div>
  <div class="change-theme">
    <Icon
      icon="solar:moon-bold-duotone"
      width="48"
      height="48"
      style="color: #2d6ff0"
      @click="setTheme"
    />
    <Icon
      @click="showModal = true"
      icon="solar:copy-bold"
      width="48"
      height="48"
      style="color: #2d6ff0"
    />
  </div>
</template>

<style lang="scss" scoped>
.modal {
  display: block; /* Изменено с none на block */
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-content {
  background-color: #fff;
  padding: 20px;
  height: 100%;

  .menu {
    width: 100%;
    height: 64px;
    display: flex;
    flex-direction: column;
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
}
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}
.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.change-theme {
  position: fixed;
  left: 24px;
  bottom: 24px;
  width: 100%;
  color: #ffffff;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
}

.menu {
  width: 100%;
  height: 64px;
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
