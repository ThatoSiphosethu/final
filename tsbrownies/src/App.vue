<template>
  <div id="app">

      <v-app :style="{background: $vuetify.theme.themes.dark.background}">
        <SideBar :auth-user="authUser"/>
        <v-container>
          <v-main>
          <router-view :auth-user="authUser"/>
    </v-main>
        </v-container>
        <SideBarRight/>
      </v-app>



  </div>
</template>

<script>

// import {useRouter} from 'vue-router';
// import firebase from "firebase";
import SideBar from "./components/SideBar";
import SideBarRight from './components/SideBarRight.vue';
import Cart from "./models/Cart"
import { auth } from './firebase/firebase'


export default {
  name: 'App',
  
   mounted() {
      // const router = useRouter();
    
      auth.onAuthStateChanged((user) => {
        if (!user) {
          this.authUser = {}
          // router.replace('/LogIn');
        }
        else  {
          
          this.authUser = user
          // router.replace('/')

        }
      })
    },
  data(){
    return {
      authUser : {},
      cart: new Cart()
    }
  },
  // firestore() {
  //   return {
  //     cart: db.collection("users").doc(this.authUser.uid).collection("cart")
  //   }
  // },
  components: {
    SideBar,
    SideBarRight,
  },

};
</script>
