<template>
  <v-container>
		<h1>Checkout</h1>
		<v-list>
			<side-bar-right
				:item="item"
				v-for="item in shoppingCart"
				:key="item.name"
				
			></side-bar-right>
		</v-list>
	</v-container>
</template>

<script>
import SideBarRight from './SideBarRight.vue'
// import SideBarRight from '../components/SideBarRight.vue'
export default {
    name: 'CartItem',
    components: {SideBarRight  },

    props: {
       shoppingCart: Array, 
    }
}
</script>

<style>

</style>