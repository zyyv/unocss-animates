<script lang='ts' setup>
import { getHighlighter } from 'shiki-es'
import type { Highlighter } from 'shiki-es'
import type { AnimateInfo } from '../type'

const props = defineProps<{
  visible: boolean
  animateInfo: AnimateInfo
}>()
const visible = useVModel(props, 'visible')

const highlighter = ref<Highlighter | null>(null)

onBeforeMount(async() => {
  highlighter.value = await getHighlighter({ theme: 'vitesse-dark' })
})

const keyframeCSS = computed(() => {
  if (highlighter.value) {
    const css = usePrettier(`@keyframe ${props.animateInfo.name!} ${props.animateInfo.keyframe!}`)
    return highlighter.value.codeToHtml(css, { lang: 'css' })
  }
})
</script>

<template>
  <div
    v-show="visible"
    pf
    w-screen
    h-screen
    bg="#222 op-80"
    z-10
    @click="visible = false"
  >
    <div w-full h-full fcc>
      <div min-w="50%" fccc gap-4 class="prose" @click.stop="() => {}">
        <h2
          fw-600
          text-3xl
          mb-2
          px-4
          py-2
          text-red
          hover="b b-red-300 b-dashed rd-2 cursor-pointer"
        >
          {{ animateInfo.name }}
        </h2>
        <!-- <p>
          <label fw-500 text="teal sm right" inline-block w-30>Count:</label>
          {{ animateInfo.count }}
        </p>
        <p>
          <label fw-500 text="teal sm right" inline-block w-30>Duration:</label>
          {{ animateInfo.duration }}
        </p>
        <p>
          <label fw-500 text="teal sm right" inline-block w-30>Timing Function:</label>
          {{ animateInfo.timingFn }}
        </p>
        <p>
          <label fw-500 text="teal sm right" inline-block w-30>Property:</label>
          {{ animateInfo.property }}
        </p> -->
        <!-- <p>
          <label fw-500 text="teal sm right" inline-block w-30>Keyframe:</label> -->

        <div v-html="keyframeCSS" />
      </div>
    </div>
  </div>
</template>
