// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import routes from './router'
import Calendar from './components/calendar'
import DatePicker from './components/date-picker'
Vue.use(Router)
Vue.use(Calendar)
Vue.use(DatePicker)
Vue.config.productionTip = false
const router = new Router({
	routes
})
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
