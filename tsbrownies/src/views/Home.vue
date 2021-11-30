<template>
<div>
  <h1>Welcome {{name}} to TS' BROWNIES</h1>
  <router-link to="/Home"></router-link>


</div>
</template>

<script>
import {ref, onBeforeMount} from 'vue'
import firebase from "firebase";

export default {
    name: 'Home',
    setup() {
      const name = ref("");
      onBeforeMount(() => {
        const user = firebase.auth().currentUser;
        if (user) {
          name.value = user.email.split('@')[0];
        }
      });
      return {
        name
      }
    },
    // props: {
    //   authUser: Object,
    // },
    components: {


    },
  }
</script>

<style>
.v-card.borderme {
  border: 2px solid #704232;
}
.v-card.borderout {
  border: 1px solid #BCAAA4;
}


</style>
