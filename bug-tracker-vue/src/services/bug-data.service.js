/* eslint-disable class-methods-use-this */
import axios from 'axios';
import authHeader from './auth-header.service';

const API_URL = 'http://localhost:3002/bugs/';

class BugService {
  async getAll() {
    return fetch(`${API_URL}getAll`, {
      headers: await authHeader()
    });
  }

  async updateStatus(id, bug) {
    return axios.patch(`${API_URL}update/${id}`, bug, {
      headers: await authHeader()
    });
  }
}

export default new BugService();
