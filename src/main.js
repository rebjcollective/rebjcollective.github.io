import Vue from "vue";
import Index from "./Index.vue";
// import printful from "./printful.js";
import prismic from "./prismic.js";
import stripe from "./stripe.js";
import router from "./router.js";
import createPersistedState from "vuex-persistedstate";
import store from "./store.js";
Vue.prototype.$key =
  // "pk_test_51JM1YmDxKraVaJRFOTA1AC1ZbIDnRHuisdjv55PXR3Gzo0DbKICWCVtpZv8je0XiGocwrJBVHRGCAqa3399R1Qtz00dX35mbKy";
  "pk_live_51JM1YmDxKraVaJRFdHmNzBN64WLl7XRs1gnbnmF93AY3FkJ3HfjVw1zkuOeQqNb6w3CRRaCZHsIoxA9ocrExjvzZ00DUhY6uPf";

Vue.config.productionTip = false;
prismic.getData().then(() => {
  new Vue({
    router,
    stripe,
    store,
    createPersistedState,
    render: (h) => h(Index),
  }).$mount("#index");
});
