<template>
  <div>
    <v-toolbar color="rgba(0,0,0,0)" flat>
      <v-toolbar-title class="mt-n3">{{item.name}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field label="Search category or Menu..." class="mt-5" color="light brown" filled append-icon="mdi-magnify"
                    dense solo flat background-color="grey lighten-4">{{item}}</v-text-field>
    </v-toolbar>
    <v-item-group mandatory class="mt-n1">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="2">
            <v-item v-slot="{active, toggle}">
              <v-card :color="active ? '#F6EFEF' : 'white'" :class="active ? 'borderme' :'borderout'"
                      class="f-flex align-center rounded-lg mx-2" dark height="140"
                      @click="toggle" flat>
                <v-row>
<!--                  Menu Choices-->
                  <v-col cols="12" sm="12">
                    <v-list-item three-line class="text-center">
                      <v-list-item-content>
                        <div align="center" justify="center">
                          <v-img src="combo.jpg" max-height="110" max-width="110" contain></v-img>
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
                          <v-img src="photo9.jpg" max-height="110" max-width="110" contain></v-img>
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
                          <v-img src="coffee.png" max-height="110" max-width="110" contain></v-img>
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
      <v-span color="grey">Results</v-span>
    </v-toolbar>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card flat class="rounded-lg mx-5">
          <v-list-item three-line>
            <v-list-item-avatar rounded size="120" color="grey lighten-4">
              <v-img src="favicon.ico"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="text-h5">{{item.Name}}</v-list-item-title>
              <v-list-item-subtitle class="mt-1">{{item.Flavor}}</v-list-item-subtitle>
              <strong class="mt-3">{{item.Price}}</strong>
              <v-btn class="btn" v-on:click="addToCart(item)">Add</v-btn>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-row>
              <v-col cols="12" sm="6" class="mt-1">
                <strong class="ml-3">Topping</strong><br>
                <v-item-group mandatory class="mt-n1">
                  <v-row>
                    <v-col cols="12" md="4">
                      <v-item v-slot="{active, toggle}">
                        <v-card color="#F6EFEF"
                                :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle"
                                dark height="50" width="50" @click="toggle" flat>
                          <v-list-item class="text-center">
                            <v-list-item-content>
                              <v-icon dark color="orange">fas fa-ice-cream</v-icon>
                            </v-list-item-content>
                          </v-list-item>
                        </v-card>
                      </v-item>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-item v-slot="{active, toggle}">
                        <v-card color="#F6EFEF"
                                :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle"
                                dark height="50" width="50" @click="toggle" flat>
                          <v-list-item class="text-center">
                            <v-list-item-content>
                              <v-icon dark color="orange">fas fa-candy-cane</v-icon>
                            </v-list-item-content>
                          </v-list-item>
                        </v-card>
                      </v-item>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-item v-slot="{active, toggle}">
                        <v-card color="#F6EFEF"
                                :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle"
                                dark height="50" width="50" @click="toggle" flat>
                          <v-list-item class="text-center">
                            <v-list-item-content>
                              <v-icon dark color="orange">fas fa-grin-hearts</v-icon>
                            </v-list-item-content>
                          </v-list-item>
                        </v-card>
                      </v-item>
                    </v-col>
                  </v-row>
                </v-item-group>
              </v-col>
              <v-col cols="12" sm="6" class="mt-1">
              </v-col>
            </v-row>
            <v-col cols="12" sm="6" class="mt-1">
              <strong class="ml-2">Box Size</strong>
              <v-item-group mandatory class="mt-n1">
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="4">
                      <v-item v-slot="{active, toggle}">
                        <v-card color="#f6efef" :class="active ? 'borderme' : ''"
                                class="d-flex align-center rounded-circle"
                                height="50" width="50" @click="toggle" flat>
                          <v-list-item class="text-center">
                            <strong class="font-weight-black">6</strong>
                          </v-list-item>
                        </v-card>
                      </v-item>
                    </v-col>

                    <v-col cols="12" sm="4">
                      <v-item v-slot="{active, toggle}">
                        <v-card color="#f6efef" :class="active ? 'borderme' : ''"
                                class="d-flex align-center rounded-circle"
                                height="50" width="50" @click="toggle" flat>
                          <v-list-item class="text-center">
                            <strong class="font-weight-black">9</strong>
                          </v-list-item>
                        </v-card>
                      </v-item>
                    </v-col>

                    <v-col cols="12" sm="4">
                      <v-item v-slot="{active, toggle}">
                        <v-card color="#f6efef" :class="active ? 'borderme' : ''"
                                class="d-flex align-center rounded-circle"
                                height="50" width="50" @click="toggle" flat>
                          <v-list-item class="text-center">
                            <strong class="font-weight-black">12</strong>
                          </v-list-item>
                        </v-card>
                      </v-item>
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

export  default {
  name: 'MenuItem',

  props: {
    item: {
      type: Object,
    }
  },
  methods: {
    add() {

    },
    // // select(item, value = true, emit = true) {
    // },

  },
  filters: {
    item: function (value) {
      if (!value) return '';
      value = value.item();
      return value.charAt(0).toString() + value.splice(1);
    }
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