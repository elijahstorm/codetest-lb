<template>
  <div v-if="loading">loading....</div>
  <div v-else>
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <Table v-bind:source="sourceData.editions.items" />
            <Table v-bind:source="sourceData.features.items" />
          </div>
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

<style scoped></style>
