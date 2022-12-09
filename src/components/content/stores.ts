import { reactive } from 'vue'

export const popupModalStore = reactive<{
  shown: boolean
  content: {
    title: string
    msg: string
    okAction?: () => void
  }
}>({
  shown: false,
  content: {
    title: '',
    msg: '',
  },
})
