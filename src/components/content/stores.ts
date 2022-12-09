import { reactive } from 'vue'

export const popupModalStore = reactive({
  shown: true,
  content: {
    title: '',
    msg: '',
    // okAction,
  },
})
