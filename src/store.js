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

const getters = {
  get_contact_methods_string: state => {
    var ret = ""
    if (state.user_info.mobile_phone) {
      ret = ret + "手机：" + state.user_info.mobile_phone + "\n"
    }
    if (state.user_info.wechat) {
      ret = ret + "微信：" + state.user_info.wechat + "\n"
    }
    if (state.user_info.qq) {
      ret = ret + "QQ：" + state.user_info.qq + "\n"
    }
    return ret
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
