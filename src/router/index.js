import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import Orders from '../components/Orders.vue';
import Products from '../components/Products.vue';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Orders',
      name: 'Orders',
      component: Home
    },
    {
      path: '/Products',
      name: 'Products',
      component: Home
    }
  ]
})
