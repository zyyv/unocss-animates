<script setup lang="ts">
import { theme } from '@unocss/preset-wind'
import { computed, reactive } from 'vue'
import { getHighlighter } from 'shiki-es'
import Animate from './components/Animate.vue'
import Modal from './components/Modal.vue'
import { AnimateInfo } from './type'
import type { Highlighter } from 'shiki-es'

const animates = reactive(theme.animation || {})

const state = reactive({
  name: '',
  visible: false,
})

const handleClicked = (name: string) => {
  state.name = name
  state.visible = true
}

const animateInfo = computed(() => {
  return {
    name: state.name,
    count: animates.counts![state.name],
    duration: animates.durations![state.name],
    timingFn: animates.timingFns![state.name],
    property: animates.properties![state.name],
    keyframe: animates.keyframes![state.name],
  } as AnimateInfo
})

const highlighter = ref<Highlighter>()
async function useHighlighter() {
  highlighter.value = await getHighlighter({ theme: 'vitesse-dark' })
}

onBeforeMount(useHighlighter)
</script>

<template>
  <div of-x-hidden>
    <Modal v-model:visible="state.visible" :animate-info="animateInfo" :highlighter="highlighter" />
    <div w-full p-4 grid="~ cols-2 sm:cols-4 md:cols-5 xl:cols-6 2xl:cols-7 gap-5">
      <Animate v-for="(v, k) in animates.keyframes" :key="k" :name="k" @click="handleClicked(k)" />
    </div>
  </div>
</template>

<style>
html{
  --at-apply: bg-bg-dark text-text-dark;
}
</style>
