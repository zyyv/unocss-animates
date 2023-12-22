import type { AnimateInfo } from '../types'

export const [isOpenAnimate, toggleIsOpenAnimate] = useToggle(true)
export const modalVisible = ref(false)

export const activeAnimateName = ref('')

export const activeAnimate = computed(() => {
  return {
    name: activeAnimateName.value,
    count: All_Animations.value?.counts?.[activeAnimateName.value],
    duration: All_Animations.value?.durations?.[activeAnimateName.value],
    timingFn: All_Animations.value?.timingFns?.[activeAnimateName.value],
    property: All_Animations.value?.properties?.[activeAnimateName.value],
    keyframe: All_Animations.value?.keyframes?.[activeAnimateName.value],
  } as AnimateInfo
})

