<template>
  <div
    id="index"
    ref="index"
    :style="
      `background-image: url(${
        $header.background_image.url ? $header.background_image.url : ''
      })`
    "
  >
    <div ref="view" class="view">
      <router-view :scrollPos="scrollPos" :scroll="scroll"></router-view>
    </div>
    <Header class="logo" ref="logo" />
  </div>
</template>

<script>
import Scrolly from "./scrolly.js";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  // watch: {
  //   $route: {
  //   },
  // },
  mounted() {
    this.startScroll();
  },
  methods: {
    startScroll() {
      this.$nextTick(() => {
        this.$nextTick(() => {
          setTimeout(() => {
            this.scroll = new Scrolly(this.$refs.index);
            this.initScroll();
            window.addEventListener("resize", () => {
              if (this.scroll) this.scroll.resizeScreen();
            });
          }, 500);
        });
      });
    },
    initScroll() {
      if (window.navigator.userAgent.includes("iPhone")) {
        this.device = "mobile";
      } else if (window.navigator.userAgent.includes("Android")) {
        this.device = "mobile";
      } else if (window.navigator.userAgent.includes("iPad")) {
        this.device = "mobile";
      } else if (window.navigator.userAgent.includes("Firefox")) {
        this.device = "firefox";
      } else {
        this.device = "desktop";
      }
      if (this.device === "desktop")
        window.addEventListener("mousewheel", this.mouseScroll);
      else if (this.device === "firefox")
        window.addEventListener("wheel", this.mouseScroll);
      else {
        window.addEventListener("touchstart", (e) => {
          this.prevTouch = e.touches[0].screenY;
        });
        window.addEventListener("touchmove", this.touchScroll);
      }
    },
    touchScroll(e) {
      if (this.prevTouch !== e.touches[0].screenY) {
        this.nowTouch = e.touches[0].screenY;
        this.scrollPos += (this.prevTouch - this.nowTouch) * 2;
        this.scrollPos = Math.max(this.scrollPos, 0);
        if (this.scrollPos >= window.innerHeight) {
          this.$refs.view.style = "height: auto";
          this.scroll.listen();
        } else if (this.scroll.pos <= window.innerHeight / 6) {
          this.$refs.view.style = `height: ${window.innerHeight}px`;
          this.scroll.deafen();
        }
        e.stopPropagation();
      }
      this.prevTouch = e.touches[0].screenY;
    },
    mouseScroll(e) {
      this.scrollPos += e.deltaY;
      this.scrollPos = Math.max(this.scrollPos, 0);
      if (this.scrollPos >= window.innerHeight) {
        this.$refs.view.style = "height: auto";
        this.scroll.listen();
      } else if (this.scroll.pos <= window.innerHeight / 6) {
        this.$refs.view.style = `height: ${window.innerHeight}px`;
        this.scroll.deafen();
      }
    },
  },
  data() {
    return {
      sections: [
        {
          title: "BASICS",
        },
      ],
      scrollPos: 0,
      scroll: null,
      prevTouch: 0,
      nowTouch: 0,
      device: null,
    };
  },
};
</script>

<style lang="scss">
@import "./main.scss";
#index {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: $bg;
  height: 100vh;
  overflow: hidden;
  min-width: 100vw;
}
.logo {
  position: fixed;
  left: 50%;
  // transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%);

  // margin-top: 25vh;
  margin-top: 20px;
  top: 0;
  z-index: 100;
  mix-blend-mode: difference;
  // width: 500px;
  width: 80px;
  transition: margin-top 1s ease, width 1s ease;
}
// .view {
//   padding-bottom: 100vh;
// }
.logo {
  position: fixed;
  left: 50%;
  // transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%);

  // margin-top: 25vh;
  margin-top: 20px;
  top: 0;
  z-index: 100;
  mix-blend-mode: difference;
  // width: 500px;
  width: 80px;
  transition: margin-top 1s ease, width 1s ease;
}
body {
  margin: 0;
  position: fixed;
  overflow: hidden;
}

html,
body {
  overscroll-behavior-y: none;
}

.section {
  position: relative;
}
a {
  color: white;
}
</style>
