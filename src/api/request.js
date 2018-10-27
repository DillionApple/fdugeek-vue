import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.withCredentials = true
Vue.use(VueAxios, axios)


function request(context, method, url, data, login_redirect, closure) {
  let req;
  if (method == "get") {
    req = context.axios.get(url, {params: data});
  } else if (method == "post") {
    req = context.axios.post(url, data)
  }
  req.then(response => {
    if (response.data.err_code < 0) {

      const h = context.$createElement;

      context.$notify({
        title: '提示',
        message: h('div', {style: 'color: teal'}, '错误信息: ' + response.data.message)
      })
    }
    closure(response.data)
  }, response => {
    if (response.response.data.message == "Login Required" && login_redirect) {
      context.$router.push({name: 'login'})
    }
  })
}

export default request
