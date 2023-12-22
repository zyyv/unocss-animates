<script lang='ts' setup>
defineProps<{
  name: string
  status: boolean
}>()
</script>

<template>
  <div
    aspect="1/1"
    transtion w-full fcc b rd-2 hover-cursor-pointer hover-b-purple-400 hover-text-purple-400
    :class="!status && 'group'"
  >
    <div :class="status ? `animate-${name}` : `group-hover-animate-${name}`" important-animate-count-infinite>
      {{ name }}
    </div>
  </div>
</template>
