<template>
  <div class="p-4 rounded-md border-solid border-slate-300 border-2 shadow-md">
    <h2 class="text-2xl font-bold p-4">{{ this.title }}</h2>
    <table>
      <ColumnHeader v-bind:columns="columns" />
      <Column v-bind:columns="columns" v-bind:items="items" />
    </table>
  </div>
</template>

<script lang="ts">
import { Options, Vue, prop } from 'vue-class-component'
import ColumnHeader from './ColumnHeader.vue'
import Column from './Column.vue'

class Props {
  source: object[] = prop({
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
  get columns() {
    return ['#', ...Object.keys(this.source[0])]
  }

  get items() {
    return this.source
  }
}
</script>
