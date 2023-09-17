import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, transformerDirectives } from 'unocss'
import { presetUseful } from 'unocss-preset-useful'
import { theme } from '@unocss/preset-wind'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/',
    }),
    presetUseful(),
    presetTypography(),
  ],
  transformers: [transformerDirectives()],
  safelist: Object.keys(theme.animation?.keyframes ?? {}).map(k => [`animate-${k}`, `group-hover-animate-${k}`]).flat(),
})
