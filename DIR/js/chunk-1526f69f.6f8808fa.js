(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1526f69f"],{"04c6":function(t,e,n){},1276:function(t,e,n){"use strict";var i=n("d784"),r=n("44e7"),s=n("825a"),a=n("1d80"),c=n("4840"),o=n("8aa5"),l=n("50c4"),u=n("14c3"),f=n("9263"),d=n("9f7f"),p=d.UNSUPPORTED_Y,h=[].push,g=Math.min,v=4294967295;i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(a(this)),s=void 0===n?v:n>>>0;if(0===s)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,s);var c,o,l,u=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,g=new RegExp(t.source,d+"g");while(c=f.call(g,i)){if(o=g.lastIndex,o>p&&(u.push(i.slice(p,c.index)),c.length>1&&c.index<i.length&&h.apply(u,c.slice(1)),l=c[0].length,p=o,u.length>=s))break;g.lastIndex===c.index&&g.lastIndex++}return p===i.length?!l&&g.test("")||u.push(""):u.push(i.slice(p)),u.length>s?u.slice(0,s):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=a(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,r,n):i.call(String(r),e,n)},function(t,r){var a=n(i,t,this,r,i!==e);if(a.done)return a.value;var f=s(t),d=String(this),h=c(f,RegExp),x=f.unicode,m=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(p?"g":"y"),b=new h(p?"^(?:"+f.source+")":f,m),y=void 0===r?v:r>>>0;if(0===y)return[];if(0===d.length)return null===u(b,d)?[d]:[];var _=0,E=0,w=[];while(E<d.length){b.lastIndex=p?0:E;var C,I=u(b,p?d.slice(E):d);if(null===I||(C=g(l(b.lastIndex+(p?E:0)),d.length))===_)E=o(d,E,x);else{if(w.push(d.slice(_,E)),w.length===y)return w;for(var N=1;N<=I.length-1;N++)if(w.push(I[N]),w.length===y)return w;E=_=C}}return w.push(d.slice(_)),w}]}),p)},"14c3":function(t,e,n){var i=n("c6b6"),r=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var s=n.call(t,e);if("object"!==typeof s)throw TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==i(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},"3dfd":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"app",attrs:{id:"app"}},[n("PageMain",{attrs:{scrollPos:t.scrollPos,scroll:t.scroll}})],1)},r=[],s=(n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"appinner"},[n("Intro",{attrs:{scrollPos:t.scrollPos}}),t._l(t.$apparel,(function(e,i){return n("div",{key:i,staticClass:"section"},[n("ProductCards",{attrs:{scrollPos:t.scroll?t.scroll.pos:0,idx:i,title:t.$cms.textField(e.primary.category),minitext:t.$cms.textField(e.primary.mini_text),data:e}})],1)}))],2)}),a=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"pc",staticClass:"productcards"},[n("div",{ref:"title",staticClass:"title-wrap"},[n("div",{staticClass:"title-inner",style:t.idx%2===0?"padding-bottom: 10vw":""},[n("Title",{attrs:{title:t.title,idx:t.idx+1,show:t.showTitle,minitext:t.minitext}})],1)]),n("div",{ref:"rect",staticClass:"row"},t._l(t.data.items,(function(e,i){return n("transition",{key:i},[n("div",{staticClass:"rect-container"},[n("a",{attrs:{href:t.$cms.textField(e.external_link),target:e.open_link_in_new_tab?"_blank":""}},[n("div",{ref:"rect-outer"+i,refInFor:!0,staticClass:"rect-outer",style:"margin-top: "+40*t.dir(i)+"px"},[n("transition",{attrs:{name:"rect",appear:""}},[n("div",{ref:"rect"+i,refInFor:!0,staticClass:"rect"},[n("div",{staticClass:"image",style:"background-image: url("+e.main_image.url+")"})])])],1),n("div",{staticClass:"info"},[n("transition",{attrs:{name:"rect",appear:""}},[n("div",{ref:"info"+i,refInFor:!0,staticClass:"info-inner"},[n("p",[t._v(t._s(t.$cms.textField(e.title)))]),n("p",{staticClass:"price"},[e.from?n("span",{staticClass:"small"},[t._v("from ")]):t._e(),t._v(" "+t._s(e.currency.includes("$")?"$":"")+t._s(t.$cms.textField(e.price))+" "),n("span",{staticClass:"small"},[t._v(t._s(e.currency.split("$")[1]))])])])])],1)])])])})),1)])},o=[],l=(n("a15b"),n("ac1f"),n("1276"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("div",{class:"subtitle "+(t.idx%2===0?"left":"right")},[n("h3",[n("p",{staticClass:"idx"},[t._v(t._s(t.idx))]),n("span",[t._v(t._s(t.minitext))])])]),t.word.length&&t.show?n("h2",{ref:"title",staticClass:"head real",style:"font-size: "+t.fs(t.word.length)+"px;"},t._l(t.word,(function(e,i){return n("transition",{key:i,attrs:{appear:"",name:"title"}},[n("span",{staticClass:"box",style:"display: inline-block; transition-delay:"+.05*i+"s;"},[n("span",{style:"transform: translateY("+8*i*t.dir(t.idx)+"%); display: inline-block;"},[t._v(t._s(e))])])])})),1):t._e(),n("h2",{ref:"title",staticClass:"head ghost",style:"font-size: "+t.fs(t.word.length)+"px;"},t._l(t.word,(function(e,i){return n("transition",{key:i,attrs:{appear:"",name:"title"}},[n("span",{staticClass:"box",style:"display: inline-block; transition-delay:"+.05*i+"s;"},[n("span",{style:"transform: translateY("+8*i*t.dir(t.idx)+"%); display: inline-block;"},[t._v(t._s(e))])])])})),1)])}),u=[],f={name:"Title",watch:{},props:{idx:Number,title:{type:String,default:"String"},minitext:{type:String,default:"String"},show:{type:Boolean,default:!1}},methods:{dir:function(t){return t%2===0?-1:1},titleArray:function(t){this.word=t.split("")},fs:function(t){return this.wordLength=t,window.innerWidth/t*(1+t/30)}},data:function(){return{html:"",word:[],wordLength:0}},mounted:function(){var t=this;this.titleArray(this.title),window.addEventListener("resize",(function(){for(var e=document.getElementsByClassName("real"),n=document.getElementsByClassName("ghost"),i=0;i<e.length;i++)e[i].style="font-size: ".concat(t.fs(t.wordLength),"px"),n[i].style="font-size: ".concat(t.fs(t.wordLength),"px")}))}},d=f,p=(n("4255"),n("2877")),h=Object(p["a"])(d,l,u,!1,null,"3280ccf8",null),g=h.exports,v={name:"ProductCards",components:{Title:g},watch:{scrollPos:function(t){t>=this.titlepos&&(this.showTitle=!0),t>=this.pos[this.counter]&&(this.$refs["rect".concat(this.counter)][0].className+=" rect-show",this.$refs["info".concat(this.counter)][0].className+=" info-show",this.counter+=1)}},props:{idx:Number,scrollPos:Number,title:{type:String,default:"TOP 5"},minitext:{type:String,default:"string"},data:Object},methods:{dir:function(t){return this.idx%2===0?t:this.itemcount-t},slugify:function(t){return t.toLowerCase().split(" ").join("-")}},data:function(){return{top:null,showTitle:!1,titlepos:null,showRect:!1,rectPos:null,itemcount:5,pos:[],counter:0}},mounted:function(){var t=this;this.$nextTick((function(){t.$nextTick((function(){t.titlepos=t.$refs.title.getBoundingClientRect().top-window.innerHeight,t.rectPos=(t.$refs.rect.getBoundingClientRect().top+t.$refs.rect.getBoundingClientRect().bottom)/2;for(var e=0;e<t.data.items.length;e++)t.pos.push(t.$refs["rect-outer".concat(e)][0].getBoundingClientRect().y-t.$refs["rect-outer".concat(e)][0].getBoundingClientRect().height)}))}))}},x=v,m=(n("f1c7"),Object(p["a"])(x,c,o,!1,null,"2051a4c6",null)),b=m.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"intro"},[n("div",{staticClass:"intro-text"},[n("div",{staticClass:"p-outer"},[n("transition",{attrs:{appear:"",name:"p"}},[n("h1",{key:t.activeText,domProps:{innerHTML:t._s(t.activeText)}})])],1)]),n("div",{staticClass:"overlay bg"}),n("div",{ref:"secondbg",staticClass:"secondbg"},[n("div",{staticClass:"img",style:"background-image: url("+t.$header.image_1.url+")"})]),n("div",{ref:"firstbg",staticClass:"firstbg"},[n("div",{staticClass:"img",style:"background-image: url("+t.$header.image_2.url+")"})])])},_=[],E={name:"HalfScreenImage",watch:{scrollPos:function(t){this.$refs.firstbg.style="height: ".concat(Math.min(window.innerHeight,t),"px;"),t>=window.innerHeight/2?this.activeText=this.$cms.htmlField(this.$header.text_2):this.activeText=this.$cms.htmlField(this.$header.text_1)}},props:{scrollPos:Number},methods:{},data:function(){return{maxLineHeight:window.innerHeight/10*8,lineSize:0,firstText:["<strong>WELCOME</strong> TO THE REB J COLLECTIVE."],secondText:["UNIQUELY BY <strong>THE ONE AND ONLY.</strong>"],activeText:""}},mounted:function(){this.activeText=this.$cms.htmlField(this.$header.text_1)}},w=E,C=(n("780f"),Object(p["a"])(w,y,_,!1,null,"99b557d6",null)),I=C.exports,N={props:{scrollPos:{type:Number,default:0},scroll:{type:Object,default:function(){}}},name:"App",components:{ProductCards:b,Intro:I},mounted:function(){},methods:{},data:function(){return{sections:[{title:"BASICS"}]}}},T=N,$=(n("528c"),Object(p["a"])(T,s,a,!1,null,null,null)),R=$.exports,P={name:"App",components:{PageMain:R},props:{scrollPos:{type:Number,default:0},scroll:{type:Object,default:function(){}}},mounted:function(){},methods:{},data:function(){return{sections:[{title:"BASICS"}]}}},S=P,k=(n("5c0b"),Object(p["a"])(S,i,r,!1,null,null,null));e["default"]=k.exports},4255:function(t,e,n){"use strict";n("ebcd")},"44e7":function(t,e,n){var i=n("861d"),r=n("c6b6"),s=n("b622"),a=s("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==r(t))}},"528c":function(t,e,n){"use strict";n("e757")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var i=n("1d80"),r=n("5899"),s="["+r+"]",a=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),o=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},"5c0b":function(t,e,n){"use strict";n("9c0c")},7156:function(t,e,n){var i=n("861d"),r=n("d2bb");t.exports=function(t,e,n){var s,a;return r&&"function"==typeof(s=e.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&r(t,a),t}},"780f":function(t,e,n){"use strict";n("9475")},"8aa5":function(t,e,n){"use strict";var i=n("6547").charAt;t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},9263:function(t,e,n){"use strict";var i=n("ad6d"),r=n("9f7f"),s=n("5692"),a=RegExp.prototype.exec,c=s("native-string-replace",String.prototype.replace),o=a,l=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=r.UNSUPPORTED_Y||r.BROKEN_CARET,f=void 0!==/()??/.exec("")[1],d=l||f||u;d&&(o=function(t){var e,n,r,s,o=this,d=u&&o.sticky,p=i.call(o),h=o.source,g=0,v=t;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),v=String(t).slice(o.lastIndex),o.lastIndex>0&&(!o.multiline||o.multiline&&"\n"!==t[o.lastIndex-1])&&(h="(?: "+h+")",v=" "+v,g++),n=new RegExp("^(?:"+h+")",p)),f&&(n=new RegExp("^"+h+"$(?!\\s)",p)),l&&(e=o.lastIndex),r=a.call(d?n:o,v),d?r?(r.input=r.input.slice(g),r[0]=r[0].slice(g),r.index=o.lastIndex,o.lastIndex+=r[0].length):o.lastIndex=0:l&&r&&(o.lastIndex=o.global?r.index+r[0].length:e),f&&r&&r.length>1&&c.call(r[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(r[s]=void 0)})),r}),t.exports=o},9475:function(t,e,n){},"9c0c":function(t,e,n){},"9f7f":function(t,e,n){"use strict";var i=n("d039");function r(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=i((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=i((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a15b:function(t,e,n){"use strict";var i=n("23e7"),r=n("44ad"),s=n("fc6a"),a=n("a640"),c=[].join,o=r!=Object,l=a("join",",");i({target:"Array",proto:!0,forced:o||!l},{join:function(t){return c.call(s(this),void 0===t?",":t)}})},a640:function(t,e,n){"use strict";var i=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&i((function(){n.call(null,e||function(){throw 1},1)}))}},a9e3:function(t,e,n){"use strict";var i=n("83ab"),r=n("da84"),s=n("94ca"),a=n("6eeb"),c=n("5135"),o=n("c6b6"),l=n("7156"),u=n("c04e"),f=n("d039"),d=n("7c73"),p=n("241c").f,h=n("06cf").f,g=n("9bf2").f,v=n("58a8").trim,x="Number",m=r[x],b=m.prototype,y=o(d(b))==x,_=function(t){var e,n,i,r,s,a,c,o,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=v(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+l}for(s=l.slice(2),a=s.length,c=0;c<a;c++)if(o=s.charCodeAt(c),o<48||o>r)return NaN;return parseInt(s,i)}return+l};if(s(x,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var E,w=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof w&&(y?f((function(){b.valueOf.call(n)})):o(n)!=x)?l(new m(_(e)),n,w):_(e)},C=i?p(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),I=0;C.length>I;I++)c(m,E=C[I])&&!c(w,E)&&g(w,E,h(m,E));w.prototype=b,b.constructor=w,a(r,x,w)}},ac1f:function(t,e,n){"use strict";var i=n("23e7"),r=n("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(t,e,n){"use strict";var i=n("825a");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,n){"use strict";n("ac1f");var i=n("6eeb"),r=n("9263"),s=n("d039"),a=n("b622"),c=n("9112"),o=a("species"),l=RegExp.prototype,u=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){return"$0"==="a".replace(/./,"$0")}(),d=a("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),h=!s((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var g=a(t),v=!s((function(){var e={};return e[g]=function(){return 7},7!=""[t](e)})),x=v&&!s((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[g]=/./[g]),n.exec=function(){return e=!0,null},n[g](""),!e}));if(!v||!x||"replace"===t&&(!u||!f||p)||"split"===t&&!h){var m=/./[g],b=n(g,""[t],(function(t,e,n,i,s){var a=e.exec;return a===r||a===l.exec?v&&!s?{done:!0,value:m.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),y=b[0],_=b[1];i(String.prototype,t,y),i(l,g,2==e?function(t,e){return _.call(t,this,e)}:function(t){return _.call(t,this)})}d&&c(l[g],"sham",!0)}},e757:function(t,e,n){},ebcd:function(t,e,n){},f1c7:function(t,e,n){"use strict";n("04c6")}}]);
//# sourceMappingURL=chunk-1526f69f.6f8808fa.js.map