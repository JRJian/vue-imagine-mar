import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const homeModule = {
  namespaced: true,
  state: {
    characters: ['G', 'E', 'T', 'Z'],
    translateX: [0, -100, 100, 0]
  }, 
  getters: {
  }
}

export default new Vuex.Store({
  modules: {
    home: homeModule,
  }
})
