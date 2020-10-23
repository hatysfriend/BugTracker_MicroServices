/* eslint-disable class-methods-use-this */
import authHeader from './auth-header.service';

const API_URL = 'http://localhost:3002/bugs/';

class BugService {
  async getAll() {
    return fetch(`${API_URL}getAll`, {
      headers: await authHeader()
    });
  }
}

export default new BugService();
