import jwtserializer from '../scripts/jwt-serializer';
import store from '../store/index';

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
  const token = jwtserializer.getRefresh();
  const res = await fetch('http://localhost:3002/auth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      token
    })
  });
  const dataReturn = await res.json();
  return dataReturn.accessToken;
};

export default async function authHeader() {
  let token = jwtserializer.getJwt();
  if (!token) {
    console.log('No Token Found');
    return {};
  }

  const isExpired = await checkAccessTokenIsExpired(token);
  if (isExpired) {
    console.log('Token Was Expired, Now Refreshed');
    token = await getRefreshToken();
    store.commit('updateUser', token);
  }

  console.log(`Looks Ok: ${token}`);
  return { Authorization: `Bearer ${token}` };
}
