/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import AuthService from '../services/auth.service';
import jwtserializer from '../scripts/jwt-serializer';

const user = jwtserializer.getJwt();

const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

const auth = {
  namespaced: false,
  state: initialState,
  actions: {
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
    logout({ commit }) {
      AuthService.logout();
      commit('logout');
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
    }
  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
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
};

export default auth;
