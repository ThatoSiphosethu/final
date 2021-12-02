<template>
    <div>
      <h3>Sign-up</h3>
      <v-form @submit.prevent="submit">
        <input type="text" placeholder="Email" v-model="email"/>
        <input type="password" placeholder="Password" v-model="password"/>
        <input type="submit" value="Sign-up" />
        <p>Have an Account? <router-link to="/LogIn">Login Here</router-link></p>

      </v-form>

  </div>
</template>
<script>

import { db, auth } from '../firebase/firebase'


export default {
  name: "SignUp",

  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    submit() {
     auth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(user => {
            return db.collection('users').doc(user.user.uid).set({
                username : this.email
            });
          }).then(() => {
            this.$router.push('/')
          })
          .catch(err => alert(err.message));
  }
    }
      
      
         
    }
    
     
    


</script>