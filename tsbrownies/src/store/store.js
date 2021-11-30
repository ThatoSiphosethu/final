import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

function updateLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
}

export default new Vuex.Store ({
    state: {
        cart: []
    },
    getters: {
        cartQty: state => {
            return state.cart.length
        },
        cartItems: state => {
            return state.cart
        },
        cartTotal: state => {
            return state.cart.reduce((a, b) => a + (b.price * b.quantity), 0)
        },
    },
    mutations: {
        addToCart (state, product) {
            let item = state.cart.find(i => i.id === product.id)

            if(item) {
                item.quantity++
            } else {
                state.cart.push({...product, quantity: 1})
            }
            updateLocalStorage(state.cart)
        },
        removeFromCart(state, product) {
            let item = state.cart.find(i => i.id === product.id)

            if (item) {
                if (item.quantity > 1) {
                    item.quantity--
                } else {
                    state.cart = state.cart.filter(i => i.id !== product.id)
                }
            }
            updateLocalStorage(state.cart)
        },
        updateCartFromLocalStorage (state) {

            return state.cart

        }
    }
})