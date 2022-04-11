<template>
  <div class="header">
    <a href="/"> <Logo class="logo" ref="logo"/></a>
    <div :class="`cart ${animClass}`">
      <a href="/cart"
        ><i class="fa fa-shopping-cart" style="font-size:30px"></i>
        <p class="cartqty">{{ cartQuantity }}</p>
      </a>
    </div>
  </div>
</template>

<script>
import Logo from "./Logo.vue";
import { mapState } from "vuex";
export default {
  name: "Header",
  components: {
    Logo,
  },
  computed: {
    ...mapState(["cart", "cartQuantity"]),
  },
  watch: {
    cartQuantity() {
      this.animClass = `animate`;
      setTimeout(() => {
        this.animClass = ``;
      }, 500);
    },
  },
  props: {},
  methods: {},
  data() {
    return {
      animClass: ``,
    };
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.cart {
  position: fixed;
  top: 0;
  right: 0;
  margin: 20px 40px;
  i {
    color: white;
  }
}
.header {
  width: 100%;
}
a {
  text-decoration: none;
}
.cartqty {
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateX(80%) translateY(80%);
  background: red;
  border-radius: 10px;
  padding: 4px;
  font-size: 12px;
  width: auto;
  height: 10px;
  line-height: 0.75;
}
.cart {
  transform: scale(1);
  transition: all 0.5s ease-in-out;
}
.animate {
  transform: scale(1.5);
  transition: all 0.5s ease-in-out;
}
</style>
