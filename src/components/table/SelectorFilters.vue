<template>
  <div class="flex gap-4 flex-wrap w-full">
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
import { Options, Vue } from 'vue-class-component'
import { editionFilterStore } from '../content/stores'
import SelectorChip from '../widgets/SelectorChip.vue'

@Options({
  components: {
    SelectorChip,
  },
})
export default class SelectorFilters extends Vue {
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
