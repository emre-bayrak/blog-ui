<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>

<template>
  <a-layout-header>
    <a href="/" class="logo">
      <p>Emre Bayrak</p>
    </a>
    <a-menu
      theme="dark"
      mode="horizontal"
      :defaultSelectedKeys="['1']"
      :style="{ lineHeight: '64px', marginRight: '100px' }"
    >
      <a-menu-item key="1">Home</a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<style>
.logo {  
  width: 120px;
  height: 30px;
  background: rgba(255, 255, 255, 0.2);
  float: left;
  margin-top: 17px;
  border:1px solid black;
  border-radius: 5px;
}
.logo p {
  color:aliceblue;
  line-height: 0px!important;
  margin-top: 15px;
  font-family: 'Courier New', Courier, monospace;
}
</style>