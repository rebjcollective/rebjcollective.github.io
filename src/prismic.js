import Vue from "vue";
var PrismicDOM = require("prismic-dom");

// import Vue from "vue";
var p = require("@prismicio/client").default;
export default new (class Prismic {
  constructor() {}
  getData() {
    return new Promise((resolved) => {
      p.api("https://rebjcollective.cdn.prismic.io/api/v2")
        .then((api) => {
          return api.query("");
        })
        .then((res) => {
          Vue.prototype.$apparel = res.results.filter(
            (i) => i.type === "apparel"
          )[0].data.body;

          Vue.prototype.$header = res.results.filter(
            (i) => i.type === "header"
          )[0].data;
          resolved();
        });
    });
  }
})();

Vue.prototype.$cms = new (class CMSModule {
  text(field) {
    return PrismicDOM.RichText.asText(this.fields[field]);
  }

  textField(field) {
    return PrismicDOM.RichText.asText(field);
  }

  html(field) {
    return PrismicDOM.RichText.asHtml(this.fields[field]);
  }

  htmlField(field) {
    return PrismicDOM.RichText.asHtml(field);
  }
})();
