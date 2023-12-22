<script lang='ts' setup>
function handleClicked(keyframeName: string) {
  modalVisible.value = true
  activeAnimateName.value = keyframeName
}
</script>

<template>
  <main

    grid="~ cols-2 sm:cols-4 md:cols-5 xl:cols-6 2xl:cols-7 gap-5"

    w-full of-hidden p-4 pt-0 trans
  >
    <template v-if="All_Animations">
      <Animate
        v-for="(_v, k) in All_Animations.keyframes"
        :key="k"
        :name="k"
        :status="isOpenAnimate"
        @click="handleClicked(k)"
      />
    </template>
    <div v-else>
      No Data
    </div>
  </main>
</template>
