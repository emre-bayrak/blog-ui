import Vue from 'vue';
import Router from 'vue-router';
import Posts from '@/components/Posts';
import Users from '@/components/Users';
import Registration from '@/components/Registration';
import Youtube from '@/components/Youtube';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Posts, },
    { path: '/users', component: Users, },
    { path: '/registration', component: Registration, },
    { path: '/youtube', component: Youtube, },
  ],
  mode: 'history',
});
