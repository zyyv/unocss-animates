<script lang='ts' setup>
import { codeToHtml } from 'shikiji'

const fotmatkeyframeCSS = computedAsync(async () => {
  return await usePrettier(`@keyframe ${activeAnimate.value.name} ${activeAnimate.value.keyframe}`)
})

const keyframeCSS = computedAsync(async () => {
  return await codeToHtml(fotmatkeyframeCSS.value, { lang: 'css', theme: 'vitesse-dark' })
})

const { copy } = useClipboard()

function handleCopy(value: string) {
  try {
    copy(value)
    // alert('Copied!')
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}

function handleCloseModal() {
  modalVisible.value = false
}

watchEffect(() => {
  if (modalVisible.value)
    document.body.style.overflow = 'hidden'
  else
    document.body.style.overflow = 'auto'
})
</script>

<template>
  <div v-show="modalVisible" bg="#222 op-80" pf z-10 h-screen w-screen fcc>
    <div pr fccc gap-1 class="prose">
      <div
        i-ri:close-circle-line pa right-0 top-0 cursor-pointer text-xl hover-i-ri:close-circle-fill
        @click="handleCloseModal()"
      />
      <h2
        mb-2 mt-0 px-4 py-2 text-3xl text-red fw-600 hover="b b-red-300 b-dashed rd-2 cursor-pointer"
        @click="handleCopy(activeAnimate.name)"
      >
        {{ activeAnimate.name }}
      </h2>
      <p>
        Uno Class:
        <span
          hover="b b-teal-300 b-dashed rd-2 cursor-pointer" inline-block px-2 text-teal
          @click="handleCopy(`animate-${activeAnimate.name}`)"
        >
          animate-{{ activeAnimate.name }}
        </span>
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
      <div pr max-w-screen>
        <div
          i-ri:clipboard-line pa right-4 top-8 cursor-pointer hover-i-ri:clipboard-fill
          @click="handleCopy(fotmatkeyframeCSS)"
        />
        <div v-html="keyframeCSS" />
      </div>
    </div>
  </div>
</template>
