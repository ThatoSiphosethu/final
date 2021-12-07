<template>
  <div id="app">

      <v-app :style="{background: $vuetify.theme.themes.dark.background}">
        <SideBar :auth-user="authUser"/>
        <v-container>
          <v-main>
          <router-view :auth-user="authUser" @add-product="addProduct" :shopping-cart="shoppingCart"/>
    </v-main>
        </v-container>
        
      </v-app>



  </div>
</template>

<script>

// import {useRouter} from 'vue-router';
// import firebase from "firebase";
import SideBar from "./components/SideBar";


// import { auth } from './firebase/firebase'


export default {
  name: 'App',

  data(){
    return {
      authUser : {},
      
      shoppingCart: [] // this will contain all the item from the store
    }
  },
  
   mounted: function () {
		if (localStorage.getItem('cartList')) {
			this.cartList = JSON.parse(localStorage.getItem('cartList'))
		}
	},
	watch: {
		cartList: {
			handler(newList) {
				localStorage.setItem('cartList', JSON.stringify(newList))
			},
			deep: true,
		},
	},

  methods: {
    addProduct(item){
      this.shoppingCart.push(item)
    }
  },


  components: {
    SideBar,
   
  },

};
</script>
