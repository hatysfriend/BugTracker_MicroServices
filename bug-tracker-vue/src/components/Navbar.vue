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
</nav>
</template>

<script>
export default {
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
