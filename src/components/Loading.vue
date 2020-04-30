<script>
import Vue from 'vue';
import { Spin } from 'ant-design-vue';

Vue.use(Spin);

export default {
  data() {
    return {
      indicator: <a-icon type="loading" style="font-size: 24px" spin />,
    };
  },
};
</script>

<template>
  <div class="loading">
    <a-spin />
  </div>
</template>

<style>
.loading {
  margin-top: 10px;
}
</style>
