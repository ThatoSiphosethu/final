<template>
  <v-container>
    <v-toolbar color="#EEEEEE" flat>
      <v-toolbar-title>Drinks</v-toolbar-title><v-spacer></v-spacer>
      <!-- <v-span color="grey">Results</v-span> -->
    </v-toolbar>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card flat class="rounded-lg mx-5">
          <v-list-item-avatar rounded size="120" color="grey lighten-4">
           <v-img src="img3.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-h5">
             {{item.name}}
            </v-list-item-title>
            <!-- <v-list-item-subtitle class="mt-1">{{item.name}}</v-list-item-subtitle> -->
            <!-- <strong class="mt-3">{{price}}</strong> -->
            <strong class="mt-3" >Price: ${{itemPrice.toFixed(2)}}</strong>
            <v-btn class="btn" @click="addProduct">Add to cart</v-btn>
          </v-list-item-content>
          <v-card-actions>
            <v-row>
              <v-col cols="12" sm="6" class="mt-1">
                <strong class="ml-3">{{item.type}}</strong><br>
                <v-container>
                  <v-row>

                    <v-col cols="12" md="4">
                      <v-btn fab small>
                        <v-icon dark color="red">fas fa-fire</v-icon>
                      </v-btn>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-btn fab small @click="cold">
                        <v-icon dark color="blue">fab fa-modx</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>

              <v-col cols="12" sm="6" class="mt-1">
                <strong class="ml-2">Size</strong>
                <v-item-group mandatory class="mt-n1">
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="4">
                      <v-col cols="12" md="4">
                      <v-btn fab small  @click="small">
                        <strong class="font-weight-black">S</strong>
                      </v-btn>
                    </v-col>
                    </v-col>

                     <v-col cols="12" sm="4">
                      <v-col cols="12" md="4">
                      <v-btn fab small @click="medium">
                        <strong class="font-weight-black">M</strong>
                      </v-btn>
                    </v-col>
                    </v-col>

                      <v-col cols="12" sm="4">
                      <v-col cols="12" md="4">
                      <v-btn fab small @click="large">
                        <strong class="font-weight-black">L</strong>
                      </v-btn>
                    </v-col>
                    </v-col>
                    </v-row>
                  </v-container>
                </v-item-group>
              </v-col>
            </v-row>
          </v-card-actions>
          <v-card-actions>
            <v-row>
              <v-col cols="12" sm="6" class="mt-1">
                <strong class="ml-3">Whip Cream And Toppings</strong><br>
                <v-container>
                  <v-row>
                    <v-col cols="12" md="4">
                      <v-btn fab small @click="extra">
                        <v-icon dark color="red">fas fa-check</v-icon>
                      </v-btn>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-btn fab small >
                        <v-icon dark color="black">fas fa-ban</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>

              <v-col cols="12" sm="6" class="mt-1">
                <strong class="ml-2">Servings</strong>
                <v-item-group mandatory class="mt-n1">
                  <v-container>
                    <v-row>
                      
                    <v-col cols="12" sm="4">
                      <v-col cols="12" md="4">
                      <v-btn fab small>
                        <strong class="font-weight-black">S</strong>
                      </v-btn>
                    </v-col>
                    </v-col>

                     
                    <v-col cols="12" sm="4">
                      <v-col cols="12" md="4">
                      <v-btn fab small >
                        <strong class="font-weight-black">M</strong>
                      </v-btn>
                    </v-col>
                    </v-col>

                    
                    <v-col cols="12" sm="4">
                      <v-col cols="12" md="4">
                      <v-btn fab small >
                        <strong class="font-weight-black">L</strong>
                      </v-btn>
                    </v-col>
                    </v-col>
                    </v-row>
                  </v-container>
                </v-item-group>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>


export default {
  name: "Drinks",
  props:{
    item: Object,
  },
  data() {
    return {
      itemPrice: this.item.price,
       
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
      this.itemPrice = this.item.price + 2;
    },
    large() {
      this.itemPrice = this.item.price + 4;
    },
    cold() {
      this.itemPrice  += 1.50;
    },
    extra() {
      this.itemPrice += 0.5
    },
  },

 
}
</script>

<style scoped>

</style>