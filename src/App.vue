<script setup lang="ts">
import { getHighlighter } from 'shiki-es'
import type { Highlighter } from 'shiki-es'

const highlighter = ref<Highlighter>()

async function useHighlighter() {
  highlighter.value = await getHighlighter({ theme: 'vitesse-dark' })
}

onBeforeMount(useHighlighter)
</script>

<template>
  <div of-x-hidden>
    <Modal :highlighter="highlighter" />
    <TheHeader />
    <Preview />
  </div>
</template>

