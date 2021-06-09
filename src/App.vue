<template>
  <div id="app" ref="app">
    <div class="appinner">
      <div class="view" ref="view">
      <Intro :scrollPos="scrollPos"/>
      <div class="section" v-for="(item, i) in sections" :key="i">
        <ProductCards :scrollPos="scrollPos" :idx="i" :title="item.title"/>
        </div>
        <Logo class="logo"/>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from './components/Logo.vue'
import ProductCards from './components/ProductCards.vue'
import Intro from './components/Intro.vue'
import Scrolly from "./scrolly.js";

export default {
  name: 'App',
  components: {
    Logo,
    ProductCards,
    Intro
  },
  mounted() {
    this.initScroll();
    this.scroll = new Scrolly(this.$refs.app);
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
          this.$refs.view.style="height: 100%";
          this.scroll.listen();

        } else {
          this.$refs.view.style="height: 100vh";
          this.scroll.deafen();
        }
    }
  },
  data() {
    return {
      sections: [
        {
          title: "BASICS"
        },
        {
          title: "COOL"
        }
      ],
      scrollPos: 0,
      scroll: null
    }
  }
}
</script>

<style lang="scss">
@import './main.scss';
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
}
.logo {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  z-index: 100;
}
.section {
  position: relative;
}
.view {
  padding-bottom: 25vh;

}
</style>
