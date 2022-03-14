import Vue from "vue";
import VueRouter from "vue-router";

// Because Vue is not global we tie Vue
// and VueRouter together manually
Vue.use(VueRouter);

// Initialize router
const router = new VueRouter({
  base: "",
  mode: "history",
  routes: [
    {
      path: "",
      component: () => import("./App.vue"),
      name: "app",
    },
    {
      path: "/thanks",
      component: () => import("./PageThankyou.vue"),
      name: "Thankyou",
    },
    {
      path: "/:slug?",
      component: () => import("./PageProduct.vue"),
      name: "pageproduct",
    },
    {
      path: "*",
      component: () => import("./Landing.vue"),
      name: "landing",
    },
  ],
});

export default router;
