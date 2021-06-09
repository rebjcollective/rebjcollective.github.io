<template>
  <div class="productcards" ref="pc">
    <div class="title-wrap" ref="title">
        <div class="title-inner" :style="`${(idx % 2 === 0) ? `padding-bottom: 20vh` : ``}`">
        <Title :title="title" :idx="idx + 1" :show="showTitle"/>
        </div>
      </div>
      <div class="row" ref="rect">
        <transition v-for="(item, i) in itemcount" :key="i">
          <div class="rect-container">
            <div class="rect-outer" :style="`margin-top: ${40 * dir(i)}px`">
              <transition name="rect" appear>
              <div class="rect" v-show="showRect" :style="`transition-delay: ${i * .25}s`">
                <div class="image"/>
                </div>
              </transition>
            </div>
                <div class="info">
                  <transition name="rect" appear>
                      <div class="info-inner" v-show="showRect" :style="`transition-delay: ${i * .35}s`">
                        <p>Soft cotton tee, embroidered with tiger graphic and finished.</p>
                        <p class="price">$40</p>
                      </div>
                  </transition>
                </div>

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
        this.showRect = true;
      }
    }
  },
  props: {
    idx: Number,
    scrollPos: Number,
    title: {
      type: String,
      default: "TOP 5"
    }
  },
  methods: {
    dir(i) {
      if (this.idx % 2 === 0) {
        return i;
      } else {
        return this.itemcount - i;
      }
    }
  },
  data() {
    return {
      top: null,
      showTitle: false,
      titlepos: null,
      showRect: false,
      rectPos: null,
      itemcount: 5
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
    vertical-align: bottom;
    flex-wrap: wrap;
}
.rect-container {
    display: inline-block;
    min-width: calc(33% - 2em);
}
.rect-outer {
    
    height: 60vh;
    margin: 0 1em;
    overflow: hidden;
    &:hover {
      .image {
        transform: scale(1.2);
        transition: transform 1s ease;
        transform-origin: center;
      }
    }
}

.rect {
    height: 100%;
}
.image {
    background: url("../assets/test.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transform: scale(1);
    transition: transform 1s ease;
    width: 100%;
    transform-origin: center;
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
  // position: absolute;
  z-index: 3;
  // left: 50%;
  // transform: translateX(-50%);
  // padding-bottom: 20vh;
}
.title-wrap {
  position: relative;
  text-align: center;
}
.info {
  color: white;
  max-width: calc(33vw - 2.75em);
  overflow: hidden;
  p {
    font-size: 10px;
    text-transform: uppercase;
    width: calc(50% - 4em);
    text-align: left;
    margin: 1.5em;
    display: inline-block;
  }
  .price {
    text-align: right;
    font-size: 15px;
  }
}
</style>
