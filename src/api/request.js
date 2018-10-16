import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.withCredentials = true
Vue.use(VueAxios, axios)


function request(context, method, url, data, closure) {
  let req;
  if (method == "get") {
    req = context.axios.get(url);
  } else if (method == "post") {
    req = context.axios.post(url, data)
  }
  req.then(response => {
    if (response.data.err_code < 0) {
      if (response.data.message == "Login Required") {
        context.$router.push({name: 'login'})
        return ret
      }
      const h = context.$createElement;

      context.$notify({
        title: '标题名称',
        message: h('e', {style: 'color: teal'}, '出错了，错误信息: ' + response.data.message)
      })
    }
    closure(response.data)
  })
}

export default request
