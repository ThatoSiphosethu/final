<template>
  <div>     
  <h3>Brownies</h3> 
     <v-row>  
      <v-col cols="12" sm="6">
        <v-card flat class="rounded-lg mx-5">
          <v-list-item three-line>
            <v-list-item-avatar rounded size="120" color="grey lighten-4">
              <v-img src="photo9.jpg"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="text-h5">{{item.name}}</v-list-item-title>
              <v-list-item-subtitle class="mt-1">{{item.flavor}}</v-list-item-subtitle>
              <strong class="mt-3"></strong>
              <strong class="mt-3" >Price: ${{itemPrice}}</strong>
              <v-btn class="btn" @click="addProduct">Add to cart</v-btn>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-row>
              <v-col cols="12" sm="6" class="mt-1">
                <strong class="ml-3">Topping</strong><br>
                <v-item-group name='thing' mandatory class="mt-n1">
                  <v-row>
                    <v-col cols="12" md="4">
                      <v-btn fab small @click="toppings">
                              <v-icon dark color="orange">fas fa-ice-cream</v-icon>
                      </v-btn>
                    </v-col>
                    

                    <v-col cols="12" md="4">
                      <v-btn fab small @click="toppings">
                              <v-icon dark color="orange">fas fa-candy-cane</v-icon>
                      </v-btn>
                    </v-col>
 
                    <v-col cols="12" md="4">
                      <v-btn fab small @click="toppings">
                              <v-icon dark color="orange">fas fa-grin-hearts</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-item-group>
              </v-col>
              <v-col cols="12" sm="6" class="mt-1">
              </v-col>
            </v-row>
            <v-col cols="12" sm="6" class="mt-1">
              <strong class="ml-2">Quantity</strong>
              <v-item-group mandatory class="mt-n1">
                <v-container>

                  <v-row>
                    <v-col cols="12" sm="4">
                      <v-col cols="12" md="4">
                      <v-btn fab small @click="small">
                        <strong class="font-weight-black">6</strong>
                      </v-btn>
                    </v-col>
                    </v-col>

                    <v-col cols="12" sm="4">
                      <v-col cols="12" md="4">
                      <v-btn fab small @click="medium">
                        <strong class="font-weight-black">9</strong>
                      </v-btn>
                    </v-col>
                    </v-col>

                    <v-col cols="12" sm="4">
                      <v-col cols="12" md="4">
                      <v-btn fab small @click="large">
                        <strong class="font-weight-black">12</strong>
                      </v-btn>
                    </v-col>
                    </v-col>
                  </v-row>
                </v-container>
              </v-item-group>
            </v-col>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row> 
  </div>
</template>

<script>
export default {
    name: "Brownies",
    props: {
        item: Object,      
    },
    
  data() {
    return {
      itemPrice: this.price,
       }
  },
  methods: {
     addProduct: function(){
       this.$emit('add-product', this.item)
     },
    small() {
      this.itemPrice = this.item.price ;
    },
    medium() {
      this.itemPrice = this.item.price + 6;
    },
    large() {
      this.itemPrice = this.item.price + 8;
    },
    toppings() {
      this.itemPrice += 1;
    }
  },
  
    
}
</script>

<style>

</style>