import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../Login.vue';
import LoginForm from '../components/LoginForm.vue';
import RegisterForm from '../components/RegisterForm.vue';
import Main from '../Main.vue';
import authCheck from './middleware';
import store from '../scripts/store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/main',
    name: 'main',
    component: Main,
    meta: {
      middleware: authCheck
    }
  },
  {
    path: '/',
    component: Login,
    children: [{
      path: '/register', name: 'registerForm', component: RegisterForm, props: true
    },
    {
      path: '/', name: 'loginForm', component: LoginForm, props: true
    },
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }

  const { middleware } = to.meta;

  const context = {
    to, from, next, store
  };

  return middleware({
    ...context
  });
});

export default router;
