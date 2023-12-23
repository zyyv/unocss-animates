<template>
  <header h-10 w-full fbc px-4 md-h-18>
    <div pr h-14 w-14 fcc>
      <div pa left-0 top-0 z-1 h-full w-full animate-pulse rd-full blur-lg style="background-image: linear-gradient( -45deg, #44444460 30%, #88888860 );" />
      <div i-logos-unocss animate-duration-2000 animate-count-infinite text-3xl />
    </div>
    <h1 text="#bbb" fcc gap-2>
      <div fcc class="children-animate-count-infinite" :class="{ 'children-animate-none': !isOpenAnimate }">
        <div animate-light-speed-in-left>
          U
        </div>
        <div animate-rubber-band>
          n
        </div>
        <div animate-bounce>
          o
        </div>
        <div animate-heart-beat>
          C
        </div>
        <div animate-boingInUp>
          S
        </div>
        <div animate-light-speed-in-right>
          S
        </div>
      </div>

      <div fcc class="children-animate-count-infinite" :class="{ 'children-animate-none': !isOpenAnimate }">
        <div animate-light-speed-in-left>
          A
        </div>
        <div animate-rubber-band>
          n
        </div>
        <div animate-bounce>
          i
        </div>
        <div animate-heart-beat>
          m
        </div>
        <div animate-boingInUp>
          a
        </div>
        <div animate-light-speed-in-right>
          t
        </div>
        <div animate-slideLeft>
          e
        </div>
        <div animate-rubber-band>
          s
        </div>
      </div>
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
