<template>

  <div></div>
</template>

<script>

// import { CartItem } from "../components/CartItem.vue";

export default {
  name: "SideBarRight",

  components: {},
  data () {
    return {

    }
  },
 
  props: {
    item: Object,
    cartPrice: null
   
  },

  methods:{ 
    deleteItem() {
			this.removeProductMethod(this.item)
		},
    subTotal() {
      // return this.cartPrice = this.item.price
    },

    tax() {
      // return this.cartPrice = this.subTotal * 0.10;
    },

    total() {

    }
  }

}
</script>

<style >
.v-card.borderme {
  border: 2px solid brown;
}
.col-12 {
  padding: 5px;
}
.v-btn.widthoutuppercase {
  text-transform: none;
}

</style>