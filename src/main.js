import Vue from 'vue';
import Antd from 'ant-design-vue';
import './antd-variables.less';
import App from './App.vue';
import Axios from 'axios';
import Moment from 'moment';

Vue.config.productionTip = false

Vue.use(Antd);
Vue.prototype.$http = Axios;
Vue.prototype.moment = Moment;

new Vue({
  render: h => h(App),
}).$mount('#app');
