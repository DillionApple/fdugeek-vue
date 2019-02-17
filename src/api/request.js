import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.withCredentials = true
Vue.use(VueAxios, axios)


function request(context, method, url, data, login_redirect, closure) {
  let req;
  context.axios.defaults.withCredentials = true
  context.loading = true
  if (method == "get") {
    req = context.axios.get(url, {params: data});
  } else if (method == "post") {
    req = context.axios.post(url, data)
  }
  req.then(response => {
    if (response.data.err_code < 0) {

      context.$message({
        message: "错误信息：" + response.data.message,
        type: "error",
        duration: 1000,
      })
    } else if (response.data.err_code == 0 && method == 'post') {
      context.$message({
        message: "提交成功",
        type: "success",
        duration: 1000,
      })
    }
    closure(response.data)
    context.loading = false
  }, response => {
    context.loading = false
    if (response.response.data.message == "Login Required" && login_redirect) {
      context.$router.push({name: 'login'})
      return
    }
    context.$message({
      message: "服务器错误",
      type: "error",
      duration: 1000,
    })
  })
}

export default request
