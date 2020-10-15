import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../Login.vue';
import LoginForm from '../components/LoginForm.vue';
import RegisterForm from '../components/RegisterForm.vue';
import Main from '../Main.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/main', name: 'main', component: Main },
  {
    path: '/',
    component: Login,
    children: [
      { path: '/register', component: RegisterForm },
      { path: '/login', component: LoginForm }
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
