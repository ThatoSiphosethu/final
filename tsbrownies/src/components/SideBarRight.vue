<template>

  <v-navigation-drawer permanent app color="white" right width="290">
    <v-list subheader two-line class="mt-1">
      <v-list-item>
        <v-list-item-avatar rounded>
          <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-subtitle>Thato's Dashboard</v-list-item-subtitle>
         <!-- <v-list-item-title>Something</v-list-item-title> -->
        </v-list-item-content>
        <v-list-item-action>
          <v-badge bordered overlap color="red" dot>
            <v-icon>fas fa-shopping-cart</v-icon>
          </v-badge>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <strong class="ml-1">Cart</strong>
    <v-list subheader two-line class="mt-1">
      <v-list-item>
        <v-list-item-avatar rounded color="grey lighten-4">
          <v-img src="favicon.ico"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="subtitle-2">{{item.name}}</v-list-item-title>
          <v-list-item-subtitle>X1
            <!-- <v-btn plain color="#704232" small>Notes
              <v-icon right>mdi-pencil</v-icon>
            </v-btn> -->
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action class="caption">{{item.price}}</v-list-item-action>
      </v-list-item>
    </v-list>
    <!-- <v-list subheader two-line class="mt-1">
      <v-list-item>
        <v-list-item-avatar rounded color="grey lighten-4">
          <v-img src="favicon.ico"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="subtitle-2">Box of 9</v-list-item-title>
          <v-list-item-subtitle>X1
            <v-btn plain color="#704232" small>Notes
              <v-icon right>mdi-pencil</v-icon>
            </v-btn>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action class="caption">$10.99</v-list-item-action>
      </v-list-item>
    </v-list> -->
    <!-- <v-list subheader two-line class="mt-1">
      <v-list-item>
        <v-list-item-avatar rounded color="grey lighten-4">
          <v-img src="favicon.ico"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="subtitle-2">{{item.name}}</v-list-item-title>
          <v-list-item-subtitle>X1
            <v-btn plain color="#704232" small>Notes
              <v-icon right>mdi-pencil</v-icon>
            </v-btn>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action class="caption">$20.99</v-list-item-action>
      </v-list-item>
    </v-list> -->
    <v-toolbar color="rgba(0,0,0,0)" flat>
      <strong>Subtotal</strong><v-spacer></v-spacer><strong>$</strong>
    </v-toolbar>
    <v-toolbar color="rgba(0,0,0,0)" flat class="mt-n6">
      <span>Tax(10%)</span><v-spacer></v-spacer><span>$</span>
    </v-toolbar>
    <v-divider class="mx-4"></v-divider>
    <v-toolbar color="rgba(0,0,0,0)" flat>
      <strong>Total</strong><v-spacer></v-spacer><strong>$</strong>
    </v-toolbar>
    <strong class="ml-5">Payment Method</strong>
    <v-item-group mandatory class="mt-n1">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="4">
            <v-item v-slot="{active, toggle}">
              <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-lg"
              dark height="70" @click="toggle" flat>
                <v-col cols="12" md="12">
                  <v-list-item three-line class="text-center mt-1">
                    <v-list-item-content>
                      <div>
                        <v-icon :color="active ? '#704232' : 'black'">fab fa-apple-pay</v-icon>
                      </div>
                      <v-list-item-subtitle
                        :class="active ? 'brown--text' : 'black--text'" class="mt-n2 caption">PayPal</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-card>
            </v-item>
          </v-col>
          <v-col cols="12" md="4">
            <v-item v-slot="{active, toggle}">
              <v-card color="#F6EFEF" :class="active ? 'borderme' : ''" class="d-flex align-center rounded-lg"
                      dark height="70" @click="toggle" flat>
                <v-col cols="12" md="12">
                  <v-list-item three-line class="text-center mt-1">
                    <v-list-item-content>
                      <div>
                        <v-icon :color="active ? '#704232' : 'black'">fas fa-credit-card</v-icon>
                      </div>
                      <v-list-item-subtitle
                          :class="active ? 'brown--text' : 'black--text'" class="mt-n2 caption">Debit/Credit Card</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
    <div class="mx-3 mt-2">
      <v-btn color="#704232" block dark class="widthoutuppercase">Proceed</v-btn>
    </div>
  </v-navigation-drawer>
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
   
  },

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