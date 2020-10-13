<template>
  <div class="login-container">
    <form method="POST" action="/auth/login">
      <div class="account-form">
        <h3 class="title is-3"><strong>Log in to Bugtrace</strong></h3>
        <div class="field">
          <input
            type="text"
            name="username"
            class="input"
            placeholder="Enter username"
          />
        </div>
        <div class="field">
          <input
            type="password"
            name="password"
            class="input"
            placeholder="Enter password"
          />
        </div>
        <input type="submit" value="Login" class="button is-primary" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginFormComponent",
  methods: {},
};
</script>

<style lang="scss" scoped>
.account-form {
  display: block;
  max-width: 27.2%;
  margin: 0 auto;
  position: relative;
  background-color: #383838;
  border-radius: 15px;
  padding: 25px 40px;
  box-shadow: rgba(255, 255, 255, 0.1) 0 0 2px;
  text-align: center;
}
</style>