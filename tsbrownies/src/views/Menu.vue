<template>
<div>
  <h1>Menu View</h1>
  
  <menu-comp 
    @add-product="addProduct" 
    :shopping-cart="shoppingCart" >
  </menu-comp>
</div>
</template>

<script>
import MenuComp from "../components/MenuComp.vue"


export default {
  name: "Menu",

  components: {

    MenuComp,
    
  },

  props: {    
    shoppingCart: Array,
  },

  methods: {
      addProduct: function(item){
        this.$emit('add-product', item)
      }
  }
}
</script>

<style scoped>

</style>