<template>
  <div>
    <menu-item :item="item" v-for="item in cookies" :key="item.id"></menu-item>
    <!-- <menu-item 
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :name="product.name"
      :image="product.image"
      :price="product.price"></menu-item> -->
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
  computed: {
    prooducts() {
      return this.$store.getters.products;
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