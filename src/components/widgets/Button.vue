<template>
  <button
    type="button"
    class="flex gap-2 text-white bg-primary-800 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2 focus:ring-4 focus:outline-none focus:ring-primary-300 transition-colors"
    v-bind:class="icon ? 'pl-4 pr-5' : ''"
    v-on:click="performAction()"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { Options, Vue, prop } from 'vue-class-component'

class Props {
  color?: string = prop({})
  icon?: boolean = prop({})
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
