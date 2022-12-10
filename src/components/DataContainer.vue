<template>
  <div v-if="loading">loading....</div>
  <div v-else>
    <div class="grid gap-8 grid-cols-1 justify-center content-start">
      <Table title="Features" v-bind:source="items" />
    </div>
  </div>
  <PopupModal />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Table from './table/Table.vue'
import PopupModal from './widgets/PopupModal.vue'
import { fetchDemoData, readableContent } from './content/readable'

type ItemContainer<T> = {
  items: T[]
}

type Screenshot = {
  status: string
  mode: string
  timeOfCapture: string
  filekeyRaw: string
  filekeyStyled: string
  filesize: string | null
}

type Edition = {
  id: string
  name: string
  description?: string
}

type Feature = {
  id: string
  name: string
  description: string
  URL: string
  selector: string
  takeScreenshot: boolean
  filename: string
  screenshots: Screenshot[]
  FeatureEditions: ItemContainer<FeatureEdition>
}

type FeatureEdition = {
  edition: Edition
  limit: unknown | null
  limitType: unknown | null
  constraint: unknown | null
  constraintType: unknown | null
  speed: unknown | null
  speedType: unknown | null
}

type DataFormat = {
  id: string
  name: string
  tagline: string
  description: string | null
  URL: string
  modeDesktopLight: boolean
  modeDesktopDark: boolean
  modeMobileLight: boolean
  modeMobileDark: boolean
  editions: ItemContainer<Edition>
  features: ItemContainer<Feature>
}

@Options({
  components: {
    Table,
    PopupModal,
  },
})
export default class DataContainer extends Vue {
  loading = true
  sourceData?: DataFormat

  created() {
    const setData = (json: unknown) => {
      this.sourceData = json as DataFormat
      this.loading = false
    }
    // readableContent(
    //   setData
    // )
    fetchDemoData(setData)
  }

  get items() {
    const source = [...(this.sourceData?.features.items ?? [])]

    const formatted = source.map((item) => {
      const output: any = {}

      output.screenshots = item.screenshots.map((screenshot) => ({
        processed: screenshot.status === 'processed',
        mode: screenshot.mode,
        timeOfScreenshot: new Date(screenshot.timeOfCapture),
        filesize: screenshot.filesize,
      }))

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
