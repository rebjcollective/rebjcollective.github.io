<template>
  <div class="cart">
    <div class="checkout" v-if="cart.length > 0">
      <table class="cart-row desktop">
        <tr class="header">
          <th></th>
          <th><p>Price</p></th>
          <th><p>Quantity</p></th>
          <th><p>Item</p></th>
          <th><p>Total</p></th>
          <th></th>
        </tr>
        <transition v-for="(item, i) in cart" :key="i">
          <tr class="row">
            <!-- v-if="item.quantity > 0" -->
            <td><img :src="item.img" /></td>
            <td class="price">
              <p class="price">$ {{ $cms.textField(item.cost) }}</p>
            </td>
            <td class="qty">
              <h3 class="qtyinner">{{ item.quantity }}</h3>
              <div class="qtycontrol">
                <p @click="add(i)">+</p>
                <p @click="subtract(i)">-</p>
              </div>
            </td>
            <td class="name">
              <h3>{{ $cms.textField(item.name) }}</h3>
              <p>{{ item.variation }}</p>
            </td>
            <td class="itemtotal">
              <h3>${{ item.quantity * $cms.textField(item.cost) }}</h3>
            </td>
            <td>
              <p class="x" @click="removeProduct(i)">X</p>
            </td>
          </tr>
        </transition>
      </table>

      <table class="cart-row mobile">
        <transition v-for="(item, i) in cart" :key="i">
          <div class="row">
            <div class="col">
              <img :src="item.img" />
            </div>
            <div class="col">
              <h3>{{ $cms.textField(item.name) }}</h3>
              <p>{{ item.variation }}</p>
              <h3 class="price">$ {{ $cms.textField(item.cost) }}</h3>
            </div>
            <div class="col right">
              <p class="x" @click="removeProduct(i)">X</p>
            </div>
            <br />
            <br />
            <div class="col"></div>
            <div class="col"></div>
            <div class="col right">
              <h3 class="qtyinner">{{ item.quantity }}</h3>
              <div class="qtycontrol">
                <p @click="add(i)">+</p>
                <p @click="subtract(i)">-</p>
              </div>
            </div>
          </div>
        </transition>
      </table>

      <div class="total">
        <h2>Total:</h2>
        <h2>$ {{ calcTotalPrice() }}</h2>
        <div class="checkout-button">
          <h3 @click="redirectToCheckout">Checkout</h3>
          <StripeCheckout
            :pk="$key"
            mode="payment"
            :lineItems="stripefriendlyCart()"
            :success-url="landingUrl"
            :cancel-url="cancelURL"
            ref="checkout"
          />
        </div>
      </div>
    </div>
    <div class="empty" v-else>
      <h1>Your Cart Is Empty!</h1>
      <p><a href="/">Back to Main Page</a></p>
    </div>
  </div>
</template>

<script>
import { StripeCheckout } from "@vue-stripe/vue-stripe";
import { mapState } from "vuex";
export default {
  name: "PageCart",
  watch: {},
  props: {},
  components: {
    StripeCheckout,
  },
  methods: {
    redirectToCheckout() {
      this.$refs.checkout.redirectToCheckout();
    },
    // Plus 1
    add(i) {
      this.$store.commit("addToCart", { obj: this.cart[i], qty: 1 });
    },
    // Subtract1
    subtract(i) {
      this.$store.commit("addToCart", { obj: this.cart[i], qty: -1 });
    },
    removeProduct(i) {
      this.$store.commit("addToCart", {
        obj: this.cart[i],
        qty: -this.cart[i].quantity,
      });
    },
    calcTotalPrice() {
      return this.cart
        .map((i) => parseInt(this.$cms.textField(i.cost)) * i.quantity)
        .reduce((a, b) => a + b);
    },
    stripefriendlyCart() {
      return this.cart.map((i) => {
        return {
          price: i.price,
          quantity: i.quantity,
        };
      });
    },
  },
  computed: {
    ...mapState(["cart", "cartQuantity"]),
  },
  data() {
    return {
      landingUrl: "http://collective.rebj.ca/thanks",
      cancelURL: window.location.href,
    };
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.cart {
  text-align: left;
  margin: 0 20px;
  padding-top: 120px;
  color: white;

  .qtycontrol,
  .qtyinner {
    display: inline-block;
    vertical-align: middle;
  }
  .qtycontrol {
    text-align: center;
    margin-left: 20px;
    background: white;
    padding: 5px;
    border-radius: 10px;
    p {
      color: black;
      font-size: 20px;
      cursor: pointer;
    }
  }
}
.cart-row {
  width: 100%;
  border-collapse: collapse;
}
.empty {
  text-align: center;
  margin-top: calc(50vh - 120px);
  transform: translateY(-50%);
  p {
    margin-top: 20px;
  }
}
.total {
  padding-top: 50px;
  float: right;
  h2 {
    display: inline-block;
    &:first-child {
      margin-right: 30px;
    }
  }
}
.checkout-button {
  transition: all 0.5s ease;
  &:hover {
    background: grey;
    transition: all 0.5s ease;
    h3 {
      color: white;
      transition: all 0.5s ease;
    }
  }
  padding: 20px;
  background: white;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
  h3 {
    color: black;
    text-align: center;
  }
}

.header {
  p {
    padding-bottom: 20px;
  }
}
.x {
  color: red;
  cursor: pointer;
}
@media screen and (max-width: 1000px) {
  // .price,
  // .qty {
  //   width: 50%;
  // }
  img {
    width: 100%;
  }
  tr {
    width: 100%;
    display: block;
    td {
      width: 33%;
    }
  }
  .desktop {
    display: none;
  }
  .price {
    margin-top: 10px;
  }
  .row {
    border-bottom: 1px solid white;
    padding-bottom: 20px;
  }
}
@media screen and (min-width: 1001px) {
  // .price,
  // .qty {
  //   width: 50%;
  // }
  img {
    height: 100px;
  }
  tr {
    border-bottom: 1px solid white;
  }
  .mobile {
    display: none;
  }
}
.col {
  display: inline-block;
  vertical-align: middle;
  padding-right: 20px;
  width: calc((100% / 3) - 20px);
}
.right {
  text-align: right;
}
</style>
