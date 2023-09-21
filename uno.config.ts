import { defineConfig } from 'unocss'
import { presetUseful } from 'unocss-preset-useful'
import { theme } from '@unocss/preset-wind'

export default defineConfig({
  presets: [
    presetUseful({
      icons: {
        scale: 1.2,
        cdn: 'https://esm.sh/',
      },
      typography: true,
    }),
  ],
  preflights: [{
    getCSS: () => ':root{background-color: #222;color: #fff;}',
  }],
  safelist: Object.keys(theme.animation?.keyframes ?? {}).map(k => [`animate-${k}`, `group-hover-animate-${k}`]).flat(),
})
