<script>
import Header from './components/Header.vue';
import Content from './components/Content.vue';
import Footer from './components/Footer.vue';
import BackTop from './components/BackTop.vue';

export default {
  name: 'app',
  data() {
    return {}
  },
  components: {
    Header,
    Content,
    Footer,
    BackTop,
  },
}
</script>

<template>
  <a-layout id="app">
    <Header />
    <Content />
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
