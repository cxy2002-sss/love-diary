(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Convenience/Convenience"],{"2ab4":function(t,e,n){},"4adb":function(t,e,n){"use strict";(function(t,a){var o=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=o(n("9523")),r=n("26cb");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}var f={data:function(){return{eventnum:0,cards:[{image:"https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/aa66052b-6b44-457a-a797-fdc6650e160d.png",title:"经期提醒",setText:"点击设置",content:"",path:"CardOne/CardOne"},{image:"https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/38046231-922a-41f3-96c2-299c88021a41.png",title:"距离Ta的生日",setText:"设置Ta的生日",content:"",path:"CardTow/CardTow"},{image:"https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/a245d083-f5ac-4ab0-a18d-9c168121ff0c.png",title:"备忘录",setText:"设置编辑Ta的喜好",content:"",path:"CardThree/CardThree"},{image:"https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/e9cdbc91-7502-45fa-bc44-605ec9405dfa.png",title:"倒数日",setText:"设置倒数日",content:"",path:"CardFour/CardFour"}]}},beforeMount:function(){this.getNowStuff(),console.log(this.nowStuff)},onShow:function(){this.num(),this.getFlowDay(),this.getBirthDay(),this.getMemo(),this.getCountdownDay()},onPullDownRefresh:function(){setTimeout((function(){t.stopPullDownRefresh()}),1e3)},methods:{toCard:function(e){t.navigateTo({url:e,fail:function(t){console.log(t)}})},toMilStu:function(){t.navigateTo({url:"/pages/millionStuff/millionStuff"})},getCountdownDay:function(){var t=this,e=a.database();e.collection("countdownDay").get().then((function(e){t.cards[3].content=e.result.data[0].content}))},getMemo:function(){var t=this,e=a.database();e.collection("Memos").get().then((function(e){t.cards[2].content=e.result.data[e.result.data.length-1].content}))},getFlowDay:function(){var t=this,e=a.database();e.collection("FlowDay").get().then((function(e){t.cards[0].content=e.result.data[0].day}))},getBirthDay:function(){var t=this,e=a.database();e.collection("Birthday").get().then((function(e){t.cards[1].content=e.result.data[0].day}))},getNowStuff:function(){var t=~~(100*Math.random()+1);this.$store.dispatch("getNowStuff",t)},num:function(){var t=this,e=a.database();e.collection("Stuff").where({active:!0}).get().then((function(e){t.eventnum=e.result.data.length}))}},components:{Card:function(){n.e("components/card/card").then(function(){return resolve(n("9752"))}.bind(null,n)).catch(n.oe)}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){(0,c.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},(0,r.mapState)({nowStuff:function(t){return t.NowStuff.nowStuff}}))};e.default=f}).call(this,n("543d")["default"],n("a9ff")["default"])},5907:function(t,e,n){"use strict";var a=n("2ab4"),o=n.n(a);o.a},"72de":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},o=[]},"7c32":function(t,e,n){"use strict";n.r(e);var a=n("4adb"),o=n.n(a);for(var c in a)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(c);e["default"]=o.a},beda:function(t,e,n){"use strict";n.r(e);var a=n("72de"),o=n("7c32");for(var c in o)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(c);n("5907");var r=n("f0c5"),u=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=u.exports},c558:function(t,e,n){"use strict";(function(t,e){var a=n("4ea4");n("3c0e"),n("a9ff");a(n("66fd"));var o=a(n("beda"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(o.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])}},[["c558","common/runtime","common/vendor"]]]);