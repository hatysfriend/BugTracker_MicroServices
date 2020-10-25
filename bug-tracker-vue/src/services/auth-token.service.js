/* eslint-disable no-shadow */
import axios from 'axios';
import jwtserializer from '../scripts/jwt-serializer';

const checkAccessTokenIsExpired = async (jwt) => {
  const data = JSON.parse(atob(jwt.split('.')[1]));
  const expiryTime = new Date(data.exp * 1000);
  const currentTime = new Date();
  console.log((expiryTime - currentTime));
  if ((expiryTime - currentTime) < 60000) {
    return true;
  }

  return false;
};

const getRefreshToken = async () => {
  return new Promise((resolve, reject) => {
    const token = jwtserializer.getRefresh();
    if (!token) {
      return reject(new Error('No Refresh Token In Local Storage'));
    }

    axios
      .post('http://localhost:3002/auth/token', {
        token
      })
      .then((res) => {
        resolve(res.data.accessToken);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default async function token() {
  const token = jwtserializer.getJwt();

  return new Promise((resolve, reject) => {
    (async () => {
      if (!token) {
        console.log('No Token In Local Storage');
        return reject(new Error('No Token In Local Storage'));
      }

      const isExpired = await checkAccessTokenIsExpired(token);
      if (isExpired) {
        console.log('Token Expired, Attempting Refresh');
        getRefreshToken()
          .then((token) => {
            console.log('Token Refreshed');
            resolve(token);
          })
          .catch((err) => {
            console.log('Token Could Not Be Refreshed');
            reject(err);
          });
      } else {
        console.log(`Token Valid ${token}`);
        resolve(token);
      }
    })();
  });
}
