<template>
  <div class="account-wrapper">
    <div>
      <div>
        <div class="account-header">
          <h3>TS Brownies</h3>
          <small>Awesome cookies and Shakes</small>
        </div>

        <div class="account-tabs">
          <button :class="isActive === 0? 'is-active': ''" @click="isActive = 0">Login</button>
          <button :class="isActive === 1? 'is-active': ''" @click="isActive = 1">Signup</button>
        </div>

        <div class="account-form-wrapper">
          <component :is="compsArr[isActive]" :data="compsData[isActive]" @click="processEvent"></component>
        </div>
        
        <v-container fluid>
          <p>{{ radios || 'null' }}</p>
        <v-radio-group
          v-model="radios"
          mandatory>
        <v-radio
          label="Customer"
          value="radio-1">
        </v-radio>
        <v-radio
          label="Admin"
          value="radio-2">
        </v-radio>
          </v-radio-group>
        </v-container>

      </div>
    </div>
  </div>
</template>

<script>
import LogIn from "./LogIn.vue";
import SignUp from "./SignUp";


export default {
  name: 'Account',
  data() {
    return {
      compsArr: [
        LogIn,
        SignUp,
      ],
      isActive: 0,
      compsData: [
        {
          email: '',
          password: '',
        },
        {
          name: '',
          email: '',
          password: '',
          role: '',
        }
      ]
    }
  },
  // methods: {
  //   processEvent(payload) {
  //     if(payload.eventType === 'signin') {
  //       this.signin()
  //     }else if(payload.eventType === 'signup') {
  //       this.signup()
  //     }
  //   },
  //   signin() {
  //     const { email, password } = this.compsData[this.isActive]
  //
  //     if(!email || !password) {
  //       return this.$alertify.error('Incomplete credentials');
  //     }
  //
  //     this.$axios.post(`${this.$apiUrl}/auth/login`, {
  //       email,
  //       password
  //     })
  //         .then(res => {
  //           const data = res.data
  //
  //           if(data.user.role !== 'admin') {
  //             localStorage.token = JSON.stringify(data.token)
  //             localStorage.user = JSON.stringify(data.user)
  //             this.$store.commit('setUser', data.user)
  //             this.$router.push('/')
  //           }
  //         })
  //         .catch(error => {
  //           this.$alertify.error(error.response.data.message)
  //         })
  //   },
  //   signup() {
  //     let { role, name, email, password } = this.compsData[this.isActive]
  //
  //     if(!email || !password || !role || !name) {
  //       return this.$alertify.error('Incomplete form data');
  //     }
  //
  //     this.$axios.post(`${this.$apiUrl}/auth/register`, {
  //       name,
  //       email,
  //       password,
  //       role
  //     })
  //         .then(res => {
  //           this.compsData[this.isActive] = {
  //             name: '',
  //             email: '',
  //             password: '',
  //             role: '',
  //           }
  //           this.$alertify.success(res.data.message)
  //         })
  //         .catch(error => {
  //           this.$alertify.error(error.response.data.message)
  //         })
  //
  //   }
  // }
}
</script>