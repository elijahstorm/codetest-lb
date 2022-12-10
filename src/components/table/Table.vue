<template>
  <div
    class="p-4 rounded-md border-solid overflow-hidden h-min-content"
    v-bind:class="this.shadow ? 'border-shadow border shadow-md' : ''"
  >
    <div class="flex justify-between items-center">
      <h2 class="text-2xl font-bold p-4">{{ this.title }}</h2>
      <template v-if="this.shadow">
        <IconHide
          v-if="!hidden"
          v-on:click="hideTable()"
          width="30"
          height="30"
          class="expand-table cursor-pointer"
        />
        <IconExpandContent
          v-else
          v-on:click="hideTable()"
          width="30"
          height="30"
          class="expand-table cursor-pointer"
        />
      </template>
    </div>
    <div v-bind:class="hidden ? 'max-h-0' : ''" class="flex overflow-auto">
      <table
        class="border-l border-r border-t border-solid border-primary w-full"
      >
        <ColumnHeader
          v-bind:columns="columns"
          v-bind:sortIndex="sortIndex"
          v-bind:sortState="sortState"
          v-bind:sortAction="changeSortState"
        />
        <Column v-bind:columns="columns" v-bind:items="sorted" />
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue, prop } from 'vue-class-component'
import ColumnHeader from './ColumnHeader.vue'
import Column from './Column.vue'
import {
  IconHide,
  IconExpand,
  IconExpandContent,
} from '@iconify-prerendered/vue-material-symbols'

type SortState = 'none' | 'asc' | 'des'

class Props {
  source: ({
    [key: string]: string | undefined
  } & {
    __index: number
  })[] = prop({
    required: true,
  })
  title: string = prop({
    required: true,
    type: String,
  })
  shadow?: boolean = prop({
    type: Boolean,
  })
}

@Options({
  components: {
    ColumnHeader,
    Column,
    IconHide,
    IconExpand,
    IconExpandContent,
  },
})
export default class Table extends Vue.with(Props) {
  selected: number | null = null
  sortIndex: number | null = null
  sortState: SortState = 'none'
  hidden = false

  changeSortState(index: number) {
    if (index === this.sortIndex) {
      this.sortState = this.sortState === 'asc' ? 'des' : 'asc'
    } else {
      this.sortState = 'asc'
    }
    this.sortIndex = index
  }

  hideTable() {
    this.hidden = !this.hidden
  }

  get columns() {
    return ['#', ...Object.keys(this.source[0])]
  }

  get items() {
    return [...this.source].map((item, index) => {
      item.__index = index
      return item
    })
  }

  get sorted() {
    const items = [...this.items]

    if (this.sortIndex === null) {
      return items
    }

    const sortedColumn = this.columns[this.sortIndex]

    if (sortedColumn === '#') {
      return this.sortState === 'asc' ? items.reverse() : items
    }

    return items.sort(
      (a, b) =>
        (this.sortState === 'asc'
          ? b[sortedColumn]?.toString().localeCompare(a[sortedColumn] ?? '')
          : a[sortedColumn]?.toString().localeCompare(b[sortedColumn] ?? '')) ??
        0,
    )
  }
}
</script>

<style scoped>
.h-min-content {
  height: min-content;
}
</style>
