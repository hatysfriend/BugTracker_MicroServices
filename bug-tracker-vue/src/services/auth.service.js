/* eslint-disable class-methods-use-this */
import axios from 'axios';
import jwtserializer from '../scripts/jwt-serializer';

const API_URL = 'http://localhost:3002/auth/';

class AuthService {
  login(user) {
    return axios
      .post(`${API_URL}login`, {
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
      .post(`${API_URL}register`, {
        username: user.username,
        password: user.password,
      });
  }

  logout() {
    return axios
      .delete(`${API_URL}logout`, {
        data: {
          token: jwtserializer.getRefresh()
        }
      })
      .then(() => {
        jwtserializer.removeData();
      });
  }
}

export default new AuthService();
