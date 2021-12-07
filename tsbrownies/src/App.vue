<template>
  <div id="app">
      <v-app :style="{background: $vuetify.theme.themes.dark.background}">
        <SideBar :auth-user="authUser"/>
          <v-container>
            <v-main>
                <router-view 
                :auth-user="authUser"
                @add-product="addProduct" 
                @delete-product="deleteProduct"
                :shopping-cart="shoppingCart"
                />
            </v-main>
        </v-container>  
      </v-app>
  </div>
</template>

<script>
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

  //methods = functions, this is available everywhere becuase is at the app level
   methods: {
     
    addProduct(item){
      this.shoppingCart.push(item)
    },

    //global function, this can be use in all the app components
    deleteProduct(item) {
			this.shoppingCart.splice(this.shoppingCart.indexOf(item), 1)
		},
  },
  
  //local storage
   mounted: function () {
		if (localStorage.getItem('shoppingCart')) {
			this.shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'))
		}
	},
	watch: {
		shoppingCart: {
			handler(newList) {
				localStorage.setItem('shoppingCart', JSON.stringify(newList))
			},
			deep: true,
		},
	},

  components: {
    SideBar,
   
  },

};
</script>
