(function(t){function e(e){for(var r,o,s=e[0],l=e[1],u=e[2],f=0,v=[];f<s.length;f++)o=s[f],a[o]&&v.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(v.length)v.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"31f2":function(t,e,n){"use strict";var r=n("e39b"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=n("bb71");n("da64");r["a"].use(a["a"],{iconfont:"md"});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"cloudmesh"}},[n("v-navigation-drawer",{staticClass:"grey lighten-4",attrs:{fixed:"",clipped:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{staticClass:"grey lighten-4",attrs:{dense:""}},[t._l(t.menuItems,function(e,r){return[e.heading?n("v-layout",{key:r,attrs:{row:"","align-center":""}},[n("v-flex",{attrs:{xs6:""}},[e.heading?n("v-subheader",[t._v("\n              "+t._s(e.heading)+"\n            ")]):t._e()],1)],1):e.divider?n("v-divider",{key:r,staticClass:"my-3",attrs:{dark:""}}):n("v-list-tile",{key:r,attrs:{to:e.route},on:{click:function(e){t.route()}}},[n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"grey--text"},[t._v("\n              "+t._s(e.title)+"\n            ")])],1)],1)]})],2)],1),n("v-toolbar",{attrs:{color:"amber",app:"",dense:"","clipped-left":""}},[n("v-toolbar-side-icon",{nativeOn:{click:function(e){t.drawer=!t.drawer}}}),n("span",{staticClass:"title ml-3 mr-5"},[t._v("Cloudmesh")])],1),n("v-content",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",[n("v-flex",{attrs:{shrink:""}},[n("router-view")],1)],1)],1)],1)],1)},o=[],s={data:function(){return{drawer:null,menuItems:[{heading:"Compute"},{icon:"computer",title:"Virtual Machines",route:"/vm"},{icon:"photo_library",title:"Images",route:"/images"},{icon:"photo_size_select_large",title:"Flavors",route:"/flavors"}]}}},l=s,u=n("2877"),c=n("6544"),f=n.n(c),v=n("7496"),h=n("a523"),p=n("549c"),d=n("ce7e"),m=n("0e8f"),y=n("132d"),b=n("a722"),_=n("8860"),g=n("ba95"),x=n("40fe"),w=n("5d23"),j=n("f774"),V=n("e0c7"),k=n("71d9"),C=n("706c"),O=Object(u["a"])(l,i,o,!1,null,null,null);O.options.__file="App.vue";var T=O.exports;f()(O,{VApp:v["a"],VContainer:h["a"],VContent:p["a"],VDivider:d["a"],VFlex:m["a"],VIcon:y["a"],VLayout:b["a"],VList:_["a"],VListTile:g["a"],VListTileAction:x["a"],VListTileContent:w["a"],VListTileTitle:w["b"],VNavigationDrawer:j["a"],VSubheader:V["a"],VToolbar:k["a"],VToolbarSideIcon:C["a"]});var L=n("8c4f"),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("HelloWorld")},E=[],I=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),r("v-flex",{attrs:{"mb-4":""}},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n        Welcome to Vuetify\n      ")]),r("p",{staticClass:"subheading font-weight-regular"},[t._v("\n        For help and collaboration with other Vuetify developers,\n        "),r("br"),t._v("please join our online\n        "),r("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),r("v-flex",{attrs:{"mb-5":"",xs12:""}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),r("v-layout",{attrs:{"justify-center":""}},t._l(t.whatsNext,function(e,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1),r("v-flex",{attrs:{xs12:"","mb-5":""}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),r("v-layout",{attrs:{"justify-center":""}},t._l(t.importantLinks,function(e,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1),r("v-flex",{attrs:{xs12:"","mb-5":""}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),r("v-layout",{attrs:{"justify-center":""}},t._l(t.ecosystem,function(e,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1)],1)],1)},M=[],P={data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuetifyjs.com"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},$=P,A=(n("31f2"),n("adda")),F=Object(u["a"])($,I,M,!1,null,null,null);F.options.__file="HelloWorld.vue";var W=F.exports;f()(F,{VContainer:h["a"],VFlex:m["a"],VImg:A["a"],VLayout:b["a"]});var D={components:{HelloWorld:W}},H=D,q=Object(u["a"])(H,S,E,!1,null,null,null);q.options.__file="Home.vue";var N=q.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vm"},[n("h1",[t._v("Virtual Machines")])])}],Q={},B=Object(u["a"])(Q,J,z,!1,null,null,null);B.options.__file="Vm.vue";var G=B.exports;r["a"].use(L["a"]);var K=new L["a"]({mode:"history",routes:[{path:"/",name:"home",component:N},{path:"/vm",name:"vm",component:G}]});r["a"].config.productionTip=!1,new r["a"]({router:K,render:function(t){return t(T)}}).$mount("#app")},"9b19":function(t,e,n){t.exports=n.p+"img/logo.63a7d78d.svg"},e39b:function(t,e,n){}});
//# sourceMappingURL=app.15669216.js.map