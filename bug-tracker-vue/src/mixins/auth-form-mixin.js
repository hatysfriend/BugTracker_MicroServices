export default {
  props: {
    isAnimated: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('main')
        .catch(console.log('POO'));
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
