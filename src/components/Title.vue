<template>
  <div class="title">
    <div :class="`subtitle ${idx % 2 === 0 ? `left` : `right`}`">
      <h3>
        <p class="idx">{{ idx }}</p>
        <span>{{ minitext }}</span>
      </h3>
    </div>
    <h2
      class="head real"
      ref="title"
      v-if="word.length && show"
      :style="`font-size: ${fs(word.length)}px;`"
    >
      <transition v-for="(item, i) in word" :key="i" appear name="title">
        <span
          class="box"
          :style="`display: inline-block; transition-delay:${i * 0.05}s;`"
        >
          <span
            :style="
              `transform: translateY(${i *
                8 *
                dir(idx)}%); display: inline-block;`
            "
            >{{ item }}</span
          >
        </span>
      </transition>
    </h2>
    <h2
      class="head ghost"
      ref="title"
      :style="`font-size: ${fs(word.length)}px;`"
    >
      <transition v-for="(item, i) in word" :key="i" appear name="title">
        <span
          class="box"
          :style="`display: inline-block; transition-delay:${i * 0.05}s;`"
        >
          <span
            :style="
              `transform: translateY(${i *
                8 *
                dir(idx)}%); display: inline-block;`
            "
            >{{ item }}</span
          >
        </span>
      </transition>
    </h2>
  </div>
</template>

<script>
export default {
  name: "Title",
  watch: {},
  props: {
    idx: Number,
    title: {
      type: String,
      default: "String",
    },
    minitext: {
      type: String,
      default: "String",
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    dir(idx) {
      if (idx % 2 === 0) {
        return -1;
      } else {
        return 1;
      }
    },
    titleArray(e) {
      this.word = e.split("");
    },
    fs(wordLength) {
      this.wordLength = wordLength;
      return (window.innerWidth / wordLength) * (1 + wordLength / 30);
    },
  },
  data() {
    return {
      html: "",
      word: [],
      wordLength: 0,
    };
  },
  mounted() {
    this.titleArray(this.title);
    window.addEventListener("resize", () => {
      var real = document.getElementsByClassName("real");
      var ghost = document.getElementsByClassName("ghost");
      for (let i = 0; i < real.length; i++) {
        real[i].style = `font-size: ${this.fs(this.wordLength)}px`;
        ghost[i].style = `font-size: ${this.fs(this.wordLength)}px`;
      }
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$transition: all 1000ms cubic-bezier(0.85, 0.005, 0.065, 1); /* custom */
h2 {
  // overflow: hidden;
  position: relative;
  white-space: nowrap;
  // height: 35vw;
  font-weight: 100;
}
.idx {
  position: absolute;
  left: 0;
  transform: translateX(-100%);
  top: -100%;
}
.title-enter-active {
  transition: $transition;
  transform: translateY(200vh);
}
.title-enter-to {
  transition: $transition;
  transform: translateY(0%);
}
.title-enter {
  transform: translateY(200vh);
  transition: $transition;
}
.title {
  // height: 35vw;
  width: 90vw;
}
.head {
  // height: 0;
  mix-blend-mode: difference;
}
padsd .right {
  right: 0;
  margin-right: 1em;
  padding-top: 40px;
}
.left {
  margin-left: 1em;
  left: 0;
}
.subtitle {
  color: white;
  position: absolute;
  top: 0;
  width: 200px;
  text-align: left;
  h3 {
    font-family: Arial;
    font-weight: 100;
    font-size: 10px;
    position: relative;
  }
}
.ghost {
  opacity: 0;
}
.real {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
