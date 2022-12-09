<template>
  <div class="bg-white text-primary min-w-full min-h-full">
    <section>
      <DataContainer />
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import DataContainer from './components/DataContainer.vue'

@Options({
  components: {
    DataContainer,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app > div {
  display: flex;
  justify-content: center;
  align-items: center;
}

section {
  padding-top: 60px;
  max-width: 900px;
}
</style>
