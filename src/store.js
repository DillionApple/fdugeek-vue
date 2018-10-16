import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  logined: false,
  user_info: {}
}

const mutations = {
  login (state) {
    state.logined = true
  },
  logout (state) {
    state.logined = false
  },
  update_user_info (state, user_info) {
    state.user_info = user_info
  },
  update_user_icon_url (state, user_icon_url) {
    state.user_info.icon = user_icon_url
  }
}

export default new Vuex.Store({
  state,
  mutations
})
