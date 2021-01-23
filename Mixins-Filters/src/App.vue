<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <Section></Section>
    <filter-apps></filter-apps>
    <!-- <another-filters-apps></another-filters-apps> -->

  </div>
</template>

<script lang="ts">
  import {
    Component,
    Vue
  } from 'vue-property-decorator';
  import HelloWorld from './components/HelloWorld.vue';
  import Section from './components/section.vue';
  import AnotherFiltersApps from './components/AnotherFiltersApps.vue';
  import FilterApps from './components/FilterApps.vue';

  @Component({
    components: {
      HelloWorld,
      Section,
      AnotherFiltersApps,
      FilterApps,

    },
  })
  export default class App extends Vue {}
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>