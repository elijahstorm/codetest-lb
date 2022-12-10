import { reactive } from 'vue'

export const popupModalStore = reactive<{
  shown: boolean
  content: {
    title: string
    data: object
    okAction?: () => void
  }
}>({
  shown: false,
  content: {
    title: '',
    data: {},
  },
})

export const editionFilterStore = reactive<
  {
    id: string
    text: string
    selected: boolean
  }[]
>([])
