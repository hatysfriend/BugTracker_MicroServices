import store from '../store/index';

export default async function authHeader() {
  return store.dispatch('getToken')
    .then((token) => {
      console.log(`Token header service${token}`);
      return { Authorization: `Bearer ${token}` };
    })
    .catch(() => {
      console.log('Error in header');
      return {};
    });
}
