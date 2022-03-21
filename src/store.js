import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    cartQuantity: 0,
  },

  mutations: {
    addToCart(state, item) {
      var isNew =
        state.cart.indexOf(state.cart.find((i) => i.price === item.obj.price)) >
        -1;
      // If item is NOT already in cart, add item
      if (!isNew) {
        state.cart.push(item.obj);
        // If item IS already in cart, update the quantity
      } else {
        state.cart.find((i) => i.price === item.obj.price).quantity += item.qty;
      }
      // If quantity hits zero
      if (state.cart.find((i) => i.price === item.obj.price).quantity === 0) {
        var idx = state.cart.indexOf(item.obj);
        console.log(idx);
        state.cart.splice(idx, 1);
      }
      if (state.cart.length > 0) {
        this.commit("updateCartQuantity", state);
      } else {
        state.cartQuantity = 0;
      }
    },
    updateCartQuantity(state) {
      state.cartQuantity = state.cart
        .map((i) => i.quantity)
        .reduce((a, b) => a + b);
    },
  },

  actions: {
    addToCart(context, item) {
      context.commit("addToCart", item);
    },
    cartQuantity(context, state) {
      context.commit("updateCartQuantity", state);
    },
  },
  plugins: [createPersistedState()],
});