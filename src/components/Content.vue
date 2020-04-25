<script>
export default {
  props: [ 'posts' ]
}
</script>

<template>
  <a-layout-content>
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