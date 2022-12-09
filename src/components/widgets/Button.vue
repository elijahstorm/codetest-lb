<template>
  <button
    type="button"
    class="flex gap-2 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
    v-on:click="performAction()"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { Options, Vue, prop } from 'vue-class-component'

class Props {
  action: () => void = prop({
    required: true,
  })
}

@Options({})
export default class Button extends Vue.with(Props) {
  performAction() {
    this.action()
  }
}
</script>
