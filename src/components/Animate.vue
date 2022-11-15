<script lang='ts' setup>
defineProps<{ name: string }>()
</script>

<template>
  <div
    b
    w-full
    aspect="1/1"
    fcc
    rd-2
    hover-cursor-pointer
    transtion
    hover-b-purple-400
    hover-text-purple-400
  >
    <div :class="`animate-${name}`" animate-count-infinite>
      {{ name }}
    </div>
  </div>
</template>
