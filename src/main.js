import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Modal from './components/Modal.vue';
import About from './components/About.vue';

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Modal },
  { path: '/about', component: About }
]

const router = new VueRouter({
  routes
})

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
