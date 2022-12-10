import { reactive } from 'vue'

export const popupModalStore = reactive<{
  shown: boolean
  content: {
    title: string
    data: any
    okAction?: () => void
  }
}>({
  shown: false,
  content: {
    title: '',
    data: {},
  },
})
