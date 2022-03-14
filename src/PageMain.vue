<template>
  <div class="appinner">
      <!-- <div class="view" ref="view"> -->
        <Intro :scrollPos="scrollPos" />
        <div class="section" v-for="(item, i) in $apparel" :key="i">
          <ProductCards
            :scrollPos="scroll ? scroll.pos : 0"
            :idx="i"
            :title="$cms.textField(item.primary.category)"
            :minitext="$cms.textField(item.primary.mini_text)"
            :data="item"
          />
        </div>
      <!-- </div> -->
    </div>
</template>

<script>
import ProductCards from "./components/ProductCards.vue";
import Intro from "./components/Intro.vue";

export default {
props: {
    scrollPos: {
        type: Number,
        default: 0
    },
    scroll: {
        type: Object,
        default: ()=>{}
    }
},
  name: "App",
  components: {
    ProductCards,
    Intro,
  },
  mounted() {
  },
  methods: {

  },
  data() {
    return {
      sections: [
        {
          title: "BASICS",
        },
      ],
    //   scrollPos: 0,
    };
  },
};
</script>

<style lang="scss">
@import "./main.scss";

</style>
