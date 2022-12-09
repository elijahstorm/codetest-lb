<template>
  <div
    class="p-4 rounded-md border-solid border-shadow border shadow-md overflow-auto"
  >
    <h2 class="text-2xl font-bold p-4">{{ this.title }}</h2>
    <table class="border-l border-r border-t border-solid border-primary">
      <ColumnHeader
        v-bind:columns="columns"
        v-bind:sortIndex="sortIndex"
        v-bind:sortState="sortState"
        v-bind:sortAction="changeSortState"
      />
      <Column v-bind:columns="columns" v-bind:items="sorted" />
    </table>
  </div>
</template>

<script lang="ts">
import { Options, Vue, prop } from 'vue-class-component'
import ColumnHeader from './ColumnHeader.vue'
import Column from './Column.vue'

type SortState = 'none' | 'asc' | 'des'

class Props {
  source: any[] = prop({
    required: true,
  })
  title: string = prop({
    required: true,
  })
}

@Options({
  components: {
    ColumnHeader,
    Column,
  },
})
export default class Table extends Vue.with(Props) {
  selected: number | null = null
  sortIndex: number | null = null
  sortState: SortState = 'none'

  changeSortState(index: number) {
    if (index === this.sortIndex) {
      this.sortState = this.sortState === 'asc' ? 'des' : 'asc'
    } else {
      this.sortState = 'asc'
    }
    this.sortIndex = index
  }

  get columns() {
    return ['#', ...Object.keys(this.source[0])]
  }

  get items() {
    return [...this.source].map((item, index) => {
      item['__index'] = index
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

    return items.sort((a, b) =>
      this.sortState === 'asc'
        ? b[sortedColumn].localeCompare(a[sortedColumn])
        : a[sortedColumn].localeCompare(b[sortedColumn]),
    )
  }
}
</script>
