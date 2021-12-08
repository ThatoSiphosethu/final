<template>
  <div>
      <v-list-item>
      <v-list-item-content>    
      <p>{{item.name}}</p>
      <p>{{item.price}}</p>
      </v-list-item-content>
      <v-list-item-action class="mx-2">
                    {{item.qty}}
				</v-list-item-action>
      <v-list-item-action>
					<v-btn
						
						color="primary"
						@click="increaseQuantity"
						><v-icon>mdi-plus</v-icon></v-btn
					>
				</v-list-item-action> 
       <v-list-item-action>
					<v-btn
					
						color="red darken-2"
						@click="decreaseQuantity"
						>
						<v-icon>mdi-minus</v-icon></v-btn
					>
				</v-list-item-action>         

      <v-list-item-action>
          
      <v-icon color="red darken-3" class="mx-2" fab small 
      @click="deleteProduct">
						mdi-delete
		</v-icon>

      </v-list-item-action>              
      </v-list-item>              
  </div>
</template>

<script>
export default {
    props: {
        item: Object
    }, 
    methods: {
         deleteProduct() {
			this.$emit('delete-product',this.item)
		},

        increaseQuantity() {
			this.item.qty += 1
		},

        decreaseQuantity() {
			if (this.item.qty > 0) this.item.qty -= 1
		},
    }
}
</script>

<style>

</style>