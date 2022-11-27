<script lang='ts' setup>
defineProps<{ name: string, status: boolean }>()
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
    :class="!status && 'group'"
  >
    <div :class="status ? `animate-${name}` : `group-hover-animate-${name}`" important-animate-count-infinite>
      {{ name }}
    </div>
  </div>
</template>
