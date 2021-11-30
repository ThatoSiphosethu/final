<template>
    <div>
      <h3>Sign-up</h3>
      <v-form @submit.prevent="SignUp">
        <input type="text" placeholder="Email" v-model="email"/>
        <input type="password" placeholder="Password" v-model="password"/>
        <input type="submit" value="Sign-up"/>
        <p>Have an Account? <router-link to="/LogIn">Login Here</router-link></p>

      </v-form>

  </div>
</template>
<script>
import firebase from "firebase";
import {ref} from 'vue';

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const Signin = () => {
      firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value)
          .then(user => {
            alert(user);
          })
          .catch(err => alert(err.message));
    }
    return {
      Signin,
      email,
      password
    }}}


</script>