<template>
<div class="login-container">
    <img src="../src/assets/img/BugtraceLogo.gif" class="level-left">
    <img src="../src/assets/img/transparentBug.png" class="logo">
    <LoginForm />
</div>
</template>

<script>
import LoginForm from '../src/components/LoginForm';
export default {
    components: {
        LoginForm
    }
}
</script>

<style lang="scss" scoped>
.logo {
  max-width: 250px;
  margin-right: auto;
  margin-left: auto;
  display: block;
}
</style>