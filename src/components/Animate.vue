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
</script>

<template>
  <div
    aspect="1/1" w-full fcc rd-2 bg="#333" ring="~ [hsla(0,0%,100%,.1)]" trans :class="{
      'group': !isOpenAnimate,
      'hover-cursor-pointer': hoverable,
      'hover-ring-[hsla(0,0%,100%,.5)]': hoverable,
      'hover-text-purple-400': hoverable,
    }"
  >
    <div v-if="type === 'text'" :class="classList">
      {{ name }}
    </div>
    <div v-else-if="type === 'radio'" w="15%" h="15%" rd bg=" [hsla(0,0%,100%,.5)]" :class="classList" />
  </div>
</template>
