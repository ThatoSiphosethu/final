<template>
  <div class="users">
    <h1>Please log-in/sign-up to continue</h1>
<!--    <v-app :style="{background: $vuetify.theme.themes.dark.background}">-->
<!--    <admin-view v-if="userType === 'admin'"></admin-view>-->
<!--    <user-view v-if="userType === 'user'"></user-view>-->
      <log-in />
      <sign-up/>

      <router-link to="/SignUp"></router-link>
      <router-link to="/LogIn"></router-link>
<!--    </v-app>-->
    
  </div>
</template>


<script>
import LogIn from "../components/LogIn";
import SignUp from "../components/SignUp";
export default {
  name:'UsersPage',
  components: {
    LogIn, SignUp
  },
  // data(){
  //   return {
  //     userType : '' //This should be handled by some model or any other way
  //   }
  // },
}
</script>