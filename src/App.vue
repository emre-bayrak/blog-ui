<script>
import Vue from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import BackTop from './components/BackTop.vue';
import { Layout } from 'ant-design-vue';

Vue.use(Layout);

export default {
  name: 'app',
  data() {
    return {}
  },
  components: {
    Header,
    Footer,
    BackTop,
  },
}
</script>

<template>
  <a-layout id="app">
    <Header />
    <router-view />
    <Footer />
    <BackTop />
  </a-layout>
</template>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.ant-layout {
  text-align: center;
}

</style>
