<script>
import Loading from './Loading.vue';
import Vue from 'vue';
import { Divider } from 'ant-design-vue';

Vue.use(Divider);

export default {
  name: 'posts',
  data() {
    return {
      isLoading: true,
      posts: [],
    }
  },
  components: {
    Loading,
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
  <a-layout-content>
    <Loading v-if="isLoading"/>
    <div v-for="(post,index) in posts" :key="index">
      <p class="post"> {{ post.post}} ( {{ moment(post.createdAt).startOf('hour').fromNow() }} )</p>
      <a-divider />
    </div>
  </a-layout-content>
</template>

<style>
.ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
</style>