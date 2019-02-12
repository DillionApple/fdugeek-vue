// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';
Vue.use(ElementUI)

import store from './store'

import VueTimeago from 'vue-timeago'

Vue.use(VueTimeago, {
  name: 'Timeago',
  locale: 'zh-CN',
  locales: {
    'zh-CN': require('date-fns/locale/zh_cn'),
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
