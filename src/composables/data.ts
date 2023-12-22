import { type Theme } from '@unocss/preset-mini'

export const All_Animations = ref((import.meta.env.__UNO_THEME__ as Theme).animation)
