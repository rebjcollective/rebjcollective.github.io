<template>
  <div id="index" ref="index">
    <div ref="view" class="view">
      <router-view :scrollPos="scrollPos" :scroll="scroll"></router-view>
    </div>
    <a href="/"> <Logo class="logo" ref="logo"/></a>
  </div>
</template>

<script>
import Scrolly from "./scrolly.js";
import Logo from "./components/Logo.vue";

export default {
  name: "App",
  components: {
    Logo,
  },

  mounted() {
    this.$nextTick(() => {
      this.$nextTick(() => {
        setTimeout(() => {
          this.initScroll();
          this.scroll = new Scrolly(this.$refs.index);
        }, 500);
      });
    });
  },
  methods: {
    initScroll() {
      window.addEventListener("mousewheel", this.mouseScroll);
    },
    mouseScroll(e) {
      // if (e.deltaY > 0) this.scrollPos += 1;
      // else this.scrollPos -= 1;
      this.scrollPos += e.deltaY;
      this.scrollPos = Math.max(this.scrollPos, 0);
      // console.log(this.scrollPos);
      if (this.scrollPos >= window.innerHeight) {
        this.$refs.view.style = "height: auto";
        // this.$refs.footer.$el.style = "display: block;";

        // this.$refs.logo.$el.style = `
        //   width: 80px;
        //   margin-top: 20px;
        //   transform: translateX(-50%) translateY(0);
        //   transition: margin-top 1s ease, width 1s ease;
        // `;
        this.scroll.listen();
      } else if (this.scroll.pos <= window.innerHeight / 6) {
        // this.$refs.logo.$el.style = `
        //   width: 500px;
        // `;
        this.$refs.view.style = "height: 100vh";
        // this.$refs.footer.$el.style = "display: none;";
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
  background-image: url("./assets/Gritty.png");
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
  overscroll-behavior: none;
}

.section {
  position: relative;
}
</style>
