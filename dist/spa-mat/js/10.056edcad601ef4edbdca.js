webpackJsonp([10],{"7YgM":function(t,e){t.exports={name:"gekkomat",version:"0.5.18",description:"Quasar Frontend for Gekko Trading Bot",productName:"Gekko Material UI",cordovaId:"org.cordova.quasar.app",author:"H256 <hansi256@web.de>",scripts:{test:'echo "No test specified" && exit 0'},dependencies:{axios:"^0.17.1",echarts:"^4.1.0","humanize-duration":"^3.14.0",moment:"^2.22.1","vue-i18n":"^7.6.0"},devDependencies:{jade:"^1.11.0",marked:"^0.3.19","quasar-cli":"^0.15.14",superagent:"^3.8.3","superagent-no-cache":"^0.1.1"},engines:{node:">= 8.9.0",npm:">= 5.6.0"},browserslist:["> 1%","last 2 versions","not ie <= 10"]}},lfHO:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7109"),o=n("M4fF"),s=n.n(o),r=n("7YgM"),i={name:"MainLayoutPage",data:function(){return{leftDrawerOpen:!1,version:{ui:r.version}}},computed:{activeImports:function(){return s.a.filter(this.$store.state.imports.imports,function(t){return!t.done}).length},currentWatchers:function(){return s.a.slice(this.$store.getters["watchers/watchers"],0,10)}},methods:{openURL:a.Y}},l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-layout",{attrs:{view:"lHh Lpr lFf"}},[n("q-layout-header",[n("q-toolbar",{attrs:{color:"blue-grey-8"}},[n("q-btn",{attrs:{flat:"",dense:"",round:""},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}},[n("q-icon",{attrs:{name:"menu"}})],1),t._v(" "),n("q-toolbar-title",[t._v("\n        Gekko UI\n      ")]),t._v(" "),t.currentWatchers.length>0?n("q-toolbar-title",{staticClass:"text-right",attrs:{shrink:""}},[t._v("Prices: "),n("span",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("(from Watchers)")])]):t._e(),t._v(" "),t._l(t.currentWatchers,function(e,a){return e.lastCandle?n("q-toolbar-title",{key:e.id,attrs:{shrink:""}},[t._v("\n        "+t._s(e.lastCandle.close)+"\n        "),n("span",{staticClass:"text-amber"},[t._v("\n            "+t._s(e.watch.currency)+"\n          ")]),t._v(" "),n("span",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("\n            "+t._s(e.watch.exchange)+"\n            "),n("span",{staticClass:"text-amber-4"},[t._v(t._s(e.watch.asset)+"\n            ")])])]):t._e()})],2),t._v(" "),n("q-tabs",{attrs:{align:"justify",color:"blue-grey-7"}},[n("q-route-tab",{attrs:{slot:"title",default:"",icon:"home",label:"Home",to:"/",exact:""},slot:"title"}),t._v(" "),n("q-route-tab",{attrs:{slot:"title",icon:"cast connected",label:"Live Gekkos",to:"/live-gekkos",exact:"",count:t.$store.state.stratrunners.stratrunners.length},slot:"title"}),t._v(" "),n("q-route-tab",{attrs:{slot:"title",icon:"timeline",label:"Backtest",to:"/backtest",exact:""},slot:"title"}),t._v(" "),n("q-route-tab",{attrs:{slot:"title",icon:"storage",label:"Data",to:"/data",exact:""},slot:"title"}),t._v(" "),n("q-route-tab",{attrs:{slot:"title",icon:"import export",label:"Importer",to:"/data/importer",exact:"",count:t.activeImports},slot:"title"}),t._v(" "),n("q-route-tab",{attrs:{slot:"title",icon:"settings",label:"Config",to:"/config",exact:""},slot:"title"}),t._v(" "),n("q-route-tab",{attrs:{slot:"title",icon:"help",label:"Documentation",to:"/help"},slot:"title"})],1)],1),t._v(" "),n("q-layout-drawer",{attrs:{"content-class":"bg-grey-2"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[n("q-list",{attrs:{"no-border":"",link:"","inset-delimiter":""}},[n("q-list-header",[t._v("Essential Links")]),t._v(" "),n("q-item",{nativeOn:{click:function(e){t.openURL("https://github.com/h256/gekko-quasar-ui")}}},[n("q-item-side",{attrs:{icon:"code"}}),t._v(" "),n("q-item-main",{attrs:{label:"Gekko-Quasar-UI on Github",sublabel:"github.com/h256/gekko-quasar-ui"}})],1),t._v(" "),n("q-item",{nativeOn:{click:function(e){t.openURL("https://github.com/askmike/gekko")}}},[n("q-item-side",{attrs:{icon:"code"}}),t._v(" "),n("q-item-main",{attrs:{label:"Gekko on GitHub",sublabel:"github.com/askmike/gekko"}})],1),t._v(" "),n("q-item",{nativeOn:{click:function(e){t.openURL("https://discord.gg/26wMygt")}}},[n("q-item-side",{attrs:{icon:"chat"}}),t._v(" "),n("q-item-main",{attrs:{label:"Gekko Discord Channel",sublabel:"https://discord.gg/26wMygt"}})],1),t._v(" "),n("q-item",{nativeOn:{click:function(e){t.openURL("https://forum.gekko.wizb.it/")}}},[n("q-item-side",{attrs:{icon:"record_voice_over"}}),t._v(" "),n("q-item-main",{attrs:{label:"Gekko Forum",sublabel:"https://forum.gekko.wizb.it/"}})],1),t._v(" "),n("q-item-separator"),t._v(" "),n("q-list-header",[t._v("Unofficial resources (use at own risk!)")]),t._v(" "),n("q-item",{nativeOn:{click:function(e){t.openURL("https://github.com/gekkowarez/gekkoga")}}},[n("q-item-side",{attrs:{icon:"code"}}),t._v(" "),n("q-item-main",{attrs:{label:"Gekko-GA ",sublabel:"Genetic algorithm for gekko"}})],1),t._v(" "),n("q-item",{nativeOn:{click:function(e){t.openURL("https://github.com/Gab0/japonicus")}}},[n("q-item-side",{attrs:{icon:"code"}}),t._v(" "),n("q-item-main",{attrs:{label:"Japonicus",sublabel:"Genetic algorithm backtester for gekko"}})],1),t._v(" "),n("q-item-separator"),t._v(" "),n("q-list-header",[t._v("Quasar Framework resources")]),t._v(" "),n("q-item",{nativeOn:{click:function(e){t.openURL("http://quasar-framework.org")}}},[n("q-item-side",{attrs:{icon:"school"}}),t._v(" "),n("q-item-main",{attrs:{label:"Quasar Framework",sublabel:"quasar-framework.org"}})],1)],1)],1),t._v(" "),n("q-page-container",[n("router-view")],1),t._v(" "),n("q-layout-footer",[n("q-toolbar",{attrs:{color:"blue-grey-7"}},[n("q-toolbar-title",[t._v("\n        Gekko Material v "+t._s(t.version.ui)+"\n        "),n("div",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("Running on Quasar v"+t._s(t.$q.version))])]),t._v(" "),n("q-toolbar-title",[n("em",[t._v("Use Gekko at your own risk!")])])],1)],1)],1)},c=[];l._withStripped=!0;var u=n("XyMi"),v=!1;var m=function(t){v||n("xwNl")},b=Object(u.a)(i,l,c,!1,m,null,null);b.options.__file="src\\layouts\\default.vue";e.default=b.exports},smEj:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},xwNl:function(t,e,n){var a=n("smEj");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n("rjj0").default)("2fd6de1e",a,!1,{})}});