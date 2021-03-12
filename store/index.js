import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    homePage: {}
  },
  getters: {},
  actions,
  mutations
})

export default store
