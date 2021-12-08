<template>
<div>
  <h1>Welcome to TS' Brownies and Coffee Shop</h1>
  <router-link to="/Home"></router-link>
  <v-spacer></v-spacer>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>


</div>
</template>

<script>


export default {
    name: 'Home',
   
    components: {


    },

    data () {
      return {
        items: [
          {
            src: 'photo9.jpg',
          },
          {
            src: 'photo6.jpg',
          },
          {
            src: 'thumb3.jpg',
          },
          {
            src: 'thumb7.jpg',
          },
           {
            src: 'img3.jpg',
          },
           {
            src: 'img5.jpg',
          },
        ],
      }
    },

  }
</script>

<style>
.v-card.borderme {
  border: 2px solid #704232;
}
.v-card.borderout {
  border: 1px solid #BCAAA4;
}


</style>
