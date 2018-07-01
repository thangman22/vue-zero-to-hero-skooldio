import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// import userStore from './userStore.js'
// import cartStore from './cartStore.js'

// export default new Vuex.Store({
//   modules:{
//     userStore,
//     cartStore
//   }
// })

export default new Vuex.Store({
  state: {
    cart:[],
    totalPrice: 0,
    userName: 'Warat'
  },
  mutations: {
    addCart(state, product) {
      state.cart.push(product)
    },
    calculateTotalPrice(state) {

      let totalPrice = 0

      for (let product of state.cart) {
        totalPrice = totalPrice + product.price
      }

      state.totalPrice = totalPrice
    }
  },
  actions: {
    addToCart (context, product) {
      context.commit('addCart', product)
      context.commit('calculateTotalPrice')
    }
  },
  getters: {
    cart: (state) => {
      return state.cart
    },
    totalPrice: (state) => {
      return state.totalPrice
    }, 
    userName: (state) => {
      return state.userName
    }
  }
})
