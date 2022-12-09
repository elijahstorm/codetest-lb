<template>
  <div
    v-if="shown"
    class="fixed inset-0 w-full h-screen flex items-center justify-center bg-semi"
    v-on:click="removePopup()"
  >
    <div
      class="w-full max-w-2xl text-primary bg-white shadow-lg rounded-lg p-8"
    >
      <h1>{{ title }}</h1>
      <p>
        {{ msg }}
      </p>
      <div class="flex justify-between w-full">
        <Button v-bind:action="removePopup"> Close </Button>
        <Button v-bind:action="acceptPopup"> Ok </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue, prop } from 'vue-class-component'
import { popupModalStore } from '../content/stores'
import Button from './Button.vue'

class Props {
  title: string = prop({
    required: true,
  })
  msg: string = prop({
    required: true,
  })
  okAction?: () => void = prop({})
}

@Options({
  components: {
    Button,
  },
})
export default class PopupModal extends Vue.with(Props) {
  data() {
    return popupModalStore
  }

  removePopup() {
    popupModalStore.shown = false
  }

  acceptPopup() {
    if (typeof this.okAction === 'undefined') return

    this.okAction()
  }
}
</script>
