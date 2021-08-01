<template>
  <div id="footer">
    <div class="footer-inner">
      <p v-for="(item, i) in link" :key="i">
        <a :href="item.link">{{ item.text }}</a>
      </p>
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
      link: [
        {
          text: "instagram",
          link: "www.instagram.com/the.rebj",
        },
        {
          text: "facebook",
          link: "www.instagram.com/the.rebj",
        },
      ],
    };
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#footer {
  height: 20vh;
  text-align: left;
  text-transform: uppercase;
  font-size: 10px;
}
a {
  color: white;
  text-decoration: none;
}
.footer-inner {
  width: 50%;
  margin-left: auto;
}
p {
  margin-bottom: 20px;
}
</style>
