<template>
  <div class="login-container">
    <img src="../src/assets/img/BugtraceLogo.gif" class="level-left blur-anim" />
    <img src="../src/assets/img/transparentBug.png" class="logo logo-animation blur-anim" />
      <router-view @animate="setAnimationState()"
        :class="{ 'fade-in-anim' : isAnimated, 'start-opaque' : isAnimated, 'blur-short-anim' : !isAnimated}">
      </router-view>
    <Flash :isError="true" :message="message" />
  </div>
</template>

<script>
import Flash from './components/FlashMessage.vue';

export default {
  components: {
    Flash,
  },
  data() {
    return {
      message: '',
      isAnimated: true
    };
  },
  methods: {
    setMessage(message) {
      this.message = message;
    },
    setAnimationState(isAnimated) {
      this.isAnimated = isAnimated;
    }
  }
};
</script>

<style lang="scss" scoped>
  .logo {
    max-width: 250px;
    margin-right: auto;
    margin-left: auto;
    display: block;
  }

  .start-opaque {
    opacity: 0;
  }

// Long Blur Animation
  @keyframes blur-anim {
    0% {
      filter: blur(3px);
      opacity: 0.3;
    }
  }

  .blur-anim {
    animation: blur-anim 1.6s linear backwards;
  }

// Short Blur Animation
  @keyframes blur-anim {
    0% {
      filter: blur(1px);
      opacity: 0.3;
    }
  }

  .blur-short-anim {
    animation: blur-anim 0.5s linear backwards;
  }

// Form Fade In Animation
  @keyframes form-anim {
    0% {
      filter: blur(3px);
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .fade-in-anim {
    animation: form-anim 0.2s 1.25s ease-in forwards;
  }

// Logo Move And Shrink Animation
  @keyframes logo-anim {
    0% {
      filter: blur(5px);
      max-width: 500px;
    }
    50% {
      filter: blur(0px);
      max-width: 500px;
    }
  }

  .logo-animation {
    animation: logo-anim 1.3s ease-in;
  }
</style>
