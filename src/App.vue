<template>
  <div class="wrapper">
    <header class="header">
      <div class="container">
        <Nav/>
      </div>
    </header>
    <main>
      <MainContent/>
    </main>
  </div>
</template>

<script>

import { mapActions } from 'vuex';
import Nav from './components/common/Nav.vue';
import MainContent from './components/mainContent/MainContent.vue';

export default {
  name: 'App',
  components: {
    Nav,
    MainContent
  },
  methods: {
    ...mapActions(["getWeather"])
  },
  created() {
    this.getWeather("Ташкент")
  }
}
</script>

<style lang="scss">
</style>
