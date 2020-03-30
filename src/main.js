import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Modal from './components/Modal.vue';
import About from './components/About.vue';
import List from './components/List.vue';
import Drawer from './components/Drawer.vue';
import Simple from './components/Simple.vue';
import Stagger from './components/Stagger.vue';

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Modal },
  { path: '/about', component: About },
  { path: '/list', component: List },
  { path: '/drawer', component: Drawer },
  { path: '/simple', component: Simple },
  { path: '/stagger', component: Stagger }
]

const router = new VueRouter({
  routes
})

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
