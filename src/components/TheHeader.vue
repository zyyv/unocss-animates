<template>
  <header
    px-4
    fbc
    h-10
    md-h-18
    w-full
  >
    <div />
    <h1 text-red-400>
      UnoCSS Animations
    </h1>
    <div fsc text-md md:text-xl gap-2>
      <div cursor-pointer title="Toggle the animations" @click="toggleIsOpenAnimate()">
        <div v-if="isOpenAnimate" i-ri:toggle-fill text-purple />
        <div v-else i-ri:toggle-line text-red />
      </div>
      <a title="Github" href="https://github.com/zyyv/unocss-animates" target="_blank" i-ri-github-line />
    </div>
  </header>
</template>
