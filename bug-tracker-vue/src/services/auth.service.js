/* eslint-disable class-methods-use-this */
import axios from 'axios';
import jwtserializer from '../scripts/jwt-serializer';

class AuthService {
  login(user) {
    return axios
      .post('http://localhost:3002/auth/login', {
        username: user.username,
        password: user.password
      })
      .then((res) => {
        if (res.data.accessToken) {
          jwtserializer.storeJwt(res.data.accessToken);
          jwtserializer.storeRefresh(res.data.refreshToken);
        }
        return res.data.accessToken;
      });
  }

  register(user) {
    return axios
      .post('http://localhost:3002/auth/register', {
        username: user.username,
        password: user.password,
      });
  }

  logout() {
    return fetch('http://localhost:3002/auth/logout', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: jwtserializer.getRefresh()
      }),
    })
      .then(() => {
        jwtserializer.removeData();
      });
  }
}

export default new AuthService();
