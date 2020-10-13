<template>
<div class="login-container">
    <img src="../src/assets/img/BugtraceLogo.gif" class="level-left">
    <img src="../src/assets/img/transparentBug.png" class="logo">
    <LoginForm @error="setMessage"/>
    <Flash :isError='true' :message='message'/>
</div>
</template>

<script>
import LoginForm from '../src/components/LoginForm';
import Flash from '../src/components/FlashMessage';

export default {
    components: {
        LoginForm,
        Flash
    },
    data() {
        return {
            message: ''
        }
    },
    methods: {
        setMessage(message) {
            this.message = message;
        }
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