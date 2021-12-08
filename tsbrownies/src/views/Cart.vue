<template>
  <div>
      <cart-items
			:shoppingCart="shoppingCart"
			@delete-product="deleteProduct"				
		></cart-items>
  </div>
</template>

<script>
import CartItems from '../components/CartItems.vue'

export default {
    name: 'Cart',
	components: {  CartItems},
    
	props: {
		shoppingCart: Array,
		// deleteProduct: Function,
	},

	methods: {
		deleteProduct: function(item){
       this.$emit('delete-product', item)
     },
	}
}
</script>

<style>

</style>