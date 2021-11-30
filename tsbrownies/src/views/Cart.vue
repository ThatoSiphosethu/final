<template>
  <div class="cart">
    <h1>Cart Summary</h1>

    <CartItemCard
      v-for="product in products"
      :key="product.id"
     :product="product" />

    <!-- <CartSummaryCard
    /> -->



  </div>
</template>

<script>

import CartItemCard from '../components/cart/CartItemCard.vue'
// import CartSummaryCard from '../components/cart/CartSummaryCard.vue'

export default {
  name: 'Cart',
  components: {
    CartItemCard,
    // CartSummaryCard
  },
  computed: {
    products() {
      // console.log(this.$store.getters.cartItems)
    //   return this.$store.getters.cartItems
    return {}
    }
  }
}
</script>
