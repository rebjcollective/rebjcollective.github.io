(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b4fce76"],{"45a6":function(n,t,e){},"8f5c":function(n,t,e){"use strict";e.r(t);var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ref:"landing",style:"background-image: url("+(n.$header.background_image.url?n.$header.background_image.url:"")+")",attrs:{id:"landing"}},[n._v(" 404 ")])},s=[],l=e("c671"),o={name:"App",components:{},mounted:function(){var n=this;this.initScroll(),this.$nextTick((function(){n.$nextTick((function(){n.scroll=new l["a"](n.$refs.landing)}))}))},methods:{initScroll:function(){window.addEventListener("mousewheel",this.mouseScroll)},mouseScroll:function(n){this.scrollPos+=n.deltaY,this.scrollPos=Math.max(this.scrollPos,0),this.scrollPos>=window.innerHeight?(this.$refs.view.style="height: 100%",this.scroll.listen()):this.scroll.pos<=window.innerHeight/6&&(this.$refs.view.style="height: 100vh",this.scroll.deafen())}},data:function(){return{sections:[{title:"BASICS"}],scrollPos:0,scroll:null}}},c=o,r=(e("c4d5"),e("2877")),a=Object(r["a"])(c,i,s,!1,null,null,null);t["default"]=a.exports},c4d5:function(n,t,e){"use strict";e("45a6")}}]);
//# sourceMappingURL=chunk-7b4fce76.b06a6179.js.map