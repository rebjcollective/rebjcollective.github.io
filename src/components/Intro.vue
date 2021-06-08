<template>
  <div class="intro">
      <div class="intro-text">
        <transition v-for="(item, i) in activeText" :key="i">
          <div class="p-outer">
          <transition appear name="p" >
            <h1 class="text" :style="`transition-delay: ${i * .1}s`" v-html="item" :key="activeText[0]"/>
            </transition>
            </div>
          </transition>
        </div>
      <!-- <div class="line" ref="line"/> -->
      <div class="overlay bg"/>
      <div class="secondbg" ref="secondbg"><div class="img"/></div>
      <div class="firstbg" ref="firstbg"><div class="img"/></div>
  </div>
</template>

<script>
export default {
  name: 'HalfScreenImage',
  watch: {
    scrollPos(e) {
      this.$refs.firstbg.style=`height: ${Math.min(window.innerHeight, e)}px;`;
      // this.lineSize = Math.min(this.maxLineHeight, e * .2);
      // this.$refs.line.style=`height: ${this.lineSize}px`;
      if (e >= window.innerHeight / 2) {
        this.activeText = this.secondText;
      } else {
        this.activeText = this.firstText;
      }
      // if (this.lineSize >= (this.maxLineHeight / 2) - 50) {
      //   this.activeText = this.secondText;
      // } else {
      //   this.activeText = this.firstText;
      // }
    }
  },
  props: {
    scrollPos: Number
  },
  methods: {
  
  },
  data() {
    return {
      maxLineHeight: (window.innerHeight / 10) * 8,
      lineSize: 0,
      firstText: [`<strong>DARE</strong> TO MAKE A STATEMENT`],
      secondText: [`<strong>DARE</strong> TO BE YOU`],
      activeText: ''
    }
  },
  mounted() {
    this.activeText = this.firstText;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.intro {
    height: 100vh;
    position: relative;
}
.line {
  border-left: 1px solid white;
  position: absolute;
  left: 50%;
  top: 10%;
  height: 0%;
  transform: translateX(-50%);
  width: 0px;
}
.intro-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
    z-index: 2;
  padding: 2em;
}
.p-enter-to, .p-leave {
  transform: translateY(0%);
  transition: transform .25s ease;
}
.p-enter {
  transform: translateY(100%) ;
  transition: transform .25s ease;
}
.p-leave-to, .p-leave-active {
  transform: translateY(-100%) ;
  transition: transform .25s ease;
}
.p-outer {
  width: 100vw;
  height: 40px;
  overflow: hidden;
  position: relative;
}
.text {
  position: absolute;
  width: 100%;
  left: 0;
}
.firstbg, .secondbg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}
.firstbg {
  height: 0;
}
.secondbg {
  height: 100%;
}
.firstbg .img {
  height: 100%;
  background-image: url("https://images.unsplash.com/photo-1586396874197-b8fc676a5187?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80");
}
.secondbg .img{
  height: 100%;
  background-image: url("https://images.unsplash.com/photo-1500907789384-0c3b4c3bdce4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80");
}
h1 {
  font-family: Arial;
  font-weight: 200;
}
.overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: .5;
}
</style>
