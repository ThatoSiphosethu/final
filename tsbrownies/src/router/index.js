
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UsersPage from "../views/UsersPage.vue";
import Menu from "../views/Menu.vue";
import Cart from '../views/Cart.vue'
import Drinks from "../components/Drinks";
//add all the components from the view



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/users',
    name: 'UsersPage',
    component: UsersPage
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },

  {
    path: '/drinks',
    name: 'Drinks',
    component: Drinks
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
