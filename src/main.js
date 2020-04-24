import Vue from 'vue'
import App from './App.vue'
import { DatePicker } from 'ant-design-vue';
Vue.use(DatePicker);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
