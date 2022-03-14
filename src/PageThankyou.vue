<template>
  <div class="thanks">
      <div class="thanksinner">
          <h1>Thank you!</h1>
          </div>
    </div>
</template>

<script>

export default {
props: {
    scrollPos: {
        type: Number,
        default: 0
    },
    scroll: {
        type: Number,
        default: 0
    }
},
  name: "App",
  components: {
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
.thanksinner {
    padding-top: 100px;
}
</style>
