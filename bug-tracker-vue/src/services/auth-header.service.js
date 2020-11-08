import store from '../store/index';

export default async function authHeader() {
  return store.dispatch('getToken')
    .then((token) => {
      return { Authorization: `Bearer ${token}` };
    })
    .catch(() => {
      return {};
    });
}
