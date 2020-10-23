const tokenKey = 'accessToken';
const refreshKey = 'refreshToken';

export default {
  storeJwt: (jwt) => {
    localStorage.removeItem('accessToken');
    localStorage.setItem(tokenKey, jwt);
  },
  storeRefresh: (jwt) => {
    localStorage.removeItem('refreshToken');
    localStorage.setItem(refreshKey, jwt);
  },
  getJwt: () => {
    return localStorage.getItem(tokenKey);
  },
  getRefresh: () => {
    return localStorage.getItem(refreshKey);
  },
  removeData: () => {
    localStorage.removeItem(tokenKey);
    localStorage.removeItem(refreshKey);
  }
};
