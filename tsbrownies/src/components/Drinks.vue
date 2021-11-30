<template>
  <v-container>
    <v-toolbar color="#EEEEEE" flat>
      <v-toolbar-title>Drinks</v-toolbar-title><v-spacer></v-spacer>
      <v-span color="grey">Results</v-span>
    </v-toolbar>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card flat class="rounded-lg mx-5">
          <v-list-item-avatar rounded size="120" color="grey lighten-4">
<!--            <v-img src=""></v-img>-->
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-h5">
<!--              {{item.name}}-->
            </v-list-item-title>
            <v-list-item-subtitle class="mt-1">Description</v-list-item-subtitle>
            <strong class="mt-3">Price</strong>
            <v-btn class="btn" v-on:click="addToCart(item)">Add</v-btn>
          </v-list-item-content>
          <v-card-actions>
            <v-row>
              <v-col cols="12" sm="6" class="mt-1">
                <strong class="ml-3">Type</strong><br>
                <v-container>
                  <v-row>
                    <v-col cols="12" md="4">
                      <v-item v-slot="{active, toggle}">
                        <v-card color="#F6EFEF"
                                :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle"
                                dark height="50" width="50" @click="toggle" flat>
                          <v-list-item class="text-center">
                            <v-list-item-content>
                              <v-icon dark color="orange">fas fa-fire</v-icon>
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
                              <v-icon dark color="blue">fab fa-modx</v-icon>
                            </v-list-item-content>
                          </v-list-item>
                        </v-card>
                      </v-item>
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
                        <v-item v-slot="{active, toggle}">
                          <v-card color="#f6efef" :class="active ? 'borderme' : ''"
                                  class="d-flex align-center rounded-circle"
                                  height="50" width="50" @click="toggle" flat>
                            <v-list-item class="text-center">
                              <strong class="font-weight-black">S</strong>
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
                              <strong class="font-weight-black">M</strong>
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
                              <strong class="font-weight-black">L</strong>
                            </v-list-item>
                          </v-card>
                        </v-item>
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
                      <v-item v-slot="{active, toggle}">
                        <v-card color="#F6EFEF"
                                :class="active ? 'borderme' : ''" class="d-flex align-center rounded-circle"
                                dark height="50" width="50" @click="toggle" flat>
                          <v-list-item class="text-center">
                            <v-list-item-content>
                              <v-icon dark color="red">fas fa-check</v-icon>
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
                              <v-icon dark color="black">fas fa-ban</v-icon>
                            </v-list-item-content>
                          </v-list-item>
                        </v-card>
                      </v-item>
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
                        <v-item v-slot="{active, toggle}">
                          <v-card color="#f6efef" :class="active ? 'borderme' : ''"
                                  class="d-flex align-center rounded-circle"
                                  height="50" width="50" @click="toggle" flat>
                            <v-list-item class="text-center">
                              <strong class="font-weight-black">S</strong>
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
                              <strong class="font-weight-black">M</strong>
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
                              <strong class="font-weight-black">L</strong>
                            </v-list-item>
                          </v-card>
                        </v-item>
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
  data() {
    return {
      name: [],
      type: ['cold', 'hot'],
      price: [],
      size: ['s', 'm', 'l'],
      extras: []
    }
  },
}
</script>

<style scoped>

</style>