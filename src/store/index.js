import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uname:''
  },
  mutations: {
    getUser(state,uname){
      state.uname=uname
    }
  },
  actions: {
    getUser(ctx,uname){
      ctx.commit('getUser',uname)
    }
  },
  modules: {
  }
})
