(function(t){function e(e){for(var a,r,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)r=s[u],o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);m&&m(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"459de12a","chunk-56a42130":"ac8a18ca","chunk-9315a4a6":"dace4f88","chunk-3c8208ea":"d3b045dc"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1,"chunk-56a42130":1,"chunk-9315a4a6":1,"chunk-3c8208ea":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"d48d8975","chunk-56a42130":"5975d954","chunk-9315a4a6":"70932134","chunk-3c8208ea":"9158dca5"}[t]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===o)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],m.parentNode.removeChild(m),n(i)},m.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(m)}).then(function(){r[t]=0}));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise(function(e,n){a=o[t]=[e,n]});e.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t),l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,n[1](i)}o[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"0a53":function(t,e,n){"use strict";var a=n("7582"),r=n.n(a);r.a},"4d9d":function(t,e,n){"use strict";var a=n("f5b8"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mdb-container",{attrs:{fluid:"",id:"app"}},[n("vue-particles",{staticStyle:{height:"100%",width:"100%",position:"absolute"},attrs:{color:"#dedede",particleSize:3,hoverEffect:!1,clickEffect:!1,lineLinked:!0}}),n("Navbar"),n("router-view"),n("Footer")],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mdb-navbar",{staticClass:"blue",staticStyle:{background:"#092133 !important"},attrs:{dark:"",position:"top",scrolling:"",scrollingOffset:20}},[n("mdb-navbar-brand",{staticStyle:{"font-weight":"bolder"},attrs:{to:"/",waves:""}},[t._v(t._s(t.title))]),n("mdb-navbar-toggler",[n("mdb-navbar-nav",{attrs:{right:""}},t._l(t.navigation,function(t,e){return n("NavLink",{key:e,attrs:{navItem:t}})}),1)],1)],1)},s=[],c=n("7b6a"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.navItem.external?n("mdb-nav-item",{attrs:{href:t.navItem.link}},[t._v(t._s(t.navItem.text))]):n("mdb-nav-item",{attrs:{to:t.navItem.link}},[t._v(t._s(t.navItem.text))])},u=[],d=(n("96d3"),{name:"NavLink",props:["navItem"],components:{mdbNavItem:c["o"]}}),m=d,f=(n("bfd7"),n("2877")),p=Object(f["a"])(m,l,u,!1,null,"d6e3aa70",null),b=p.exports,v={name:"Navbar",components:{NavLink:b,mdbNavbar:c["p"],mdbNavItem:c["o"],mdbNavbarNav:c["r"],mdbNavbarToggler:c["s"],mdbNavbarBrand:c["q"],mdbFooter:c["i"]},data:function(){return{title:"Achilles Moraites",navigation:[{text:"Home",link:"/",external:!1},{text:"Projects",link:"/projects",external:!1}]}},mounted:function(){this.navigation=this.$store.getters.getNavItems}},h=v,g=Object(f["a"])(h,i,s,!1,null,null,null),y=g.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mdb-footer",{staticClass:"font-small pt-0 mt-4",staticStyle:{"background-color":"#092133 !important"}},[n("mdb-container",{attrs:{fluid:""}},[n("div",[n("ul",{staticClass:"pt-3 list-unstyled list-inline"},[n("li",{staticClass:"btn-circle list-inline-item"},[n("a",{staticClass:"btn-sm btn-tw mx-1",attrs:{href:"https://twitter.com/achimoraites",target:"_blank"}},[n("i",{staticClass:"fab circle-font fa-twitter"})])]),n("li",{staticClass:"btn-circle list-inline-item"},[n("a",{staticClass:"btn-sm btn-li mx-1",attrs:{href:"https://www.linkedin.com/in/achimoraitis/",target:"_blank"}},[n("i",{staticClass:"fab circle-font fa-linkedin-in"})])])])])]),n("div",{staticClass:"footer-copyright text-center py-3"},[n("mdb-container",{attrs:{fluid:""}},[t._v("\n      © 2019 Copyright:\n      "),n("a",{attrs:{href:"#"}},[t._v("Achilles Moraites")])])],1)],1)},w=[],_={title:"Footer",components:{mdbFooter:c["i"],mdbContainer:c["h"],mdbRow:c["t"],mdbCol:c["g"]}},x=_,S=(n("0a53"),Object(f["a"])(x,k,w,!1,null,null,null)),C=S.exports,N={name:"App",components:{Navbar:y,Footer:C,mdbContainer:c["h"]}},j=N,E=(n("034f"),Object(f["a"])(j,r,o,!1,null,null,null)),A=E.exports,I=(n("cabf"),n("9483"));Object(I["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var O=n("8c4f"),M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Intro"),n("Me",{attrs:{id:"about"}})],1)},B=[],L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"intro"}},[n("div",{staticClass:"text-white text-center py-5 px-4 my-5",attrs:{id:"jumbotron"}},[n("div",[t._m(0),n("h3",{staticClass:"mx-5 mb-5 h2-responsive"},[t._v("Full Stack Developer")]),n("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],attrs:{href:"#about"}},[n("mdb-btn",{attrs:{outline:"white",size:"md"}},[t._v("About me")])],1)])])])},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"card-title h1-responsive pt-3 mb-1 font-bold"},[n("strong",[t._v("Achilles Moraites")])])}],F={name:"Intro",components:{mdbCard:c["b"],mdbBtn:c["a"]}},$=F,D=(n("4d9d"),Object(f["a"])($,L,P,!1,null,"60742dcc",null)),T=D.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("mdb-container",{staticStyle:{color:"#fff"},attrs:{fluid:""}},[a("h2",{staticStyle:{background:"rgb(10, 48, 56)","max-width":"1200px",margin:"0 auto"}},[t._v("About")]),a("mdb-row",{staticStyle:{"max-width":"1200px",background:"rgb(6, 22, 35)",margin:"0 auto"}},[a("mdb-col",{staticStyle:{"margin-bottom":"1em"},attrs:{md:"4"}},[a("img",{staticClass:"img-fluid",staticStyle:{height:"30vh",margin:"1em"},attrs:{src:n("915e"),alt:""}})]),a("mdb-col",{staticStyle:{"margin-bottom":"1em",color:"white","text-align":"left",display:"flex","align-items":"center"},attrs:{md:"8"}},[a("mdb-container",{staticStyle:{"font-size":"1.2rem"}},[a("p",[t._v("Hi! I am a self taught Web Developer , a Network Engineer , a Nature Lover and a curious individual.")]),a("p",[t._v("\n          My strong points include modular design of applications that are simple yet reusable, i keep always an eye in the latest trends\n          and best practices in software development.\n        ")])])],1)],1),a("h2",{staticStyle:{background:"rgb(39, 55, 62)","max-width":"1200px",margin:"0 auto"}},[t._v("Skills")]),a("mdb-row",{staticStyle:{"max-width":"1200px",margin:"0 auto"}},[a("mdb-col",{staticStyle:{background:"rgb(12, 40, 62)",padding:"0.2rem"}},[a("div",[a("h4",[t._v("Front End")]),a("p",[t._v("In the front end i have experience using AngularJS, ReactJS, VueJS and Native Android development with Android Studio")]),a("p",[t._v("CSS Frameworks: Bootstrap 3 and 4, Vuetify, MDBootstrap")])])]),a("mdb-col",{staticStyle:{background:"rgb(6, 22, 35)",padding:"0.2rem"}},[a("div",[a("h4",[t._v("Back End")]),a("p",[t._v("NodeJS both in server and serveless implementations (AWS) and Java")]),a("p",[t._v("Relational DBs : MySQL, PostgresSQL and SQLite.")]),a("p",[t._v("Non-relational: MongoDB and Amazon DynamoDB")])])])],1)],1)},H=[],q={name:"Me",components:{mdbContainer:c["h"],mdbRow:c["t"],mdbCol:c["g"]}},z=q,R=Object(f["a"])(z,J,H,!1,null,null,null),Q=R.exports,V={name:"Home",components:{Intro:T,Me:Q}},W=V,K=Object(f["a"])(W,M,B,!1,null,null,null),U=K.exports;a["default"].use(O["a"]);var G=new O["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:U},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/projects",name:"projects",component:function(){return n.e("chunk-9315a4a6").then(n.bind(null,"acca"))}},{path:"/contact",name:"contact",component:function(){return n.e("chunk-56a42130").then(n.bind(null,"b8fa"))}}]}),X=n("2f62");a["default"].use(X["a"]);var Y=new X["a"].Store({state:{navItems:[{text:"Home",link:"/",external:!1},{text:"Projects",link:"/projects",external:!1}]},getters:{getNavItems:function(t){return t.navItems}},mutations:{},actions:{}}),Z=n("98c9"),tt=n("5a58"),et=n.n(tt);a["default"].use(Z["a"]),a["default"].use(et.a),a["default"].config.productionTip=!1,new a["default"]({router:G,store:Y,render:function(t){return t(A)},mounted:function(){return document.dispatchEvent(new Event("x-app-rendered"))}}).$mount("#app")},"64a9":function(t,e,n){},7582:function(t,e,n){},"825d":function(t,e,n){},"915e":function(t,e,n){t.exports=n.p+"img/avatar.1536e7e7.jpg"},bfd7:function(t,e,n){"use strict";var a=n("825d"),r=n.n(a);r.a},f5b8:function(t,e,n){}});
//# sourceMappingURL=app.6d4c2198.js.map