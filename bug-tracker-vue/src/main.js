import Vue from 'vue';
import App from './App.vue';
import VueDragula from 'vue-dragula';
import './assets/styles/main.scss'

Vue.use(VueDragula);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
