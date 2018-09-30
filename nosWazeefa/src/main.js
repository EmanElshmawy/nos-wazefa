// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

// router setup
import routes from './routes/routes'

// Plugins
import GlobalComponents from './globalComponents'
import GlobalDirectives from './globalDirectives'
import Notifications from './components/NotificationPlugin'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import Vuetify from 'vuetify'
 
// vue material
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.config.productionTip = false
// vuetify
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

// MaterialDashboard plugin
import MaterialDashboard from './material-dashboard'
import Chartist from 'chartist'

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: 'nav-item active'
})
Vue.use(VueMaterial)
Vue.use(BootstrapVue);
Vue.use(VueRouter)
Vue.use(MaterialDashboard)
Vue.use(GlobalComponents)
Vue.use(GlobalDirectives)
Vue.use(Notifications)
Vue.use(Vuetify)
// global library setup
Object.defineProperty(Vue.prototype, '$Chartist', {
  get () {
    return this.$root.Chartist
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  mode: 'history',
  render: h => h(App),
  router,
  data: {
    Chartist: Chartist
  }
})
