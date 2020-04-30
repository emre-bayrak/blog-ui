import Vue from 'vue';
//import Antd from 'ant-design-vue';
import './antd-variables.less';
import App from './App.vue';
import Axios from 'axios';
import Moment from 'moment';
import router from './router';

Vue.config.productionTip = false;

Vue.filter('formatDate', function (value) {
  if (!value) return ''
  return Moment(value.toString()).format('MM/DD/YYYY hh:mm')
});

//Vue.use(Antd);
Vue.prototype.$http = Axios;
Vue.prototype.moment = Moment;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
