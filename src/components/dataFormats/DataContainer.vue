<template>
  <div v-if="loading">loading....</div>
  <div v-else>
    <div class="grid gap-8 grid-cols-1 justify-center content-start">
      <SelectorFilters prompt="Edition filters:" />
      <Table title="Features" v-bind:source="items" shadow />
    </div>
  </div>
  <PopupModal />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Table from '../table/Table.vue'
import PopupModal from '../widgets/PopupModal.vue'
import SelectorFilters from '../table/SelectorFilters.vue'
import { fetchDemoData, readableContent } from '../content/readable'
import { editionFilterStore } from '../content/stores'
import type { DataFormat } from '../dataFormats/types'

@Options({
  components: {
    Table,
    PopupModal,
    SelectorFilters,
  },
})
export default class DataContainer extends Vue {
  loading = true
  sourceData?: DataFormat

  created() {
    const setData = (json: unknown) => {
      this.sourceData = json as DataFormat
      this.loading = false
      this.sourceData?.features.items.forEach((feature) =>
        feature.FeatureEditions.items.map((featureEdition) => {
          // add all unique edition types, based on id
          if (
            editionFilterStore.findIndex(
              (filter) => filter.id === featureEdition.edition.id,
            ) !== -1
          ) {
            return
          }

          editionFilterStore.push({
            id: featureEdition.edition.id,
            text: featureEdition.edition.name,
            selected: false,
          })
        }),
      )
    }
    process.env.NODE_ENV === 'development'
      ? fetchDemoData(setData)
      : readableContent(setData)
  }

  get filter() {
    const source = [...(this.sourceData?.features.items ?? [])]

    // first check if any filters are enabled
    const filtersEnabled = editionFilterStore.findIndex(
      (filter) => filter.selected,
    )

    console.log({ filtersEnabled })

    // if no filters are enabled, return the full list
    if (filtersEnabled === -1) {
      return source
    }

    // find a non -1 index to verify
    // if this feature is included in the current filter
    return source.filter((feature) =>
      feature.FeatureEditions.items.findIndex(
        (featureEdition) =>
          editionFilterStore.findIndex(
            (filter) =>
              filter.selected && filter.id === featureEdition.edition.id,
          ) === -1,
      ),
    )
  }

  get items() {
    const source = this.filter

    const formatted = source.map((item) => {
      const output: {
        timeOfScreenshot?: Date
        editions?: string
        screenshots?: object[]
        FeatureEditions?: object[]
      } = {}

      output.timeOfScreenshot = item.screenshots.map(
        (screenshot) => new Date(screenshot.timeOfCapture),
      )[0]

      output.screenshots = item.screenshots.map((screenshot) => ({
        processed: screenshot.status === 'processed',
        mode: screenshot.mode,
        timeOfScreenshot: new Date(screenshot.timeOfCapture),
        filesize: screenshot.filesize,
      }))

      output.editions = item.FeatureEditions.items
        .map((featureEdition) => featureEdition.edition.name)
        .join(', ')

      output.FeatureEditions = item.FeatureEditions.items.map(
        (featureEdition) => ({
          edition: featureEdition.edition.name,
          limit: featureEdition.limit,
          limitType: featureEdition.limitType,
          constraint: featureEdition.constraint,
          constraintType: featureEdition.constraintType,
          speed: featureEdition.speed,
          speedType: featureEdition.speedType,
        }),
      )

      return { ...item, ...output }
    })

    return formatted
  }
}
</script>
