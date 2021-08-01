import Vue from "vue";
import App from "./App.vue";
// import printful from "./printful.js";
import prismic from "./prismic.js";

// printful.getData().then(() => {
Vue.config.productionTip = false;
prismic.getData().then(() => {
  new Vue({
    render: (h) => h(App),
  }).$mount("#app");
});

// });
