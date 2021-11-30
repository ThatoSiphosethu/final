<template>
  <div id="app">

      <v-app :style="{background: $vuetify.theme.themes.dark.background}">
        <SideBar/>
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
import {onBeforeMount} from 'vue'
import {useRouter, useRoute} from 'vue-router';
import firebase from "firebase";
import SideBar from "./components/SideBar";
import SideBarRight from './components/SideBarRight.vue';


export default {
  name: 'App',
  setup () {
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      firebase.auth.onAuthStateChanged((user) => {
        if (!user) {
          router.replace('/LogIn');
        }
        else if (route.path == "/LogIn" || route.path == "/SignUp") {
          router.replace('/')
        }
      })
    })
  },
  data(){
    return {
      authUser : {},
    }
  },
  components: {
    SideBar,
    SideBarRight,
  },

};
</script>
