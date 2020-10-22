<template>
  <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      {{bug.name}}
    </p>
    <a href="#" class="card-header-icon">
      <span class="icon">
        <i class="fas fa-bug" ></i>
      </span>
    </a>
  </header>
  <div class="card-content">
    <div class="content">
      {{bug.description}}
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
  <footer class="card-footer">
      <i class="fas fa-comments mr-1"></i>
      {{bug.comments.length}}
  </footer>
</div>
</template>

<script>
export default {
  props: ['bug'],
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';
.card-header-title {
    color: $text;
}

.card {
  background-color: rgb(66,66,66);
  margin-bottom: 10px;
}
.card-footer {
    padding: 10px
}
</style>
