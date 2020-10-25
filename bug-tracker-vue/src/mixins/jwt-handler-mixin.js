import store from '../store/index';

export default {
  computed: {
    jwtData() {
      console.log(store.state.user);
      const jwt = store.state.user;
      if (jwt) {
        const data = JSON.parse(atob(jwt.split('.')[1]));
        return data;
      }
      return {};
    }
  },
};
