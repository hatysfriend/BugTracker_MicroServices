import Vue from 'vue';
import Vuex from 'vuex';

// this is vuex thomas i set it up
// Berry Nice
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false
    }
  },
  getters: {
    auth(state) {
      return state.user;
    }
  }
});
