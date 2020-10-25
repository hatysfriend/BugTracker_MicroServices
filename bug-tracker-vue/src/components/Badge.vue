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
      default: 'kev'
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
      this.character = this.character.toUpperCase();
      console.log(`Character${this.character}`);
    }
  },
  created() {
    this.getFirstCharacter();
  }
};
</script>

<style lang="scss" scoped>
.badge {
  font-weight: bold;
  text-align: center;
  background-color: white;
  color: black;
  border-radius: 100%;
  border-style: solid;
  width: 30px;
  height: 30px;
  text-emphasis-color: black;
  margin-right: 5px;
  margin-bottom: 1px;
}
</style>
