<script>
import Vue from 'vue';
import { Menu } from 'ant-design-vue';

Vue.use(Menu);

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
    <img src="../assets/logo.png" class="logo"/>
    <a-menu
      theme="dark"
      mode="horizontal"
      :defaultSelectedKeys="['1']"
      :style="{ lineHeight: '64px', marginRight: '100px' }"
    >
      <a-menu-item key="1">
        <router-link :to="'/'">
          Home
        </router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link :to="'/users'">
          Users
        </router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <router-link :to="'/registration'">
          Registration
        </router-link>
      </a-menu-item>
      <a-menu-item key="4">
        <router-link :to="'/youtube'">
          Youtube
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<style>
.logo {  
  width: 160px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  float: left;
  margin-top: 12px;
  margin-right: 10px;
  border:1px solid black;
  border-radius: 5px;
}
</style>