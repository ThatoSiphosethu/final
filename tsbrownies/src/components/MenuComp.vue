<template>
  <div>
    <!-- <img :src="item.image"/> -->
    <!-- <menu-item :item="item" v-for="item in cookies" :key="item.id"></menu-item> -->
    <MenuItem />
    <Brownies  
      :item="item" 
      v-for="item in items" 
      :key="item.id" 
      :price="item.price"
      @add-product="addProduct"
      
      />
    <Drinks
  
      v-for="item in coffee" 
      :key="item.id" 
      :name="item.name"
      :price="item.price"
      :type="item.type"
      :size="item.size"
      @add-product="addProduct"
     />



  </div>
</template>

<script>
//import {db} from '../firebase/firebase.js'
import MenuItem from "../components/MenuItem.vue";
import Drinks from "../components/Drinks.vue";
import Brownies from "../components/Brownies.vue";




export default {
  name: "Menu",
  components: {Brownies, MenuItem, Drinks},
data() {
        return {
        items: [
        {id: 3, name : 'Mix Brownies ', qty: 1 , price: 9.99, },
        {id: 4, name : 'Chocolate Brownies ',qty: 1 , price: 9.99 },
        {id: 5, name : 'Vanilla Brownies ',qty: 1 , price: 9.99 },
        ],

      coffee: [
        {id: 10, name: 'Caramel Frappe', type: 'Temperature',size: 's', price: 4.99, extra:'Whip Cream and Toppings'},
        {id: 11, name: 'Caramel Macchiato', type: 'Temperature',size: 's', price: 4.99,extra:'Whip Cream and Toppings'},
        {id: 12, name: 'Mocha Frappe', type: 'Temperature',size: 's', price: 4.99,extra:'Whip Cream and Toppings'},
        {id: 13, name: 'Mocha', type: 'Temperature',size: 's', price: 4.99, extra:'Whip Cream and Toppings'}]
        }
    },

    props: {    
      shoppingCart: Array,
    },

    methods: {
      addProduct: function(item){
        this.$emit('add-product', item)
      },
    },
 

  // firestore: {
  //   //cookies: db.collection('cookiebox1'),
  //   drinks: db.collection('drinks')
  // },
}






</script>

<style scoped>

</style>