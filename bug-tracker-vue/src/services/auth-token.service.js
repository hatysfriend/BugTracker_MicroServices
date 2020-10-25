/* eslint-disable no-shadow */
import axios from 'axios';
import jwtserializer from '../scripts/jwt-serializer';

const checkAccessTokenIsExpired = async (jwt) => {
  const data = JSON.parse(atob(jwt.split('.')[1]));
  const expiryTime = new Date(data.exp * 1000);
  const currentTime = new Date();
  console.log(`expiry TIme: ${expiryTime}  Current Time: ${currentTime}`);
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
      return reject();
    }

    axios
      .post('http://localhost:3002/auth/token', {
        token
      })
      .then((res) => {
        resolve(res.data.accessToken);
      })
      .catch((err) => {
        console.log('here??');
        reject(err);
      });
  });
};

export default async function token() {
  const token = jwtserializer.getJwt();

  return new Promise((resolve, reject) => {
    (async () => {
      if (!token) {
        console.log('No Token Found');
        return reject();
      }

      const isExpired = await checkAccessTokenIsExpired(token);
      if (isExpired) {
        console.log('Token Was Expired, Now Attempting Refresh');
        getRefreshToken()
          .then((token) => {
            console.log('Resolved!');
            resolve(token);
          })
          .catch((err) => {
            console.log('Rejected!');
            reject(err);
          });
      } else {
        console.log(`Token Ok!${token}`);
        resolve(token);
      }
    })();
  });
}
