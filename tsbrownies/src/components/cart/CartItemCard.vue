<template>
  <div class="cart-item-card">
    <div class="header">
       <!-- <md-button class="md-accent md-raised" @click="showList()" id="show">{{ cartCount }}</md-button> -->
      <div class="md-layout" v-for="(item, index) in cart" :key="index">
       <div class="md-layout-item">{{ item.name }}</div>
       <div class="md-layout-item">
         <img :src="item.image" alt />
       </div>
       <div class="md-layout-item">{{ '$' + item.price }}</div>
       <div class="md-layout-item">
         <md-button class="md-primary" @click="removeItem(index)">Remove Cart</md-button>
       </div>
      </div>

<!-- 
      <h4>In Cart: {{product.quantity}}</h4>
      <h4>Total Cost: {{item_cost.toFixed(2)}}</h4> -->
    </div>


  </div>
</template>

<script>

export default {
 computed: {
    StoreCart() {
      return this.$store.getters.StoreCart;
    },
    cartCount() {
      return this.StoreCart.length;
    },
    cart() {
      return this.$store.getters.StoreCart.map(cartitems => {
        return this.$store.getters.products.find(itemForSale => {
          return cartitems === itemForSale.id;
        });
      });
    }
  },
  methods: {
    removeItem(index) {
      this.$store.dispatch("removeItem", index);
    },
    showList() {
      var modal = document.getElementById("shoppingList");
      var btn = document.getElementById("show");
      btn.onclick = function() {
        modal.style.display = "block";
      };
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    }
  }
}
</script>

<style lang="scss">
  .cart-item-card {
    width: 90px;
    margin: 5%;
    background-color: white;
    box-shadow: 0 0 5px grey;
    border-radius: 5px;
    padding: 10px;
    text-align: left;
  }

  .header {
    display: flex;
    justify-content: space-around;
  }
</style>