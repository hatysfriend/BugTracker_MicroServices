import Vue from 'vue';
import { Vue2Dragula } from 'vue2-dragula';
import App from './App.vue';

import router from './router/routes';

import './assets/styles/main.scss';

Vue.use(Vue2Dragula);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => {
    return h(App);
  },
}).$mount('#app');
