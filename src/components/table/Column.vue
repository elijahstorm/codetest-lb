<template>
  <tbody>
    <tr class="border-b" v-for="item in items" v-bind:key="item.id">
      <td
        class="text-sm font-light px-6 py-4 text-left align-top max-w-xs"
        v-for="(column, columnIndex) in filteredColumns"
        v-bind:key="column"
      >
        <template v-if="columnIndex === 0">
          <span class="font-bold">
            {{ item.__index }}
          </span>
        </template>
        <template v-else-if="typeof item[column] === 'object'">
          <Button
            type="button"
            class="flex gap-2 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            v-bind:action="() => expandObject(column, item[column])"
          >
            <IconExpandContent
              width="20"
              height="20"
              class="cursor-pointer inline"
            />
            <span> Object </span>
          </Button>
        </template>
        <template v-else-if="typeof item[column] === 'boolean'">
          <IconCheck
            v-if="item[column]"
            class="text-green"
            width="40"
            height="40"
          />
          <IconCross v-else class="text-alert" width="40" height="40" />
        </template>
        <template v-else>
          {{ item[column] ?? '--' }}
        </template>
      </td>
    </tr>
  </tbody>
</template>

<script lang="ts">
import { IconCheck, IconCross } from '@iconify-prerendered/vue-lucide'
import { IconExpandContent } from '@iconify-prerendered/vue-material-symbols'
import { Options, Vue, prop } from 'vue-class-component'
import Button from '../widgets/Button.vue'
import { popupModalStore } from '../content/stores'

class Props {
  columns: string[] = prop({
    required: true,
  })
  items: string[] = prop({
    required: true,
  })
}

@Options({
  components: {
    Button,
    IconCheck,
    IconCross,
    IconExpandContent,
  },
})
export default class Column extends Vue.with(Props) {
  expandObject(column: string, data: any) {
    popupModalStore.content = {
      title: column,
      msg: '<strong>yo</strong>',
    }
    popupModalStore.shown = true
  }

  get filteredColumns() {
    return [...this.columns].filter((c) => c !== 'id')
  }
}
</script>

<style scoped>
tr:nth-child(2n) {
  background-color: #eeee;
}
</style>
