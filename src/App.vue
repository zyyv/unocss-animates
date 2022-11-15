<script setup lang="ts">
import { theme } from '@unocss/preset-wind'
import { reactive } from 'vue'
import Animate from './components/Animate.vue'

const animates = reactive(theme.animation || {})

console.log(theme)
</script>

<template>
  <div grid="~ cols-8 gap-5">
    <Animate v-for="(v, k) in animates.keyframes" :key="k" :name="k" />
  </div>
</template>

<style>
html{
  --at-apply: bg-bg-dark text-text-dark;
}
</style>
