
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UsersPage from "../views/UsersPage.vue";
import Menu from "../views/Menu.vue";
import Cart from '../views/Cart.vue'
import Drinks from "../components/Drinks";
import Brownies from "../components/Brownies.vue";
import MenuItem from "../components/MenuItem";
import AddCategory from "../admin/AddCategory.vue";
import AddMenu from "../admin/AddMenu.vue";
import AddUser from "../admin/AddUser.vue";
import Login from "../admin/Login.vue";
import Orders from "../admin/Orders.vue";

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

  {
    path: '/brownie',
    name: 'Brownies',
    component: Brownies
  },

  {
    path: '/all',
    name: 'MenuItem',
    component: MenuItem
  },

  {
    path: '/addcat',
    name: 'AddCategory',
    component: AddCategory,
    meta: {
      requiresAuth : true
    }
  },

  {
    path: '/addmenu',
    name: 'AddMenu',
    component: AddMenu,
    meta: {
      requiresAuth : true
    }
  },

  {
    path: '/adduser',
    name: 'AddUser',
    component: AddUser,
    meta: {
      requiresAuth : true
    }
  },

  {
    path: '/adminlogin',
    name: 'Login',
    component: Login,
    meta: {
      requiresAuth : true
    }
  },

  {
    path: '/ordere',
    name: 'Orders',
    component: Orders,
    meta: {
      requiresAuth : true
    }
  },
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   const authenticatedUser = null;
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

//   if (requiresAuth && !authenticatedUser) next('')
// })

export default router
