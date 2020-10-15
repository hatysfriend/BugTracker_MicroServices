<template>
  <div class="login-container">
    <div class="account-form">
      <h3 class="title is-3"><strong>Welcome to bug trace</strong></h3>
      <div class="field mb-4">
        <input type="text" name="username" class="input" placeholder="Enter username" v-model="user.username" @keydown="resetMessage"/>
      </div>
      <div class="field">
        <input type="password" name="password" class="input" placeholder="Enter password" v-model="user.password" @keydown="resetMessage"/>
      </div>
      <button value="Register" class="button is-primary is-fullwidth mt-5" @click="register">Register</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterFormComponent',
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
