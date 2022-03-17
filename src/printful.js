import Vue from "vue";

const axios = require("axios").default;
const key = "dmQ5OHd3Y3QtMjZsNS13Z2RhOmw2ZGstZm94YnhnOWM4MHB1";
var apiURL = "http://localhost:8010/proxy"; //Remember to change to api.printful.com before deploy

export default new (class Printful {
  constructor() {}
  getData() {
    var t = this;
    return new Promise((res) => {
      Promise.all([t.storeinfo(), t.products()]).then(() => {
        res();
      });
    });
  }
  async storeinfo() {
    return new Promise((res) => {
      axios
        .get(`${apiURL}/orders`, {
          headers: {
            Authorization: `Basic ${key}`,
          },
        })
        .then((res) => {
          return res.data.result;
        })
        .then((data) => {
          // console.log(data);
          // res(data);
        });
    });
  }
  async products() {
    return new Promise((res) => {
      axios
        .get(`${apiURL}/store/products`, {
          headers: {
            Authorization: `Basic ${key}`,
          },
        })
        .then((res) => {
          return res.data.result;
        })
        .then((data) => {
          Vue.prototype.$products = data;
          console.log(Vue.prototype.$products);
          res(data);
        });
    });
  }
})();
