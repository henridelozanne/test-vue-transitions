import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Modal from './components/Modal.vue';
import About from './components/About.vue';
import List from './components/List.vue';

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Modal },
  { path: '/about', component: About },
  { path: '/list', component: List }
]

const router = new VueRouter({
  routes
})

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
