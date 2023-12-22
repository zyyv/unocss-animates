import { defineConfig, mergeConfigs, resolveConfig } from 'unocss'
import { presetUseful } from 'unocss-preset-useful'

const resolvedConfig = resolveConfig({
  presets: [presetUseful({
    enableMagicAnimations: true,
    icons: {
      scale: 1.2,
      cdn: 'https://esm.sh/',
    },
    typography: {
      cssExtend:{
        'pre': {
          'background-color': '#222 !important',
          'border': '1px solid #444 !important',
        }
      }
    },
  })],
  preflights: [{
    getCSS: () => ':root{background-color: #222;color: #eee;}',
  }],
})

export default mergeConfigs([
  resolvedConfig,
  defineConfig({
    safelist: Object.keys(resolvedConfig.theme?.animation?.keyframes ?? {}).map(k => [`animate-${k}`, `group-hover-animate-${k}`]).flat(),
  }),
])
