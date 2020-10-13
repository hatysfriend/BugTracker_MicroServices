<template>
  <div v-if="message != ''" class="notification login-alert" :class="{ 'is-success': isError==false, 'is-danger': isError==true }">
    {{ message }}
  </div>
</template>

<script>
export default {
  props: {
    isError: {
      type: Boolean,
      default: true
    },
    message: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.login-alert {
  display: block;
  max-width: 27.2%;
  min-width: 22rem;
  margin: 0 auto;
  margin-top: 4rem;
  position: relative;
  border-radius: 15px;
  box-shadow: rgba(255, 255, 255, 0.1) 0 0 2px;
  text-align: center;
}
</style>