import Vue from 'vue'
import VueRouter from 'vue-router'
import Detail from '../views/Detail.vue'
import DetailList from '../views/DetailList.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Cart from '../views/Cart.vue'

import Index from '../views/Index.vue'
import Order from '../views/Order.vue'
import Mine from '../views/Mine.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/mine:uname',
      name: 'mine',
      component: Mine
    },
    {
      path: '/order/:uname',
      name: 'order',
      component: Order
    },
    {
      path: '/cart/:uname',
      name: 'cart',
      component: Cart
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/detailList/:family_id',
      name: 'detailList',
      component: DetailList
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode:'hash',
  routes
})

export default router
