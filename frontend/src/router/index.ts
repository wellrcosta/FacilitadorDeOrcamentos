import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import MainPage from '@/views/MainPage/MainPage.vue';

Vue.use(VueRouter);
Vue.use(Buefy);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Main Page',
    component: MainPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
