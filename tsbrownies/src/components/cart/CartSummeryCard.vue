<template>
  <div class="cart-item-card">
    <h3>Cart Total: ${{cart_total.toFixed(2)}}</h3>

    <button class="view-product-button">Submit Payment</button>
  </div>
</template>

<script>

// import Store from '../../store'

export default {
  name: "CartSummaryCard",
  computed: {
    cart_total() {
      // return Store.getters.cartTotal
    return {}
    }
  }
}
</script>

<style scoped>

</style>