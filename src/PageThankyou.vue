<template>
  <div class="thanks">
    <div class="thanksinner">
      <h1>
        Thank you for your order!
      </h1>
      <p>
        Shipping should take about 1-2 weeks if in Canada, and 2-3 weeks if you
        are in the US.<br />
        If you haven't received your order by then, please
        <a href="mailto:rebjanec@gmail.com">email me.</a>
      </p>
      <p>
        <a href="/"> Go back to home page</a> <br />
        <a href="http://www.instagram.com/designbyrebj"> Instagram</a> <br />
        <a href="http://www.rebj.ca"> Main Website</a> <br />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    scrollPos: {
      type: Number,
      default: 0,
    },
    scroll: {
      type: Number,
      default: 0,
    },
  },
  name: "App",
  components: {},
  mounted() {},
  methods: {},
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
.thanksinner {
  width: 50%;
  transform: translateY(-50%);
  margin: 50vh auto 0;
}
p {
  padding-top: 20px;
  margin: auto;
  line-height: 1.5;
}
@media screen and (max-width: 800px) {
  .thanksinner {
    width: 100%;
  }
}
</style>
