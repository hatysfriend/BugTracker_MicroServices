import Vue from 'vue';
import { Vue2Dragula } from 'vue2-dragula';
import App from './App.vue';
import store from './scripts/store';

import router from './router/routes';

import './assets/styles/main.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all';

Vue.use(Vue2Dragula);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => {
    return h(App);
  },
}).$mount('#app');
