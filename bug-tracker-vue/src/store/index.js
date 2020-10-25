/* eslint-disable space-before-function-paren */
/* eslint-disable no-shadow */
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
    login({ commit }, user) {
      return AuthService.login(user)
        .then((user) => {
          commit('loginSuccess', user);
          return Promise.resolve(user);
        })
        .catch((err) => {
          commit('loginFailure');
          return Promise.reject(err);
        });
    },
    register({ commit }, user) {
      return AuthService.register(user)
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
          console.log(`Token In State!${token}`);
          return Promise.resolve(token);
        })
        .catch(() => {
          console.log('login failure!!!!');
          commit('loginFailure');
          // eslint-disable-next-line prefer-promise-reject-errors
          return Promise.reject();
        });
    }
  },
  mutations: {
    updateUser(state, user) {
      jwtserializer.storeJwt(user);
      state.user = user;
    },
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
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
