<script>
import Header from './components/Header.vue';
import Content from './components/Content.vue';
import Footer from './components/Footer.vue';
import BackTop from './components/BackTop.vue';
import Loading from './components/Loading.vue';

export default {
  name: 'app',
  data() {
    return {
      isLoading: true,
      posts: [],
    }
  },
  components: {
    Header,
    Loading,
    Content,
    Footer,
    BackTop,
  },
  created() {
    const url = 'http://localhost:8080/posts/'
    setTimeout(() => {
      this.$http.get(url)
      .then((res) => {
        this.posts = res.data;
        this.isLoading = false;
      });
    },2000);

  },
}
</script>

<template>
  <a-layout id="app">
    <Header />
    <Loading v-if="isLoading"/>
    <Content v-if="!isLoading" :posts="posts"/>
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
