<script lang='ts' setup>
defineProps<{name: string}>()
</script>

<template>
  <div b w-full aspect="1/1">
    <div :class="`animate-${name}`" animate-count-infinite>
      {{ name }}
    </div>
  </div>
</template>
