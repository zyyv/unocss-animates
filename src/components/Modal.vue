<script lang='ts' setup>
import type { Highlighter } from 'shiki-es'
import type { AnimateInfo } from '../type'

const props = defineProps<{
  visible: boolean
  animateInfo: AnimateInfo
  highlighter?: Highlighter
}>()
const visible = useVModel(props, 'visible')

const fotmatkeyframeCSS = ref('')

const keyframeCSS = computed(() => {
  if (props.highlighter) {
    fotmatkeyframeCSS.value = usePrettier(`@keyframe ${props.animateInfo.name!} ${props.animateInfo.keyframe!}`)
    return props.highlighter.codeToHtml(fotmatkeyframeCSS.value, { lang: 'css' })
  }
})

const { copy } = useClipboard()
</script>

<template>
  <div
    v-show="visible"
    pf
    w-screen
    h-screen
    bg="#222 op-80"
    z-10
  >
    <div w-full h-full fcc>
      <div pr fccc gap-1 class="prose">
        <div
          text-xl
          pa
          top-0
          right-0
          i-ri:close-circle-line
          hover-i-ri:close-circle-fill
          cursor-pointer
          @click="visible = false"
        />
        <h2
          mt-0
          fw-600
          text-3xl
          mb-2
          px-4
          py-2
          text-red
          hover="b b-red-300 b-dashed rd-2 cursor-pointer"
          @click="copy(animateInfo.name)"
        >
          {{ animateInfo.name }}
        </h2>
        <p>
          Class: <span
            hover="b b-teal-300 b-dashed rd-2 cursor-pointer"
            inline-block
            p="x-2"
            text-teal
            @click="copy(`animate-${animateInfo.name}`)"
          >animate-{{ animateInfo.name }}</span>
        </p>
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
        <div pr>
          <div
            pa
            right-4
            top-8
            i-ri:clipboard-line
            hover-i-ri:clipboard-fill
            cursor-pointer
            @click="copy(fotmatkeyframeCSS)"
          />
          <div v-html="keyframeCSS" />
        </div>
      </div>
    </div>
  </div>
</template>
