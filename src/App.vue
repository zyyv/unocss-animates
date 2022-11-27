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

const [isOpenAnimate, toggle] = useToggle(true)

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
    <header
      px-4
      fbc
      h-10
      md-h-18
      trans
      pf
      w-full
      backdrop-blur
      z-5
    >
      <div />
      <h1 text-red-400>
        UnoCSS Animations
      </h1>
      <div fsc text-md md:text-xl gap-2>
        <div cursor-pointer title="Toggle the animations" @click="toggle()">
          <div v-if="isOpenAnimate" i-ri:toggle-fill text-purple />
          <div v-else i-ri:toggle-line text-red />
        </div>
        <a title="Github" href="https://github.com/zyyv/unocss-animates" target="_blank" i-ri-github-line />
      </div>
    </header>
    <div h-10 md:h-18 trans />
    <main
      w-full
      p-4
      pt-0
      grid="~ cols-2 sm:cols-4 md:cols-5 xl:cols-6 2xl:cols-7 gap-5"
      trans
      of-hidden
    >
      <Animate v-for="(_v, k) in animates.keyframes" :key="k" :name="k" :status="isOpenAnimate" @click="handleClicked(k)" />
    </main>
  </div>
</template>

<style>
html {
  --at-apply: bg-bg-dark text-text-dark;
}
</style>
