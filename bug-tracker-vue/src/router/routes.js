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
    name: 'Login',
    component: Login,
    children: [{
      path: '/register', name: 'RegisterForm', component: RegisterForm, props: true
    },
    {
      path: '/login', name: 'LoginForm', component: LoginForm, props: true
    },
    { path: '/', component: LoginForm }
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
