<script lang='ts' setup>
const { name } = withDefaults(defineProps<{
  name: string
  type?: 'text' | 'radio'
  hoverable?: boolean
}>(), {
  type: 'text',
  hoverable: true,
})

const classList = computed(() => [
  isOpenAnimate.value ? `animate-${name}` : `group-hover-animate-${name}`,
  hasDuration(name) ? '' : 'important-animate-duration-1500',
  'important-animate-count-infinite',
])

const { copy, copied } = useClipboard()

function handleCopy(value: string) {
  try {
    copy(`animate-${value}`)
    // alert('Copied!')
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}
</script>

<template>
  <div
    aspect="1/1" bg="#333" ring="~ [hsla(0,0%,100%,.1)]" pr w-full fcc of-hidden rd-2 trans class="group" :class="{
      'hover-cursor-pointer': hoverable,
      'hover-ring-[hsla(0,0%,100%,.5)]': hoverable,
      'text-#999': hoverable,
    }"
  >
    <div v-if="type === 'text'" :class="classList">
      {{ name }}
    </div>
    <div v-else-if="type === 'radio'" w="15%" h="15%" rd bg=" [hsla(0,0%,100%,.5)]" :class="classList" />

    <div
      v-if="hoverable" bottom="-20%" class="h-20%"
      bg="black op-10" pa left-0 right-0 z-1 fcc gap-2 px-2 trans group-hover-bottom-0 @click.stop="handleCopy(name)"
    >
      <div line-clamp-1>
        {{ name }}
      </div>
      <div v-if="copied" i-ri-check-line shrink-0 />
      <div v-else i-ri-file-copy-line shrink-0 />
    </div>
  </div>
</template>
