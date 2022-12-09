<template>
  <table class="min-w-full">
    <thead class="border-b">
      <tr>
        <th
          scope="col"
          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
          v-for="column in columns"
          v-bind:key="column"
        >
          <span v-if="column === 'id'" />
          <span v-else>
            {{ column }}
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="border-b"
        v-for="(item, itemIndex) in items"
        v-bind:key="item.id"
      >
        <td
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
          v-for="(column, columnIndex) in columns"
          v-bind:key="column"
        >
          <span v-if="columnIndex === 0">
            {{ itemIndex }}
          </span>
          <span v-else-if="column === 'id'" />
          <span v-else>
            {{ item[column] ?? '--' }}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Options, Vue, prop } from 'vue-class-component'

type TableData = {
  columns: string[]
  items: object[]
}

class Props {
  source: object[] = prop({
    required: true,
  })
}

@Options({})
export default class Table extends Vue.with(Props) {
  table: TableData

  get columns() {
    return ['#', ...Object.keys(this.source[0])]
  }

  get items() {
    return this.source
  }
}
</script>

<style scoped>
:is(thead tr, tr:nth-child(2n)) {
  background-color: #eeee;
}

td {
  text-align: left;
}
</style>
