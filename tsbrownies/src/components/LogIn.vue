<template>
<div>
  <h3>Log-In</h3>
  <v-form @submit.prevent="LogIn">
    <input type="text" placeholder="Email" v-model="email"/>
    <input type="password" placeholder="Password" v-model="password"/>
    <input type="submit" value="Login"/>
    <p>Need an Account? <router-link to="/SignUp">Sign-up</router-link></p>

  </v-form>


</div>
</template>

<script>
import {ref} from 'vue';
import firebase from "firebase";
export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const Login = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then()
        .catch(err => alert(err.message));
    }
    return {
      Login,
      email,
      password
    }
  }
  }
</script>