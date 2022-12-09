<template>
  <section>
    <DataContainer />
  </section>
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

section {
  max-width: 900px;
}
</style>
