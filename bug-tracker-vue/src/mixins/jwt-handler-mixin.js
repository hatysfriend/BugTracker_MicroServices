import jwtserializer from '../scripts/jwt-serializer';

export default {
  data() {
    return {
      jwt: undefined
    };
  },
  computed: {
    jwtData() {
      if (this.jwt) {
        const data = JSON.parse(atob(this.jwt.split('.')[1]));
        return data;
      }
      return {};
    }
  },
  async created() {
    await this.fetchJWT();
  },
  methods: {
    async fetchJWT() {
      const jwt = jwtserializer.getJwt();
      const result = await this.checkAccessTokenIsExpired(jwt);
      console.log(result);
      if (result) {
        console.log('Ariivatus!');
        this.jwt = result.accessToken;
      } else {
        this.jwt = jwt;
        console.log(jwt);
        console.log(this.jwt);
      }
    },
    async getRefreshToken() {
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
      return dataReturn;
    },
    async checkAccessTokenIsExpired(jwt) {
      const data = JSON.parse(atob(jwt.split('.')[1]));
      const expiryTime = new Date(data.exp * 1000);
      const currentTime = new Date();
      console.log(`expiry TIme: ${expiryTime}  Current Time: ${currentTime}`);
      console.log((expiryTime - currentTime));
      if ((expiryTime - currentTime) < 60000) {
        await this.getRefreshToken();
      }
    }
  }
};
