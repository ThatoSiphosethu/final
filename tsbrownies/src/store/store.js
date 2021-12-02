import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store ({
    state: {
        products : [
            {
                id : 1,
                name : '',
                price : '',
                image : '',
                
            }
        ],
        StoreCart: [],
    },
    getters: {
        products: (state) => state.products,
        StoreCart: (state) => state.StoreCart,
    },

    mutations: {
       ADD_Item(state, id) {
        state.StoreCart.push(id);
       },
       REMOVE_Item(state, index) {
        state.StoreCart.splice(index, 1);
        },
    },
    actions: {
        addItem(context, id) {
          context.commit("ADD_Item", id);
        },
    
        removeItem(context, index) {
          context.commit("REMOVE_Item", index);
        },
    },
    modules: {}
});