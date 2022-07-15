<template>
  <div class="productcards" ref="pc">
    <div class="title-wrap" ref="title">
      <div
        class="title-inner"
        :style="`${idx % 2 === 0 ? `padding-bottom: 10vw` : ``}`"
      >
        <Title
          :title="title"
          :idx="idx + 1"
          :show="showTitle"
          :minitext="minitext"
        />
      </div>
    </div>
    <div class="row" ref="rect">
      <transition v-for="(item, i) in data.items" :key="i + key">
        <div class="rect-container" :style="checkIfInTestMode(i)" :key="key">
          <!-- <a :href="`/${slugify($cms.textField(item.title))}`"> -->
          <a
            :href="
              $cms.textField(
                data.items[data.items.length - 1 - i].external_link
              )
                ? $cms.textField(
                    data.items[data.items.length - 1 - i].external_link
                  )
                : `/${slugify(
                    $cms.textField(data.items[data.items.length - 1 - i].title)
                  )}`
            "
            :target="
              data.items[data.items.length - 1 - i].open_link_in_new_tab
                ? `_blank`
                : ``
            "
          >
            <div
              class="rect-outer"
              :ref="`rect-outer${i}`"
              :style="`margin-top: ${40 * dir(i)}px`"
            >
              <transition name="rect" appear>
                <div class="rect" :ref="`rect${i}`">
                  <div
                    class="outofstock"
                    v-if="data.items[data.items.length - 1 - i].stock <= 0"
                  >
                    <p>Out Of Stock</p>
                  </div>

                  <!-- v-show="showRect" -->
                  <!-- :style="`transition-delay: ${i * .25}s`" -->
                  <div
                    class="image"
                    :style="
                      `background-image: url(${
                        data.items[data.items.length - 1 - i].main_image.url
                      })`
                    "
                  />
                </div>
              </transition>
            </div>
            <div class="info">
              <transition name="rect" appear>
                <div class="info-inner" :ref="`info${i}`">
                  <p>
                    {{
                      $cms.textField(
                        data.items[data.items.length - 1 - i].title
                      )
                    }}
                  </p>
                  <p class="price">
                    <span
                      class="small"
                      v-if="data.items[data.items.length - 1 - i].from"
                      >from
                    </span>
                    {{
                      data.items[data.items.length - 1 - i].currency.includes(
                        "$"
                      )
                        ? "$"
                        : ""
                    }}{{
                      $cms.textField(
                        data.items[data.items.length - 1 - i].price
                      )
                    }}
                    <span class="small">{{
                      data.items[data.items.length - 1 - i].currency.split(
                        "$"
                      )[1]
                    }}</span>
                  </p>
                </div>
              </transition>
            </div>
          </a>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Title from "./Title.vue";
export default {
  name: "ProductCards",
  components: {
    Title,
  },
  watch: {
    // windowresizing: {
    //   handler(e) {
    //     console.log(e);
    //     if (e <= 1000) {
    //       this.key = "tablet";
    //     }
    //   },
    //   deep:true
    // },
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
    },
  },
  props: {
    idx: Number,
    scrollPos: Number,
    title: {
      type: String,
      default: "TOP 5",
    },
    minitext: {
      type: String,
      default: "string",
    },
    data: Object,
    windowresizing: {
      type: Number,
      default: 0
    }
  },
  methods: {
    checkIfInTestMode(i) {
      // when it comes to test object
      if (
        this.$cms.textField(
          this.data.items[this.data.items.length - 1 - i].title
        ) === "Test"
      ) {
        // if we are in test mode, show. if not, hide
        if (this.$key.includes("test")) {
          return `display: block`;
        } else {
          return `display: none`;
        }
      }
    },
    dir(i) {
      if (window.innerWidth >= 1001) {
        if (this.idx % 2 === 0) {
          return i % 3;
        } else {
          return 2 - (i % 3);
        }
      } else if (window.innerWidth > 800 && window.innerWidth <= 1000) {
        if (this.idx % 2 === 0) {
          return i % 2;
        } else {
          return 1 - (i % 3);
        }
      }
    },
    slugify(name) {
      return name
        .toLowerCase()
        .split(" ")
        .join("-");
    },
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
      counter: 0,
      key: "",
      doOnce: false
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$nextTick(() => {
        this.titlepos =
          this.$refs.title.getBoundingClientRect().top - window.innerHeight;
        this.rectPos =
          (this.$refs.rect.getBoundingClientRect().top +
            this.$refs.rect.getBoundingClientRect().bottom) /
          2;
        for (let i = 0; i < this.data.items.length; i++) {
          this.pos.push(
            this.$refs[`rect-outer${i}`][0].getBoundingClientRect().y -
              this.$refs[`rect-outer${i}`][0].getBoundingClientRect().height
          );
        }
      });
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$transition: all 1000ms cubic-bezier(0.85, 0.005, 0.065, 1); /* custom */
.outofstock {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  p {
    text-transform: uppercase;
    position: absolute;
    color: black;
    z-index: 3;
    top: 50%;
    text-align: center;
    width: 100%;
    transform: translateY(-50%) rotate(45deg);
    background: rgba(255, 255, 255, 0.5);
    font-size: 30px;
    padding: 20px 0;
    font-family: Conglomerate;
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: red;
    z-index: 2;
    opacity: 0.5;
  }
}
.productcards {
  overflow: visible;
  margin: 6em 1em;
}
@media screen and (min-width: 601px) {
  .productcards {
    // position: relative;
    margin: 6em 4em;
  }
  .row {
    margin-top: -30vh;
  }
}
.row {
  display: flex;

  vertical-align: bottom;
  flex-wrap: wrap;
  overflow: visible;
}
.rect-container {
  display: inline-block;
  min-width: 32%;
  position: relative;
}

.info {
  color: white;
  max-width: 100%;
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

@media screen and (max-width: 1000px) {
  .rect-container {
    min-width: 50%;
  }
}
@media screen and (max-width: 800px) {
  .rect-container {
    min-width: 100%;
  }
}
.rect-outer {
  height: 100vw;
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

@media screen and (min-width: 601px) {
  .rect-outer {
    height: 30em;
  }
}

.rect,
.info-inner {
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
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: scale(1);
  transition: transform 1s ease;
  width: 100%;
  transform-origin: center;
  height: 100%;
}
.rect-enter-active,
.rect-enter {
  transition: $transition;
  transform: translateY(150%);
}
.rect-enter-to,
.rect-show {
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
  z-index: 4;
  mix-blend-mode: difference;
  pointer-events: none;
  overflow: hidden;
  overflow: visible;
}

.small {
  font-size: 10px;
}
@media screen and (max-width: 800px) {
  .rect-outer {
    margin-top: 40px !important;
  }
}
</style>
