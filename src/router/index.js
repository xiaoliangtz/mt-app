import Vue from 'vue';
import Router from 'vue-router';
import defaultPage from '@/layout/default';
import blankPage from '@/layout/blank';
import Index from '@/page/index.vue';
import changeCity from '@/page/changeCity.vue';
import Login from '@/page/login.vue';
import Register from '@/page/register.vue'
import goodsList from '@/page/goodsList.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'default',
      component: defaultPage,
      redirect: '/index',
      children: [
        {
          path: 's/:name',
          name: 'goods',
          component: goodsList
        },
        {
          path: '/index',
          name: 'index',
          component: Index
        },
        {
          path: '/changecity',
          name: 'changeCity',
          component: changeCity
        }
    ]
    },
    {
      path: '/blank',
      name: 'blank',
      component: blankPage
    },
    {
      path: 'login',
      name: 'login',
      component: Login
    },
    {
      path: 'register',
      name: 'register',
      component: Register
    }
  ]
});
