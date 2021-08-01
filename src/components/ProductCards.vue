<template>
  <div class="productcards" ref="pc">
    <div class="title-wrap" ref="title">
        <div class="title-inner" :style="`${(idx % 2 === 0) ? `padding-bottom: 20vh` : ``}`">
        <Title :title="title" :idx="idx + 1" :show="showTitle"/>
        </div>
      </div>
      <div class="row" ref="rect">
        <transition v-for="(item, i) in data.items" :key="i">
          <div class="rect-container">
            <div class="rect-outer" :ref="`rect-outer${i}`" :style="`margin-top: ${40 * dir(i)}px`">
              <transition name="rect" appear>
              <div class="rect" :ref="`rect${i}`">
                <!-- v-show="showRect" -->
                <!-- :style="`transition-delay: ${i * .25}s`" -->
                <div class="image" :style="`background-image: url(${item.main_image.url})`"/>
                </div>
              </transition>
            </div>
                <div class="info">
                  <transition name="rect" appear>
                      <div class="info-inner" :ref="`info${i}`">
                        <p>{{$cms.textField(item.description)}}</p>
                        <p class="price">${{item.price_in_usd}} USD</p>
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
  name: 'ProductCards',
  components: {
    Title
  },
  watch: {
    scrollPos(e) {
      if (e >= this.titlepos) {
        this.showTitle = true;
      }
      // if (e >= this.rectPos) {
      //   this.showRect = true;
      // }
      if (e >= this.pos[this.counter]) {
        this.$refs[`rect${this.counter}`][0].className += ` rect-show`;
        this.$refs[`info${this.counter}`][0].className += ` info-show`;
        this.counter += 1;
      }
    }
  },
  props: {
    idx: Number,
    scrollPos: Number,
    title: {
      type: String,
      default: "TOP 5"
    },
    data: Object
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
      itemcount: 5,
      pos: [],
      counter: 0
    }
  },
  mounted() {
    this.$nextTick(() => {
     this.$nextTick(() => {
      this.titlepos = this.$refs.title.getBoundingClientRect().top - (window.innerHeight); 
      this.rectPos = (this.$refs.rect.getBoundingClientRect().top + this.$refs.rect.getBoundingClientRect().bottom) / 2;  
          for (let i = 0; i < this.data.items.length; i++) {
            this.pos.push(this.$refs[`rect-outer${i}`][0].getBoundingClientRect().y - this.$refs[`rect-outer${i}`][0].getBoundingClientRect().height);
          }
      })
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

.rect, .info-inner {
    height: 100%;
    transform: translateY(150%);
}
.info-show {
  transition: transform 1s ease;
  transition-delay: 1s;
  transform: translateY(0%);
}
.image {
    // background: url("../assets/test.jpg");
    background-size: contain;
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
.rect-enter-to, .rect-show {
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
