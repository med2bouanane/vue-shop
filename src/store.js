import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import products from './modules/products'
import carts from './modules/carts'

export default new Vuex.Store({
  state: {
  },
  modules: {
    products,
    carts
  }
})
