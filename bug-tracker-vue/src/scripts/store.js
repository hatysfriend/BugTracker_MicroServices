import Vue from 'vue';
import Vuex from 'vuex';

import jwtserializer from './jwt-serializer';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      token: undefined
    }
  },
  getters: {
    auth(state) {
      if (!jwtserializer.getJwt()) {
        console.log('do we get here?');
        // eslint-disable-next-line no-param-reassign
        state.user.loggedIn = false;
      }
      return state.user;
    }
  },
  mutations: {
    setLoggedInStatus(status) {
      this.state.user.loggedIn = status;
    }
  }
});
