<template>
  <div v-if="loading">loading....</div>
  <div v-else>
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden text-left flex flex-col gap-8">
          <Table title="Editions" v-bind:source="sourceData.editions.items" />
          <Table title="Features" v-bind:source="sourceData.features.items" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Table from './Table.vue'
import { fetchDemoData, readableContent } from './content/readable'

@Options({
  components: {
    Table,
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
