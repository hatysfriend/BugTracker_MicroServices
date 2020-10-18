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
      <button value="Register" class="button is-primary is-fullwidth mt-5 mb-5" @click="register">Register</button>
      <router-link :to="{name: 'LoginForm', params: {isAnimated: false}}">
        <a @click="emitAnimationData" class="hover-light">Already have an account?</a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterFormComponent',
  props: {
    isAnimated: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      user: {
        username: undefined,
        password: undefined
      }
    };
  },
  methods: {
    resetForm() {
      this.user.username = undefined;
      this.user.password = undefined;
    },
    resetMessage() {
      this.$emit('error', '');
    },
    setMessage(message) {
      this.$emit('error', message);
    },
    emitAnimationData() {
      this.$emit('animate', this.isAnimated);
    },
    async register() {
      fetch('http://localhost:3002/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: this.user.username,
          password: this.user.password,
        }),
      })
        .then((res) => {
          res.json().then((data) => {
          // Route From Here
            console.log(data);
            this.resetForm();
          });
        })
        .catch((err) => {
          this.resetForm();
          console.log(JSON.stringify(err));
        // if(err.errMsg)
        // this.setMessage(err.errMsg);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
