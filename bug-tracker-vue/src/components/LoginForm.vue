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
      <button class="button is-primary is-fullwidth mt-5 mb-5" @click="handleLogin">
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
import authformmixin from '../mixins/auth-form-mixin';

export default {
  name: 'LoginFormComponent',
  mixins: [authformmixin],
  data() {
    return {
      loading: false
    };
  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.$store.dispatch('login', this.user)
        .then(() => {
          this.$router.push({ name: 'main' });
        })
        .catch(() => {
          this.loading = false;
          this.resetForm();
          this.setMessage('Something Went Wrong, Please Try Again');
        });
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
