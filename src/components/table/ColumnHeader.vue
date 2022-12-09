<template>
  <thead class="border-b">
    <tr>
      <th
        scope="col"
        class="text-sm px-6 py-4 capitalize font-bold bg-contrast text-left cursor-pointer transition-colors hover:bg-primary-300 hover:text-white"
        v-for="(column, index) in filteredColumns"
        v-bind:key="column"
        v-on:click="toggleSortState(index)"
      >
        <div
          class="min-w-full flex justify-between"
          v-bind:class="column === 'description' ? 'w-80' : ''"
        >
          {{ column }}
          <div v-if="sortIndex === index" class="text-xl">
            <IconSortAsc v-if="sortState === 'asc'" />
            <IconSortDesc v-else-if="sortState === 'des'" />
          </div>
          <IconSortAsc v-else class="invisible text-xl" />
          <!-- this invisible icon is to make styling easier -->
        </div>
      </th>
    </tr>
  </thead>
</template>

<script lang="ts">
import { Options, Vue, prop } from 'vue-class-component'
import { IconSortAsc, IconSortDesc } from '@iconify-prerendered/vue-lucide'

type SortState = 'none' | 'asc' | 'des'

class Props {
  columns: string[] = prop({
    required: true,
  })
  sortIndex: number | null = prop({
    required: true,
  })
  sortState: SortState = prop({
    required: true,
  })
  sortAction: (index: number) => void = prop({
    required: true,
  })
}

@Options({
  components: {
    IconSortAsc,
    IconSortDesc,
  },
})
export default class ColumnHeader extends Vue.with(Props) {
  toggleSortState(index: number) {
    if (index === 1) return
    this.sortAction(index)
  }

  get filteredColumns() {
    return [...this.columns].filter((c) => c !== 'id')
  }
}
</script>
