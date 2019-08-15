import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Teams from '../services/teams'
import Users from '../services/users'
import Personal from '../services/personal'


Vue.config.productionTip = false

Vue.prototype.$teams = Teams
Vue.prototype.$users = Users
Vue.prototype.$personal = Personal


new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
