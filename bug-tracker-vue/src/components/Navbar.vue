<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="">
      <img src="../assets/img/BugtraceLogo.gif" alt="" width="150">
    </a>
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  <!-- <div class="navbar-end">
    <div class="navbar-item">
      <div>Hi {{ username }}!</div>
    </div>
    <div class="navbar-item">
      <div class="buttons">
        <button class="logout-button button is-small is-warning">Logout</button>
      </div>
    </div>
  </div> -->
</nav>
</template>

<script>
// import SocialLinks from './SocialLinks.vue';

export default {
  components: {
    // SocialLinks
  },
  props: {
    username: {
      type: String,
      required: true
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';
.navbar {
  background: $background-secondary;
}

.navbar-item {
  padding: 0px;
  max-height: 300;
}

.navbar-item img {
  max-height: 100%;
}
</style>
