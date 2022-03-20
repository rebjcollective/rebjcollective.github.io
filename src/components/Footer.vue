<template>
  <div id="footer">
    <div class="footer-inner">
      <transition v-for="(item, i) in $footer.footer" :key="i">
        <a :href="$cms.textField(item.link)" target="_blank"
          ><p v-html="$cms.textField(item.text)"></p
        ></a>
      </transition>
    </div>
    <div class="copyright" v-if="currentyear">
      <span
        >Copyright © {{ currentyear }} Reb J Collective. All Rights
        Reserved.</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "HalfScreenImage",
  watch: {},
  props: {},
  methods: {},
  data() {
    return {
      currentyear: null,
    };
  },
  mounted() {
    this.currentyear = new Date().toString().split(" ")[3];
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#footer {
  min-height: 20vh;
  text-align: center;
  font-size: 30px;
}
a,
span {
  color: white;
  text-decoration: none;
}
.footer-inner {
  padding: 15vh 100px;
  border-top: 1px solid lightgrey;
  width: auto;
  @media screen and (min-width: 1001px) {
    column-count: 2;
  }
  @media screen and (max-width: 1000px) {
    column-count: 1;
  }
  text-transform: uppercase;
}
p {
  margin-bottom: 20px;
  line-height: 3;
}
span {
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
}
.copyright {
  padding-bottom: 20px;
}
</style>
