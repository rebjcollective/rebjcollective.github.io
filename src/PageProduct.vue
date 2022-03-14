<template>
  <div class="pageproduct">
    <div class="activeApparel" v-if="activeApparel">
      <div class="image">
        <img :src="activeApparel.main_image.url" />
      </div>

      <div class="info">
        <h2>{{ $cms.textField(activeApparel.title) }}</h2>
        <p class="desc">{{ $cms.textField(activeApparel.description) }}</p>
        <h3 class="price">
          <span class="small" v-if="activeApparel.from">from </span> ${{
            $cms.textField(activeApparel.price)
          }}
          CAD
        </h3>
        <div
          class="options"
          v-html="$cms.htmlField(activeApparel.variations)"
        ></div>

        <br />
        <!-- <h1 class="button" @click="showForm = true">Purchase</h1> -->
        <!-- <form v-if="showForm">
            <p>Please enter your name.</p>
            <input type="text" placeholder="Name"/> <br/>
            <p>Please enter your email so we may send you a copy of your receipt</p>
            <input type="text" placeholder="Email"/><br/>
            </form> -->
        <div
          class="pay button"
          @click="redirectToCheckout"
          v-if="this.$cms.textField(this.activeApparel.id)"
        >
          <h1>Purchase</h1>
        </div>

        <StripeCheckout
          v-if="lineItems.length && $cms.textField(this.activeApparel.id)"
          :pk="key"
          mode="payment"
          :lineItems="lineItems"
          :success-url="landingUrl"
          :cancel-url="cancelURL"
          ref="checkout"
        />

        <br />
      </div>
      <!-- <div class="about section">
        <p>dsadsaddadsaddad</p>
      </div> -->
      <!-- <p>{{$apparel[0].items}}</p> -->
    </div>
  </div>
</template>

<script>
import { StripeCheckout } from "@vue-stripe/vue-stripe";
export default {
  props: {
    scrollPos: {
      type: Number,
      default: 0,
    },
    scroll: {
      type: Object,
      default: () => {},
    },
  },
  name: "App",
  components: {
    StripeCheckout,
  },
  mounted() {
    this.$apparel.forEach((i) => {
      i.items.forEach((j) => {
        if (this.checkSlug(this.$cms.textField(j.title))) {
          this.activeApparel = j;
        }
      });
    });
    console.log();

    // this.activeApparel = this.$apparel[idx].items.filter((i) => {
    //   return (
    //     this.$cms
    //       .textField(i.title)
    //       .toLowerCase()
    //       .split(" ")
    //       // .join("-") === window.location.hash.split("/")[2]
    //       .join("-") === window.location.pathname.split("/")[2]
    //   );
    // })[0];

    this.lineItems.push({
      price: this.$cms.textField(this.activeApparel.id).toString(),
      quantity: 1,
    });
  },
  methods: {
    checkSlug(title) {
      return (
        title
          .toLowerCase()
          .split(" ")
          // .join("-") === window.location.hash.split("/")[2]
          .join("-") === window.location.pathname.split("/")[1]
      );
    },
    redirectToCheckout() {
      this.$refs.checkout.redirectToCheckout();
    },
  },
  data() {
    return {
      activeApparel: null,
      key:
        "pk_test_51JM1YmDxKraVaJRFOTA1AC1ZbIDnRHuisdjv55PXR3Gzo0DbKICWCVtpZv8je0XiGocwrJBVHRGCAqa3399R1Qtz00dX35mbKy",
      lineItems: [],
      cancelURL: window.location.href,
      landingUrl: "http://localhost:8080/thanks",
      showForm: false,
      //   scrollPos: 0,
    };
  },
};
</script>

<style lang="scss">
@import "./main.scss";

img {
  width: 100%;
  text-align: left;
}
.button {
  color: black;
  background: white;
  h1 {
    color: black;
  }
  display: inline-block;
  padding: 20px;
  border-radius: 20px;
  cursor: pointer;
}
@media screen and (min-width: 601px) {
  .activeApparel {
    margin-top: 50vh;
    transform: translateY(-50%);
  }
  .image,
  .info {
    display: inline-block;
    vertical-align: middle;
    text-align: left;
  }
  .image {
    width: 50%;
    height: auto;
  }
  .info {
    margin: 0 40px;
    width: calc(50% - 80px);
  }
}
@media screen and (max-width: 600px) {
  .info {
    width: calc(100% - 40px);
    margin: 20px 20px 0;
  }
  .activeApparel {
    padding-top: 100px;
  }
}

.price {
  padding: 60px 0 60px;
  font-size: 20px;
}
.pageproduct {
  min-height: 100vh;
}
.section {
  min-height: 100vh;
}
h2 {
  font-size: 40px;
}
.options {
  width: 100%;
  p {
    display: inline-block;
    background: white;
    color: black;
    margin: 4px;
    padding: 10px;
    border-radius: 10px;
    font-family: Conglomerate;
  }
  a {
    text-decoration: none;
    color: black;
  }
}
.small {
  font-size: 14px;
}
.desc {
  margin-top: 20px;
}
</style>
