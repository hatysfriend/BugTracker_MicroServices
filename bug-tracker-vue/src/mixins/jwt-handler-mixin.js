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
        console.log(data);
        this.checkAccessTokenIsExpired(data);
        return data;
      }
      return {};
    }
  },
  created() {
    this.fetchJWT();
  },
  methods: {
    fetchJWT() {
      this.jwt = jwtserializer.getJwt();
    },
    checkAccessTokenIsExpired(data) {
      const expiryTime = new Date(data.exp * 1000);
      const currentTime = new Date();
      console.log(`expiry TIme: ${expiryTime}  Current Time: ${currentTime}`);
      console.log((expiryTime - currentTime));
      if ((expiryTime - currentTime) < 60000) {
        //
      }
    }
  }
};
