<template>
  <div>
    <menu-item :item="item" v-for="item in cookies" :key="item.id"></menu-item>
    <drinks/>
  </div>
</template>

<script>
import {db} from '../firebase/firebase.js'
import MenuItem from "./MenuItem";
import Drinks from './Drinks';


export default {
  name: "Menu",
  components: {Drinks, MenuItem, },
  data() {
    return {
      cookies: [],
      drink:[],
    }
  },

  firestore: {
    cookies: db.collection('cookiebox1'),
    drinks: db.collection('drinks')
  },
}






</script>

<style scoped>

</style>