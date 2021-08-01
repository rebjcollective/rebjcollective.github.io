<template>
  <div id="app" ref="app">
    <div class="appinner">
      <div class="view" ref="view">
        <Intro :scrollPos="scrollPos" />
        <div class="section" v-for="(item, i) in $apparel" :key="i">
          <ProductCards
            :scrollPos="scroll ? scroll.pos : 0"
            :idx="i"
            :title="$cms.textField(item.primary.category)"
            :data="item"
          />
        </div>
      </div>
    <Footerr ref="footer" />

    </div>
    <Logo class="logo" ref="logo" />
  </div>
</template>

<script>
import Logo from "./components/Logo.vue";
import ProductCards from "./components/ProductCards.vue";
import Intro from "./components/Intro.vue";
import Footerr from "./components/Footer.vue";
import Scrolly from "./scrolly.js";

export default {
  name: "App",
  components: {
    Logo,
    ProductCards,
    Intro,
    Footerr,
  },
  mounted() {
    this.initScroll();
    this.$nextTick(() => {
      this.$nextTick(() => {
        this.scroll = new Scrolly(this.$refs.app);
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
        this.$refs.view.style = "height: 100%";
        this.$refs.footer.$el.style = "display: block;";

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
        this.$refs.footer.$el.style = "display: none;";
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
body {
  margin: 0;
  overscroll-behavior: none;
}
#app {
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
.section {
  position: relative;
}
// .view {
//   padding-bottom: 100vh;
// }
</style>
