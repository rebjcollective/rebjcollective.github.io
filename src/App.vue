<template>
  <div id="app" ref="app">
    <!-- <div ref="view" class="view"> -->
    <PageMain :scrollPos="scrollPos" :scroll="scroll"/>
    <Footerr ref="footer" class="footer"/>
    <!-- </div> -->
  </div>
</template>

<script>
import PageMain from "./PageMain.vue";
import Footerr from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    PageMain,
    Footerr,

  },
  props: {
    scrollPos: {
      type: Number,
      default: 0
    },
    scroll: {
      type: Object,
      default: () => {}
    }
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
    };
  },
};
</script>

<style lang="scss">
@import "./main.scss";

</style>
