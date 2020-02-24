import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import login from './login'
// import firebase from './firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  login,
  render: h => h(App)
}).$mount('#app')
