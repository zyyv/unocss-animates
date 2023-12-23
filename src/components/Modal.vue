<script lang='ts' setup>
import { codeToHtml } from 'shikiji'

const activeAnimateName = computed(() => activeAnimate.value.name)

const fotmatkeyframeCSS = computedAsync(async () => {
  return await usePrettier(`@keyframe ${activeAnimate.value.name} ${activeAnimate.value.keyframe}`)
})

const keyframeCSS = computedAsync(async () => {
  return await codeToHtml(fotmatkeyframeCSS.value, { lang: 'css', theme: 'vitesse-dark' })
})

const { copy, copied } = useClipboard()

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
  <transition
    enter-active-class="animate-fade-in animate-duration-200"
    leave-active-class="animate-fade-out animate-duration-200" mode="out-in"
  >
    <div v-show="modalVisible" bg="#222 op-80" pf z-10 h-screen w-screen fcc gap-10 p-10 backdrop-blur>
      <div
        i-ri:close-circle-line pa right-10 top-10 cursor-pointer text-xl hover-i-ri:close-circle-fill
        @click="handleCloseModal()"
      />
      <div class="prose" h-fit max-h-full flex flex-1 flex-col items-center of-scroll>
        <h2
          text="3xl #bbb" mb-2 mt-0 w-fit cursor-pointer pb-1 fw-600 b-b="~ dashed #888" hover="b-b-#eee text-#eee"
          @click="handleCopy(activeAnimate.name)"
        >
          {{ activeAnimate.name }}
        </h2>
        <p text="#888 op-80">
          UnoCSS Usage:
          <span
            ml-2 inline-block cursor-pointer b-b="~ dashed #888" hover="b-b-#eee text-#eee"
            @click="handleCopy(`animate-${activeAnimate.name}`)"
          >
            animate-{{ activeAnimate.name }}
          </span>
        </p>
        <div pr w-full>
          <div pa right-4 top-8 cursor-pointer>
            <div v-if="copied" i-ri-check-line />
            <div v-else
              i-ri:clipboard-line hover-i-ri:clipboard-fill
              @click="handleCopy(fotmatkeyframeCSS)"
            />
          </div>
          <div v-html="keyframeCSS" />
        </div>
      </div>

      <div hidden aspect-square max-w-100 flex-1 md:block>
        <Animate :key="activeAnimateName" :name="activeAnimateName" type="radio" :hoverable="false" />
      </div>
    </div>
  </transition>
</template>
