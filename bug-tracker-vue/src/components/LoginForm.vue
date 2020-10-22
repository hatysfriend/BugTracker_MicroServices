<template>
  <div class="login-container">
    <div class="account-form">
      <h3 class="title is-3"><strong>Log in</strong></h3>
      <div class="field mb-4">
        <input
          type="text"
          name="username"
          class="input"
          placeholder="Enter username"
          v-model="user.username"
          @keydown="resetMessage"
        />
      </div>
      <div class="field">
        <input
          type="password"
          name="password"
          class="input"
          placeholder="Enter password"
          v-model="user.password"
          @keydown="resetMessage"
        />
      </div>
      <button class="button is-primary is-fullwidth mt-5 mb-5" @click="login">
        Login
      </button>
      <router-link
        :to="{ name: 'registerForm', params: { isAnimated: false } }"
      >
        <a @click="emitAnimationData" class="hover-light"
          >Dont have an account with us? Register</a
        >
      </router-link>
    </div>
  </div>
</template>

<script>
import jwtserializer from '../scripts/jwt-serializer';
import authformmixin from '../mixins/auth-form-mixin';
import store from '../scripts/store';

export default {
  name: 'LoginFormComponent',
  mixins: [authformmixin],
  methods: {
    async login() {
      fetch('http://localhost:3002/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: this.user.username,
          password: this.user.password,
        }),
      })
        .then((res) => {
          res.json().then((data) => {
            console.log(data);
            this.resetForm();
            jwtserializer.storeJwt(data.accessToken);
            jwtserializer.storeRefresh(data.refreshToken);
            store.commit('setLoggedInStatus', true);
            this.$router.push({ name: 'main' });
          });
        })
        .catch(() => {
          this.resetForm();
          this.setMessage('Something Went Wrong, Try Again!');
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
