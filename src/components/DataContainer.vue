<template>
  <div v-if="loading">loading....</div>
  <div v-else>
    <div
      class="grid gap-8 grid-cols-1 2xl:grid-cols-2 justify-center content-start"
    >
      <Table title="Editions" v-bind:source="sourceData.editions.items" />
      <Table title="Features" v-bind:source="sourceData.features.items" />
    </div>
  </div>
  <PopupModal />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Table from './table/Table.vue'
import PopupModal from './widgets/PopupModal.vue'
import { fetchDemoData, readableContent } from './content/readable'

@Options({
  components: {
    Table,
    PopupModal,
  },
})
export default class DataContainer extends Vue {
  loading = true
  // eslint-disable-next-line
  sourceData: any

  created() {
    const setData = (json: any) => {
      this.sourceData = json
      this.loading = false
    }
    // readableContent(
    //   setData
    // )
    fetchDemoData(setData)
  }
}
</script>
