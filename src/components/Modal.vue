<script lang='ts' setup>
import { useVModel } from '@vueuse/core'
import type { AnimateInfo } from '../type'
const props = defineProps<{
  visible: boolean
  animateInfo: AnimateInfo
}>()
const visible = useVModel(props, 'visible')
</script>

<template>
  <div
    v-if="visible"
    pf
    w-screen
    h-screen
    bg="#222 op-80"
    z-10
    @click="visible = false"
  >
    <div w-full h-full fcc>
      <div
        min-w="50%"
        fccc
        gap-4
        class="prose"
      >
        <h2 fw-600 text-3xl mb-2 text-red>
          {{ animateInfo.name }}
        </h2>
        <p>
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
        </p>
        <!-- <p>
          <label fw-500 text="teal sm right" inline-block w-30>Keyframe:</label> -->
        <code>
          {{ animateInfo.keyframe }}
        </code>
      </div>
      <!-- <div
        class="animate-{{ animateInfo.name }}"
        animate-count-infinite
        w-full
        h-20
        fcc
        rd-2
        bg-bg-dark
        text-text-dark
      >
        {{ animateInfo.name }}
      </div> -->
    </div>
  </div>
</template>
