<template>
  <thead class="border-b">
    <tr>
      <th
        scope="col"
        class="text-sm font-medium text-gray-900 px-6 py-4 text-left capitalize"
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
</template>

<script lang="ts">
import { Options, Vue, prop } from 'vue-class-component'

class Props {
  columns: string[] = prop({
    required: true,
  })
}

@Options({})
export default class Table extends Vue.with(Props) {}
</script>

<style scoped>
thead tr {
  background-color: #eeee;
}
</style>
