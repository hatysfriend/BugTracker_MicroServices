<template>
  <form method="POST" action="/auth/login">
      <div class="account-form">
          <h3 class="account-title"><strong>Log in to Bugtrace</strong></h3>
          <div class="field">
              <input type="text" name="username" class="input" placeholder="Enter username" />
          </div>

          <div class="field">
              <input type="password" name="password" class="input" placeholder="Enter password" />
          </div>

          <input type="submit" value="Login" class="button" />
      </div>
  </form>
</template>

<script>
export default {
  name: 'LoginFormComponent'
}
</script>

<style>

</style>