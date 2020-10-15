import Vue from 'vue';
import App from './App.vue';
import VueDragula from 'vue-dragula';
import VueRouter from 'vue-router';
import './assets/styles/main.scss'

import Login from './Login.vue'
import LoginForm from './components/LoginForm.vue';
import RegisterForm from './components/RegisterForm.vue';
import Main from './Main.vue';

Vue.use(VueDragula);
Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  {path: '/main', name: 'main', component: Main},
  {path: '/', component: Login, children: [
    {path: '/register', component: RegisterForm},
    {path: '/login', component: LoginForm}
  ]},
]

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
