(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f80b63e"],{"0e1f":function(t,c,a){},"186f":function(t,c,a){"use strict";a.r(c);var i=function(){var t=this,c=t.$createElement,a=t._self._c||c;return a("div",{staticClass:"cart"},[t.cart.length>0?a("div",{staticClass:"checkout"},[a("table",{staticClass:"cart-row desktop"},[t._m(0),t._l(t.cart,(function(c,i){return a("transition",{key:i},[a("tr",{staticClass:"row"},[a("td",[a("img",{attrs:{src:c.img}})]),a("td",{staticClass:"price"},[a("p",{staticClass:"price"},[t._v("$ "+t._s(t.$cms.textField(c.cost)))])]),a("td",{staticClass:"qty"},[a("h3",{staticClass:"qtyinner"},[t._v(t._s(c.quantity))]),a("div",{staticClass:"qtycontrol"},[a("p",{on:{click:function(c){return t.add(i)}}},[t._v("+")]),a("p",{on:{click:function(c){return t.subtract(i)}}},[t._v("-")])])]),a("td",{staticClass:"name"},[a("h3",[t._v(t._s(t.$cms.textField(c.name)))]),a("p",[t._v(t._s(c.variation))])]),a("td",{staticClass:"itemtotal"},[a("h3",[t._v("$"+t._s(c.quantity*t.$cms.textField(c.cost)))])]),a("td",[a("p",{staticClass:"x",on:{click:function(c){return t.removeProduct(i)}}},[t._v("X")])])])])}))],2),a("table",{staticClass:"cart-row mobile"},t._l(t.cart,(function(c,i){return a("transition",{key:i},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("img",{attrs:{src:c.img}})]),a("div",{staticClass:"col"},[a("h3",[t._v(t._s(t.$cms.textField(c.name)))]),a("p",[t._v(t._s(c.variation))]),a("h3",{staticClass:"price"},[t._v("$ "+t._s(t.$cms.textField(c.cost)))])]),a("div",{staticClass:"col right"},[a("p",{staticClass:"x",on:{click:function(c){return t.removeProduct(i)}}},[t._v("X")])]),a("br"),a("br"),a("div",{staticClass:"col"}),a("div",{staticClass:"col"}),a("div",{staticClass:"col right"},[a("h3",{staticClass:"qtyinner"},[t._v(t._s(c.quantity))]),a("div",{staticClass:"qtycontrol"},[a("p",{on:{click:function(c){return t.add(i)}}},[t._v("+")]),a("p",{on:{click:function(c){return t.subtract(i)}}},[t._v("-")])])])])])})),1),a("div",{staticClass:"total"},[a("h2",[t._v("Total:")]),a("h2",[t._v("$ "+t._s(t.calcTotalPrice()))]),a("div",{staticClass:"checkout-button"},[a("h3",{on:{click:t.redirectToCheckout}},[t._v("Checkout")]),a("StripeCheckout",{ref:"checkout",attrs:{pk:t.$key,mode:"payment",lineItems:t.stripefriendlyCart(),"success-url":t.landingUrl,"cancel-url":t.cancelURL}})],1)])]):a("div",{staticClass:"empty"},[a("h1",[t._v("Your Cart Is Empty!")]),t._m(1)])])},s=[function(){var t=this,c=t.$createElement,a=t._self._c||c;return a("tr",{staticClass:"header"},[a("th"),a("th",[a("p",[t._v("Price")])]),a("th",[a("p",[t._v("Quantity")])]),a("th",[a("p",[t._v("Item")])]),a("th",[a("p",[t._v("Total")])]),a("th")])},function(){var t=this,c=t.$createElement,a=t._self._c||c;return a("p",[a("a",{attrs:{href:"/"}},[t._v("Back to Main Page")])])}],e=a("5530"),r=(a("d81d"),a("acaf")),n=a("2f62"),o={name:"PageCart",watch:{},props:{},components:{StripeCheckout:r["StripeCheckout"]},methods:{redirectToCheckout:function(){this.$refs.checkout.redirectToCheckout()},add:function(t){this.$store.commit("addToCart",{obj:this.cart[t],qty:1}),console.log(this.cart.map((function(t){return{price:t.price,quantity:t.quantity}})))},subtract:function(t){this.$store.commit("addToCart",{obj:this.cart[t],qty:-1})},removeProduct:function(t){this.$store.commit("addToCart",{obj:this.cart[t],qty:-this.cart[t].quantity})},calcTotalPrice:function(){var t=this;return this.cart.map((function(c){return parseInt(t.$cms.textField(c.cost))*c.quantity})).reduce((function(t,c){return t+c}))},stripefriendlyCart:function(){return this.cart.map((function(t){return{price:t.price,quantity:t.quantity}}))}},computed:Object(e["a"])({},Object(n["b"])(["cart","cartQuantity"])),data:function(){return{landingUrl:"http://collective.rebj.ca/thanks",cancelURL:window.location.href}},mounted:function(){}},l=o,u=(a("b706"),a("2877")),d=Object(u["a"])(l,i,s,!1,null,"54b901ce",null);c["default"]=d.exports},b706:function(t,c,a){"use strict";a("0e1f")}}]);
//# sourceMappingURL=chunk-3f80b63e.f804411b.js.map