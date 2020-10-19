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
  created() {
    this.fetchJWT();
  },
  methods: {
    fetchJWT() {
      this.jwt = jwtserializer.getJwt();
    }
  }
};
