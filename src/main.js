// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
// import cssVars from 'css-vars-ponyfill'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import store from './store/store'
import Axios from 'axios'


// import Vue from 'vue';
window.Vue = Vue;

import vueResource from 'vue-resource'




Vue.prototype.$http = Axios;

const token = sessionStorage.getItem('token')


// console.log("SESSION TOKEN",sessionStorage.getItem('token'))
// if (token) {
//     console.log("SESSION TOKEN2",sessionStorage.getItem('token'))
//     Vue.prototype.$http.defaults.headers.common['Authorization'] = "Token " + token
//
//     Vue.prototype.$http.defaults.headers.common['Accept'] = "application/json"
// }

Vue.config.productionTip = false


Vue.use(vueResource)

// todo
// cssVars()

Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
    store,
    template: '<App/>',
  components: {
    App
  }
})
