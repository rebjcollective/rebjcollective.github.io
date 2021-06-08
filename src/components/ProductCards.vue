<template>
  <div class="productcards" ref="pc">
    <div class="title-wrap" ref="title">
        <div class="title-inner">
        <Title :title="title" :show="showTitle"/>
        </div>
      </div>
      <div class="row" ref="rect">
        <transition  v-for="(item, i) in 5" :key="i">
          <div class="rect-outer" :style="`margin-top: ${i * 40}px`">
            <transition name="rect" appear>
             <div class="rect" v-show="showRect" :style="`transition-delay: ${i * .25}s`"/>
            </transition>
          </div>
        </transition>

    </div>
  </div>
</template>

<script>
import Title from './Title.vue'
export default {
  name: 'HalfScreenImage',
  components: {
    Title
  },
  watch: {
    scrollPos(e) {
      if (e >= this.titlepos) {
        this.showTitle = true;
      }
      if (e >= this.rectPos) {
        console.log(this.rectPos);
        this.showRect = true;
      }
    }
  },
  props: {
    scrollPos: Number,
    title: {
      type: String,
      default: "TOP 5"
    }
  },
  methods: {
  
  },
  data() {
    return {
      top: null,
      showTitle: false,
      titlepos: null,
      showRect: false,
      rectPos: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.titlepos = (this.$refs.title.getBoundingClientRect().top + this.$refs.title.getBoundingClientRect().bottom) / 2;  
      this.rectPos = (this.$refs.rect.getBoundingClientRect().top + this.$refs.rect.getBoundingClientRect().bottom) / 2;  
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$transition: all 1000ms cubic-bezier(0.85, 0.005, 0.065, 1); /* custom */

.productcards {
    // position: relative;
    padding: 10em 4em;
}
.row {
    display: flex;
    margin-top: -30vh;
    flex-wrap: wrap;
}
.rect-outer {
    display: inline-block;
    min-width: calc(33% - 2em);
    height: 60vh;
    margin: 0 1em;
    overflow: hidden;
}

.rect {
    background: url("../assets/test.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
}

.rect-enter-active, .rect-enter {
    transition: $transition;
    transform: translateY(150%);
}
.rect-enter-to {
    transition: $transition;
    transform: translateY(0%);
}
.title-inner {
  position: absolute;
  z-index: 3;
  left: 50%;
  transform: translateX(-50%);
}
.title-wrap {
  position: relative;
  height: 35vw;
  text-align: center;
}
</style>
