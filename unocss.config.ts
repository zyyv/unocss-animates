import { defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives } from 'unocss'
import { presetUseful } from 'unocss-preset-useful'
import { theme } from '@unocss/preset-wind'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetUseful(),
  ],
  transformers: [transformerDirectives()],
  safelist: Object.keys(theme.animation?.keyframes ?? {}).map(k => `animate-${k}`),
})
