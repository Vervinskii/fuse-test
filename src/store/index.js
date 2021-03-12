import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      homes: [],
    }
  },
  mutations: {
    getHome(state, newHomes) {
      state.homes = newHomes
    },
  },
  actions: {
    async getHomes(context) {
      await fetch(`https://603e38c548171b0017b2ecf7.mockapi.io/homes`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          context.commit("getHome", data);
          console.log(data)
        })
    },
  },
  modules: {}
})