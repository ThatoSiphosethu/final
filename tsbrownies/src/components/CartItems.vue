<template>
  <v-container>
		<h1>Checkout</h1>
		<v-list-item-avatar rounded>
          <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
        </v-list-item-avatar>
		<v-list-item-subtitle>Thato's Dashboard</v-list-item-subtitle>
		<v-list>
			<cart-item
				:item="item"
				v-for="item in shoppingCart"
				:key="item.name"
				@delete-product="deleteProduct"
			></cart-item>
			<v-divider></v-divider>
			<p>Subtotal </p>
			<p>Sales taxes</p>
			<h3>Total</h3>
		</v-list>
		<v-col cols="12" md="4">
            <v-item v-slot="{active, toggle}">
              <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-lg"
                      dark height="70" @click="toggle" flat>
                <v-col cols="12" md="12">
                  <v-list-item three-line class="text-center mt-1">
                    <v-list-item-content>
                      <div>
                        <v-icon :color="active ? '#704232' : 'black'">fas fa-credit-card</v-icon>
                      </div>
                      <v-list-item-subtitle
                          :class="active ? 'brown--text' : 'black--text'" class="mt-n2 caption">Debit/Credit Card</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-card>
            </v-item>
          </v-col><v-btn color="#704232" block dark class="widthoutuppercase">Proceed</v-btn>
	</v-container>
</template>

<script>
import CartItem from '../components/CartItem.vue'
// import SideBarRight from './SideBarRight.vue'
// import SideBarRight from '../components/SideBarRight.vue'
export default {
    name: 'CartItems',
    components: {CartItem  },

    data(){
      // cartPrice = null;
    },

    props: {
       shoppingCart: Array,
       
    },

	methods: {
		
		deleteProduct(item) {
			this.$emit('delete-product', item)
		},
		subtotal() {
      // this.cartPrice = this.item.price;
		},
		tax() {
      // this.cartPrice = this.subTotal * 0.10;
    },

    total() {

		},

    checkout() {

    }
	}
}
</script>

<style>

</style>