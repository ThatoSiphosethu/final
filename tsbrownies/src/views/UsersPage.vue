<template>
  <div class="users">
    <h1>Please log-in/sign-up to continue</h1>

      <log-in />
      <sign-up/>

      <router-link to="/SignUp"></router-link>
      <router-link to="/LogIn"></router-link>

    
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
}
</script>