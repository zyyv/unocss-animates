<template>
  <header

    h-10 w-full fbc px-4 md-h-18
  >
    <div />
    <h1 text-red-400>
      UnoCSS Animations
    </h1>
    <div text-md fsc gap-2 md:text-xl>
      <div cursor-pointer title="Toggle the animations" @click="toggleIsOpenAnimate()">
        <div v-if="isOpenAnimate" i-ri:toggle-fill text-purple />
        <div v-else i-ri:toggle-line text-red />
      </div>
      <a title="Github" href="https://github.com/zyyv/unocss-animates" target="_blank" i-ri-github-line />
    </div>
  </header>
</template>
