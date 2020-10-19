export default {
  props: {
    isAnimated: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      user: {
        username: undefined,
        password: undefined,
      },
    };
  },
  methods: {
    resetForm() {
      this.user.username = undefined;
      this.user.password = undefined;
    },
    resetMessage() {
      this.$emit('error', '');
    },
    setMessage(message) {
      this.$emit('error', message);
    },
    emitAnimationData() {
      this.$emit('animate', this.isAnimated);
    }
  }
};
