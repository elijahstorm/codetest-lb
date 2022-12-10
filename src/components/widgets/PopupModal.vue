<template>
  <div
    v-if="shown"
    class="fixed inset-0 w-full h-screen flex items-center justify-center bg-semi"
    v-on:click="removePopup()"
  >
    <div
      class="bg-white rounded w-3/4 border shadow-lg"
      v-on:click.stop="() => 0"
    >
      <div class="rounded-t bg-teal-500">
        <div class="bg-primary relative py-3 px-2 flex">
          <span class="font-semibold text-white md:text-base text-sm">{{
            content.title
          }}</span>
          <div
            class="absolute right-0 top-0 -mr-4 -mt-4 border cursor-pointer shadow-lg bg-white z-10 rounded-full p-0"
          >
            <IconInfoRounded width="40" height="40" />
          </div>
        </div>
      </div>
      <div class="bg-gray-200 md:text-base text-sm border-b p-2 py-2 pb-8">
        <Table v-bind:title="content.title" v-bind:source="content.data" />
      </div>
      <div class="bg-grey p-2 flex justify-end rounded-b">
        <Button color="alert" v-bind:action="removePopup"> Close </Button>
        <Button v-if="acceptActionExists()" v-bind:action="acceptPopup">
          OK
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { IconInfoRounded } from '@iconify-prerendered/vue-material-symbols'
import { Options, Vue } from 'vue-class-component'
import { popupModalStore } from '../content/stores'
import Table from '../table/Table.vue'
import Button from './Button.vue'

@Options({
  components: {
    Button,
    IconInfoRounded,
    Table,
  },
})
export default class PopupModal extends Vue {
  data() {
    return popupModalStore
  }

  removePopup() {
    popupModalStore.shown = false
  }

  acceptActionExists() {
    return typeof popupModalStore.content.okAction !== 'undefined'
  }

  acceptPopup() {
    popupModalStore.content.okAction?.call({})
  }
}
</script>
