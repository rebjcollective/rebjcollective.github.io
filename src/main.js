import Vue from "vue";
import Index from "./Index.vue";
// import printful from "./printful.js";
import prismic from "./prismic.js";
import stripe from "./stripe.js";
import router from "./router.js";

// printful.getData().then(() => {
Vue.config.productionTip = false;
prismic.getData().then(() => {
  new Vue({
    router,
    stripe,
    render: (h) => h(Index),
  }).$mount("#index");
});

// });
