<template>
<div>
  <h3>Log-In</h3>
  <v-form @submit.prevent="login">
    <input type="text" placeholder="Email" v-model="email"/>
    <input type="password" placeholder="Password" v-model="password"/>
    <input type="submit" value="Login" />
    <p>Need an Account? <router-link to="/SignUp">Sign-up</router-link></p>

  </v-form>


</div>
</template>

<script>
import { auth } from '../firebase/firebase'

export default {
 data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    login() {
      auth
          .signInWithEmailAndPassword(this.email, this.password)
         .then(() => {
           this.$router.push('/')
          })
          .catch(err => alert(err.message));
  }
      }}
</script>