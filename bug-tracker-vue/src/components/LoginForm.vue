<template>
  <div class="login-container">
    <div class="account-form">
      <h3 class="title is-3"><strong>Log in to Bugtrace</strong></h3>
      <div class="field mb-4">
        <input type="text" name="username" class="input"
          placeholder="Enter username" v-model="user.username" @keydown="resetMessage" />
      </div>
      <div class="field">
        <input type="password" name="password" class="input" placeholder="Enter password" v-model="user.password" @keydown="resetMessage" />
      </div>
      <button class="button is-primary is-fullwidth mt-5" @click="login">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginFormComponent',
  data() {
    return {
      user: {
        username: undefined,
        password: undefined,
      },
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
            localStorage.setItem(
              'accesToken',
              JSON.stringify(data.accessToken)
            );
            localStorage.setItem(
              'refreshToken',
              JSON.stringify(data.refreshToken)
            );
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
.account-form {
  display: block;
  max-width: 27.2%;
  min-width: 22rem;
  margin: 0 auto;
  position: relative;
  background-color: #383838;
  border-radius: 15px;
  padding: 35px 40px;
  box-shadow: rgba(255, 255, 255, 0.1) 0 0 2px;
  text-align: center;
}
</style>
