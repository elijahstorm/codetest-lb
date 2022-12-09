<template>
  <tbody>
    <tr class="border-b" v-for="item in items" v-bind:key="item.id">
      <td
        class="text-sm font-light px-6 py-4 whitespace-nowrap text-left"
        v-for="(column, columnIndex) in columns"
        v-bind:key="column"
      >
        <span v-if="columnIndex === 0">
          {{ item.__index }}
        </span>
        <span v-else-if="column !== 'id'">
          {{ item[column] ?? '--' }}
        </span>
      </td>
    </tr>
  </tbody>
</template>

<script lang="ts">
import { Options, Vue, prop } from 'vue-class-component'

class Props {
  columns: string[] = prop({
    required: true,
  })
  items: string[] = prop({
    required: true,
  })
}

@Options({})
export default class Table extends Vue.with(Props) {}
</script>

<style scoped>
tr:nth-child(2n) {
  background-color: #eeee;
}
</style>
