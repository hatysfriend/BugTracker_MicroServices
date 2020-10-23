<template>
  <div class="login-container">
    <div class="account-form">
      <h3 class="title is-3"><strong>Register</strong></h3>
      <div class="field mb-4">
        <input type="text" name="username" class="input" placeholder="Enter username" v-model="user.username" @keydown="resetMessage"/>
      </div>
      <div class="field">
        <input type="password" name="password" class="input" placeholder="Enter password" v-model="user.password" @keydown="resetMessage"/>
      </div>
      <button value="Register" class="button is-primary is-fullwidth mt-5 mb-5" @click="handleRegister">Register</button>
      <router-link :to="{name: 'loginForm', params: { isAnimated: false }}">
        <a @click="emitAnimationData" class="hover-light">Already have an account?</a>
      </router-link>
    </div>
  </div>
</template>

<script>
import authformmixin from '../mixins/auth-form-mixin';

export default {
  name: 'RegisterFormComponent',
  mixins: [authformmixin],
  methods: {
    handleRegister() {
      console.log('Just Once');
      this.$store.dispatch('register', this.user)
        .then(() => {
          this.$router.push({ name: 'loginForm' });
          this.resetForm();
        })
        .catch((err) => {
          console.log(err);
          this.resetForm();
          this.setMessage('That Username Is Already Taken');
        });
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
