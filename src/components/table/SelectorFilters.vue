<template>
  <div class="flex items-center flex-wrap gap-4 w-full">
    <p v-if="this.prompt" class="text-lg font-bold">{{ this.prompt }}</p>
    <SelectorChip
      v-for="filter in filters"
      v-bind:key="filter.id"
      v-bind:text="filter.text"
      v-bind:selected="filter.selected"
      v-bind:action="(forceValue) => updateFilter(filter.id, forceValue)"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue, prop } from 'vue-class-component'
import { editionFilterStore } from '../content/stores'
import SelectorChip from '../widgets/SelectorChip.vue'

class Props {
  prompt?: string = prop({
    type: String,
  })
}

@Options({
  components: {
    SelectorChip,
  },
})
export default class SelectorFilters extends Vue.with(Props) {
  updateFilter(id: string, forceValue?: boolean) {
    const filter = editionFilterStore.find((filter) => filter.id === id)
    if (filter == null) return
    filter.selected = forceValue ?? !filter?.selected
  }

  get filters() {
    return editionFilterStore
  }
}
</script>
