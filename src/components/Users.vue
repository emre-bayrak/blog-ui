<template>
  <div>
    <a-list itemLayout="horizontal" :dataSource="users">
      <a-list-item slot="renderItem" slot-scope="item, index">
        <a-list-item-meta :key="index">
          <a-button slot="title" @click="info(item.password)">{{ item.username }}</a-button>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
import Vue from 'vue';
import { List, Modal, Button } from 'ant-design-vue';

Vue.use(List);
Vue.use(Modal);
Vue.use(Button);
Vue.prototype.$info = Modal.info;

export default {
  name: 'users',
  data() {
    return {
      users: [],
    }
  },
  methods: {
    info(password) {
      const h = this.$createElement;
      this.$info({
        title: 'User password :',
        content: h('div', {}, [
          h('p', `${password}`),
        ]),
        onOk() {},
      });
    },
  },
  created() {
    const url = 'http://localhost:8080/users/';
    setTimeout(() => {
      this.$http.get(url)
      .then((res) => {
        this.users = res.data;
      });
    }, 1000);
  },
}
</script>