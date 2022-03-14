<template>
  <div class="intro">
    <div class="intro-text">
      <!-- <transition v-for="(item, i) in activeText" :key="i"> -->
      <div class="p-outer">
        <!-- <transition appear name="p">
            <h1
              class="text"
              :style="`transition-delay: ${i * 0.1}s`"
              v-html="item"
              :key="activeText[0]"
            />
          </transition> -->
        <transition appear name="p">
          <h1 v-html="activeText" :key="activeText" />
        </transition>
      </div>
      <!-- </transition> -->
    </div>
    <!-- <div class="line" ref="line"/> -->
    <div class="overlay bg" />
    <div class="secondbg" ref="secondbg">
      <div
        class="img"
        :style="`background-image: url(${$header.image_1.url})`"
      />
    </div>
    <div class="firstbg" ref="firstbg">
      <div
        class="img"
        :style="`background-image: url(${$header.image_2.url})`"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "HalfScreenImage",
  watch: {
    scrollPos(e) {
      this.$refs.firstbg.style = `height: ${Math.min(
        window.innerHeight,
        e
      )}px;`;
      // this.lineSize = Math.min(this.maxLineHeight, e * .2);
      // this.$refs.line.style=`height: ${this.lineSize}px`;
      if (e >= window.innerHeight / 2) {
        this.activeText = this.$cms.htmlField(this.$header.text_2);
      } else {
        this.activeText = this.$cms.htmlField(this.$header.text_1);
      }
      // if (this.lineSize >= (this.maxLineHeight / 2) - 50) {
      //   this.activeText = this.secondText;
      // } else {
      //   this.activeText = this.firstText;
      // }
    },
  },
  props: {
    scrollPos: Number,
  },
  methods: {},
  data() {
    return {
      maxLineHeight: (window.innerHeight / 10) * 8,
      lineSize: 0,
      firstText: [`<strong>WELCOME</strong> TO THE REB J COLLECTIVE.`],
      secondText: [`UNIQUELY BY <strong>THE ONE AND ONLY.</strong>`],
      activeText: "",
    };
  },
  mounted() {
    this.activeText = this.$cms.htmlField(this.$header.text_1);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.intro {
  height: 100vh;
  position: relative;
  width: 100vw;
  // top: 10vh;
  // left: 10vw;
  overflow: hidden;
  //     -webkit-box-shadow: 0px 0px 17px 1px rgba(0,0,0,0.29);
  // box-shadow: 0px 0px 17px 1px rgba(0,0,0,0.29);
  // margin-bottom: 25vh;
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
}
.p-outer {
  width: 100vw;
  height: 40px;
  overflow: hidden;
  position: relative;
}
@media screen and (max-width: 600px) {
  .intro-text {
    width: 100%;
  }
  .p-outer {
    overflow: visible;
    height: auto;
  }
}
.p-enter-to,
.p-leave {
  transform: translateY(0%);
  transition: transform 0.25s ease;
}
.p-enter,
.p-enter-from {
  transform: translateY(100%);
  transition: transform 0.25s ease;
}
.p-leave-to,
.p-leave-active {
  transform: translateY(-100%);
  transition: transform 0.25s ease;
}

.text {
  position: absolute;
  width: 100%;
  left: 0;
}
.firstbg,
.secondbg {
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
  // background-image: url("https://images.prismic.io/rebjcollective/d3d5440b-c215-4d38-a532-ed4a236530c1_REBJC2.jpg?auto=compress,format");

  background-repeat: no-repeat;
  background-position: top center;
}
.secondbg .img {
  height: 100%;
  // background-image: url("https://images.prismic.io/rebjcollective/0cbe3f88-b646-492a-a161-790c608a595e_REBJC1.jpg?auto=compress,format");
  background-repeat: no-repeat;
  background-position: center;
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
  opacity: 0.75;
}
</style>
