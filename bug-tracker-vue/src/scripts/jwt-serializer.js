const tokenKey = 'accessToken';
const refreshKey = 'refreshToken';

export default {
  storeJwt: (jwt) => {
    localStorage.setItem(tokenKey, jwt);
  },
  storeRefresh: (jwt) => {
    localStorage.setItem(refreshKey, jwt);
  },
  getJwt: () => {
    return localStorage.getItem(tokenKey);
  },
  getRefresh: () => {
    return localStorage.getItem(refreshKey);
  }
};
