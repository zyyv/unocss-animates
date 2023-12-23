<script lang='ts' setup>
function handleClicked(keyframeName: string) {
  modalVisible.value = true
  activeAnimateName.value = keyframeName
}
</script>

<template>
  <main
    grid="~ cols-2 sm:cols-3 xl:cols-5 2xl:cols-6"
    gap="4 sm:2vw xl:1vw"
    w-full of-hidden p-4 trans
  >
    <template v-if="All_Animations">
      <Animate
        v-for="(_v, k) in All_Animations.keyframes"
        :key="k"
        :name="k"
        :status="isOpenAnimate"
        type="radio"
        @click="handleClicked(k)"
      />
    </template>
    <div v-else>
      No Data
    </div>
  </main>
</template>
