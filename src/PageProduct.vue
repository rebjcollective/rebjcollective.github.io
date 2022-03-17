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
          <span class="small" v-if="activeApparel.from">from </span>
          {{ activeApparel.currency.includes("$") ? "$" : ""
          }}{{ $cms.textField(activeApparel.price) }}
          <span class="small">{{ activeApparel.currency.split("$")[1] }}</span>
        </h3>
        <div class="dropdown" v-if="stripeVariations.length && active">
          <h3>Size</h3>
          <div id="prompt" @click="showInnerDropdown = !showInnerDropdown">
            <div :class="`chevron ${showInnerDropdown ? `up` : `down`}`">▼</div>
            <h4>
              {{ active.variation }}
            </h4>
          </div>
          <div class="inner" v-show="showInnerDropdown">
            <p
              v-for="(item, i) in stripeVariations"
              :key="i"
              @click="updateActiveVariation(i)"
            >
              {{ item.variation }}
            </p>
          </div>
        </div>

        <br />
        <!-- <h1 class="button" @click="showForm = true">Purchase</h1> -->
        <!-- <form v-if="showForm">
            <p>Please enter your name.</p>
            <input type="text" placeholder="Name"/> <br/>
            <p>Please enter your email so we may send you a copy of your receipt</p>
            <input type="text" placeholder="Email"/><br/>
            </form> -->
        <div class="pay button" @click="redirectToCheckout" v-if="active.code">
          <h1>Purchase</h1>
        </div>

        <StripeCheckout
          v-if="lineItems.length && active.code"
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
    if (!this.activeApparel) {
      window.location.href = "/";
    }
    this.initiateVariations();

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
      price: this.active.code,
      quantity: 1,
    });
  },
  methods: {
    updateActiveVariation(i) {
      this.showInnerDropdown = false;
      this.active = this.stripeVariations[i];
    },
    initiateVariations() {
      this.stripeVariations = this.activeApparel.variations.map((i) => {
        return {
          variation: i.text.split(",")[0],
          code: i.text.split(",")[1],
        };
      });
      this.active = this.stripeVariations[0];
    },
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
        // "pk_test_51JM1YmDxKraVaJRFOTA1AC1ZbIDnRHuisdjv55PXR3Gzo0DbKICWCVtpZv8je0XiGocwrJBVHRGCAqa3399R1Qtz00dX35mbKy"
        "pk_live_51JM1YmDxKraVaJRFdHmNzBN64WLl7XRs1gnbnmF93AY3FkJ3HfjVw1zkuOeQqNb6w3CRRaCZHsIoxA9ocrExjvzZ00DUhY6uPf",
      lineItems: [],
      cancelURL: window.location.href,
      landingUrl: "http://collective.rebj.ca/thanks",
      showForm: false,
      stripeVariations: [],
      active: null,
      showInnerDropdown: false,
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
// This is the buttons
// .options {
//   width: 100%;
//   p {
//     display: inline-block;
//     background: white;
//     color: black;
//     margin: 4px;
//     padding: 10px;
//     border-radius: 10px;
//     font-family: Conglomerate;
//   }
//   a {
//     text-decoration: none;
//     color: black;
//   }
// }
.small {
  font-size: 14px;
}
.desc {
  margin-top: 20px;
}

.inner {
  position: absolute;
  width: 100%;
  padding: 10px 0;
  background: white;
  p {
    cursor: pointer;
    padding: 10px;
    transition: all 0.25s ease;
    color: black;
    &:hover {
      background: lightgrey;
      transition: all 0.25s ease;
    }
  }
}
.dropdown {
  width: 50%;
  position: relative;
}
#prompt {
  background: white;
  position: relative;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  h4 {
    color: black;
  }
  .chevron {
    position: absolute;
    right: 0;
    top: 50%;
    transform-origin: center;
    transform: translateY(-50%);
    transition: all 0.25s ease;
    pointer-events: none;
  }
  .down {
    padding-right: 10px;
    transition: all 0.25s ease;
  }
  .up {
    padding-left: 10px;
    transform: translateY(-50%) rotate(180deg);
    transition: all 0.25s ease;
    transform-origin: center;
  }
}
</style>
