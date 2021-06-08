<template>
  <div class="title">
      <h2 ref="title" v-if="word.length && show" :style="`font-size: ${fs(word.length)}px;`">
          <transition v-for="(item, i) in word" :key="i" appear name="title">
              <span class="box" :style="`display: inline-block; transition-delay:${i * .05}s;`">
                <span :style="`transform: translateY(${i*8}%); display: inline-block;`">{{item}}</span>
              </span>
          </transition>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'Title',
  watch: {
  },
  props: {
    title: {
        type: String,
        default: "String"
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
      titleArray(e) {
        this.word = e.split("");
      },
      fs(wordLength) {
        // console.log(400, window.innerWidth, wordLength, window.innerWidth / wordLength);
        //font size, window size, window size / characters.
        //fs = (window size / characters) * 1.6;
        // 1.6
        return (window.innerWidth / wordLength) * (1 + (wordLength/30));
      }
  },
  data() {
    return {
        html: "",
        word:[]
    }
  },
  mounted() {
    this.titleArray(this.title);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

$transition: all 1000ms cubic-bezier(0.85, 0.005, 0.065, 1); /* custom */
h2 {
    overflow: hidden;
    position: relative;
    white-space: nowrap;
    height: 35vw;
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
  height: 35vw;
}
</style>
