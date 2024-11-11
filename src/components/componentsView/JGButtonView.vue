<script setup lang="ts">
import JGButton from '@/components/JGButton.vue'
</script>

<template>
  <div class="grid-container">
    <h1>Type</h1>
    <JGButton theme="primary" to="/">Primary</JGButton>
    <JGButton theme="secondary" to="/">Secondary</JGButton>
    <JGButton theme="link" to="/">Link</JGButton>
    <JGButton theme="ghost" to="/">Ghost</JGButton>

    <h1>Disabled</h1>
    <JGButton theme="disabled" to="/" disabled>Disabled</JGButton>
    <JGButton theme="primary" to="/" disabled>Primary Disabled</JGButton>
    <JGButton theme="secondary" to="/" disabled>Secondary Disabled</JGButton>

    <h1>Outline</h1>
    <JGButton theme="primary" to="/" outline>Primary Outline</JGButton>
    <JGButton theme="secondary" to="/" outline>Secondary Outline</JGButton>
    <JGButton theme="primary" to="/" outline disabled
      >Disabled Outline</JGButton
    >
  </div>
</template>
