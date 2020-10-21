<template>
  <div>
    <img :class="{'crambo-secret-submit-alt' : isMoved}" class="crambo-secret-submit" @click="launchCrambo" src="../assets/img/crambo3.jpg" alt="" width="5px">
    <div v-if="secretCount > 2">
      <div class="scroller">
        <div class="crambo-anim-1">
          <div class="crambo-anim-wiggle">
            <img src="../assets/img/crambo1.jpg" alt="" />
          </div>
        </div>
        <div class="crambo-anim-2">
          <div class="crambo-anim-wiggle">
            <img src="../assets/img/crambo2.jpg" alt="" />
          </div>
        </div>
        <div class="crambo-anim-3">
          <div class="crambo-anim-wiggle">
            <img src="../assets/img/crambo3.jpg" alt="" />
          </div>
        </div>
        <div class="crambo-anim-4">
          <div class="crambo-anim-wiggle">
            <img src="../assets/img/crambo4.jpg" alt="" />
          </div>
        </div>
        <div class="crambo-anim-5">
          <div class="crambo-anim-wiggle">
            <img src="../assets/img/crambo5.jpg" alt="" width="500"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      secretCount: 0,
      isMoved: false
    };
  },
  methods: {
    launchCrambo() {
      // eslint-disable-next-line no-plusplus
      this.secretCount++;
      this.isMoved = true;
    }
  }
};
</script>

<style>
@keyframes crambowiggle {
    0% {
      transform: translateY(0%);
    }
    50% {
      transform: translateY(40%);
    }
    100% {
      transform: translateY(0%);
    }
  }

  @keyframes crambo {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  @keyframes scroll {
    0% {
      transform: translateY(-45%);
    }
    50% {
      transform: translateY(-10%);
    }
    100% {
      transform: translateY(-65%);
    }
  }

  .crambo-anim-1 {
    animation: crambo 1s infinite linear;
    z-index: -10;

    overflow: visible;
  }

  .crambo-anim-2 {
    animation: crambo 2s infinite linear;
    z-index: -10;

    overflow: visible;
  }

  .crambo-anim-3 {
    animation: crambo 3s infinite linear;
    z-index: -10;

    overflow: visible;
  }

  .crambo-anim-4 {
    animation: crambo 1.5s infinite linear;
    z-index: -10;

    overflow: visible;
  }

  .crambo-anim-5 {
    animation: crambo 2.5s infinite linear;
    z-index: -10;

    overflow: visible;
  }

  .crambo-anim-wiggle {
    animation: crambowiggle 1s infinite ease-in-out;
  }

  .crambo-anim-wiggle {
    animation: crambowiggle 1s infinite ease-in-out;
  }

  .crambo-anim-wiggle {
    animation: crambowiggle 1s infinite ease-in-out;
  }

  .crambo-title {
    font-size: 1000%;
  }

  .scroller {
    animation: scroll 9.0s infinite ease-in-out;
  }

  .scroller-2 {
    animation: scroll 1.0s infinite linear;
  }

  .scroller-3 {
    animation: scroll 3.0s infinite linear;
  }

  .crambo-secret-submit {
    position: absolute;
    left: 0%;
    bottom: 0%;
  }
  .crambo-secret-submit-alt {
    position: absolute;
    left: 99.8589%;
    bottom: 99.9%;
  }
</style>
