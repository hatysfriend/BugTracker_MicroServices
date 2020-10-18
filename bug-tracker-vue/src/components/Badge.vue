<template>
  <div class="badge">
    {{ character }}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      character: undefined
    };
  },
  methods: {
    getFirstCharacter() {
      this.character = this.name.charAt(0);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>>

<style>

</style>>

<style>

</style>
