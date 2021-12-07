<template>
  <div>
    <v-toolbar color="rgba(0,0,0,0)" flat>
      <v-toolbar-title class="mt-n3"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field label="Search category or Menu..." class="mt-5" color="light brown" filled append-icon="mdi-magnify"
                    dense solo flat background-color="grey lighten-4"></v-text-field>
    </v-toolbar>
    <!--                  Menu Choices-->
    <v-item-group mandatory class="mt-n1">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="2">
            <v-item v-slot="{active, toggle}">
              <v-card :color="active ? '#F6EFEF' : 'white'" :class="active ? 'borderme' :'borderout'"
                      class="f-flex align-center rounded-lg mx-2" dark height="140"
                      @click="toggle" flat>
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-list-item three-line class="text-center">
                      <v-list-item-content>
                        <div align="center" justify="center">
                          <router-link to="/all">
                          <v-img src="img5.jpg" max-height="110" max-width="110" contain></v-img>
                          </router-link>
                        </div>
                        <v-list-item-subtitle :class="active ? 'brown--text' : 'black--text'" class="caption mt-4">
                          All Products
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>
                </v-row>
              </v-card>
            </v-item>
          </v-col>

          <v-col cols="12" md="2">
            <v-item v-slot="{active, toggle}">
              <v-card :color="active ? '#F6EFEF' : 'white'" :class="active ? 'borderme' :'borderout'"
                      class="f-flex align-center rounded-lg mx-2" dark height="140"
                      @click="toggle" flat>
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-list-item three-line class="text-center">
                      <v-list-item-content>
                        <div align="center" justify="center">
                          <router-link to="/brownie">
                          <v-img src="photo9.jpg" max-height="110" max-width="110" contain ></v-img>
                          </router-link>
                        </div>
                        <v-list-item-subtitle :class="active ? 'brown--text' : 'black--text'" class="caption mt-4">
                          Brownies
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>
                </v-row>
              </v-card>
            </v-item>
          </v-col>

          <v-col cols="12" md="2">
            <v-item v-slot="{active, toggle}">
              <v-card :color="active ? '#F6EFEF' : 'white'" :class="active ? 'borderme' :'borderout'"
                      class="f-flex align-center rounded-lg mx-2" dark height="140"
                      @click="toggle" flat>
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-list-item three-line class="text-center">
                      <v-list-item-content>
                        <div align="center" justify="center">
                          <router-link to="/drinks">
                          <v-img src="images.jpg" max-height="110" max-width="110" contain></v-img>
                          </router-link>
                        </div>
                        <v-list-item-subtitle :class="active ? 'brown--text' : 'black--text'" class="caption mt-4">
                          Coffee
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>
                </v-row>
<!--                menu choices ends-->
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>

<!--    Menu choice results-->

    <v-toolbar color="#EEEEEE" flat>
      <v-toolbar-title>Menu</v-toolbar-title>
      <v-spacer></v-spacer>
      <span color="grey"></span>
    </v-toolbar>

    
  </div>
</template>

<script>
export  default {
  name: 'MenuItem',

    data() {
      return { 
        
      }
    },

    props: {
      addProduct: Function,
      shoppingCart: Array,
    },
    
  
  methods: {
   

  },
}
</script>

<style>
.btn {
  padding: 50px;
  border-radius: 50px;
  display: flex;
  margin: auto;
}
</style>