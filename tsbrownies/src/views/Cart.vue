<template>
  <div>
      <cart-item
			:shoppingCart="shoppingCart"				
		></cart-item>
  </div>
</template>

<script>
import CartItem from '../components/CartItem.vue'

export default {
    name: 'Cart',
	components: {  CartItem},
    
	props: {
		shoppingCart: Array,
		addProductMethod: Function,
	},
}
</script>

<style>

</style>