<template>
  <v-navigation-drawer v-model="drawer" app color="white" mini-variant mini-variant-width="90">
    <v-avatar class="d-block text-center mx-auto mt-4" size="40">
        <div class="account-header">
<!--          <h3>TS Brownies</h3>-->
<!--          <small>Awesome cookies and Shakes</small>-->
          <v-img src="photo9.jpg" max-height="110" max-width="110" contain></v-img>
        </div>

      <v-img src="thumb9"></v-img>
    </v-avatar>
    <v-list flat class="mt-4">
      <v-list-item-group v-model="selectedItem">
        <v-list-item v-for="(item, i) in items" :key="i" active-class="border" :ripple="false">
          <v-list-item-content>
            <router-link :to="item.path">
              <v-icon v-text="item.icon">
                <v-list-item-subtitle align="center" v-text="items.text" class="mt-3 caption">

                </v-list-item-subtitle>
              </v-icon>
            </router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <div style="position: absolute; bottom: 20px; margin-left: auto; margin-right: auto; left: 0; text-align: center">
      <router-link to="/users">
      <v-icon>fas fa-sign-out-alt</v-icon>
      <br>
<!--        <span class="caption">Logout</span>-->
        <v-btn class="logout" @click="logout" v-if="authUser.uid">LogOut </v-btn>
        <v-btn class="login"  v-else>SignIn </v-btn>
      </router-link>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { auth } from '../firebase/firebase'
export default {
  data: () => ({
    selectedItem: 0,
    drawer: null,
    items: [
      {icon: 'fas fa-home', text: 'Home', path: "/"},
      {icon: 'fas fa-hamburger', text: 'Menu', path: "/Menu"},
      // {icon: 'fas fa-history', text: 'Favorites',path: "/favorite"},
      {icon: 'fas fa-shopping-basket', text: 'Cart', path: "/Cart"},
      // {icon: 'fas fa-percent', text: 'Discounts', path: "/discounts"},
      // {icon: 'fas fa-cog', text: 'Settings', path: "/account"},
      {icon: 'fas fa-user', text: 'User', path: "/users"},
    ],
    }),
    methods: {
     logout() {
       auth
              .signOut()
              .then()
              .catch(err => alert(err.message));
     }  
    },
    props: {
      authUser: Object
    }
   
  
}
</script>

<style>
.border {
  margin-left: 8px;
  margin-right: 8px;
  background: grey;
  border-radius: 20px;
  text-decoration: none;
}

.v-list-item-group .v-list-item--active {
  color: white;
}

.theme--light.v-list-item--active .v-list-item__subtitle, .theme--light.v-list-item .v-list-item__action-text {
  color: white;
}

</style>