import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const homeModule = {
  namespaced: true,
  state: {
    characters: ['L', 'U', 'F', 'Y'],
    flowImages: [
      ['./images/home-5.jpg', './images/home-4.jpg', './images/home-7.jpg', './images/home-10.jpg'], 
      ['./images/home-2.jpg', './images/home-1.jpg', './images/home-8.jpg'],
      ['./images/home-3.jpg', './images/home-6.jpg', './images/home-9.jpg', './images/home-11.jpg'],
    ]
  }, 
  getters: {
  }
}

export default new Vuex.Store({
  modules: {
    home: homeModule,
  }
})
