/* eslint-disable space-before-function-paren */

/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import AuthService from '../services/auth.service';
import jwtserializer from '../scripts/jwt-serializer';
import TokenService from '../services/auth-token.service';

Vue.use(Vuex);

const user = jwtserializer.getJwt();

const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export default new Vuex.Store({
  state: initialState,
  actions: {
    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    },
    login({ commit }, userInput) {
      return AuthService.login(userInput)
        .then((userReturn) => {
          commit('loginSuccess', userReturn);
          return Promise.resolve(userReturn);
        })
        .catch((err) => {
          commit('loginFailure');
          return Promise.reject(err);
        });
    },
    register({ commit }, userInput) {
      return AuthService.register(userInput)
        .then((res) => {
          commit('registerSuccess');
          return Promise.resolve(res);
        })
        .catch((err) => {
          commit('registerFailure');
          return Promise.reject(err);
        });
    },
    getToken({ commit }) {
      return TokenService()
        .then((token) => {
          commit('updateUser', token);
          return Promise.resolve(token);
        })
        .catch((err) => {
          commit('loginFailure');
          return Promise.reject(err);
        });
    }
  },
  mutations: {
    updateUser(state, userInput) {
      jwtserializer.storeJwt(userInput);
      state.user = userInput;
    },
    loginSuccess(state, userInput) {
      state.status.loggedIn = true;
      state.user = userInput;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
      jwtserializer.removeData();
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    }
  }
});
