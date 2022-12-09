<template>
  <div class="bg-white text-primary min-w-full min-h-full">
    <section class="py-32 sm:p-16 lg:p-32">
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
  display: grid;
  justify-content: center;
  min-height: 100vh;
}
</style>
