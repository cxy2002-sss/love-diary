(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/millionStuff/millionStuff"],{"1e75":function(t,e,n){"use strict";var f=n("bb43"),o=n.n(f);o.a},"2f5f":function(t,e,n){"use strict";(function(t,f){var o=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(n("9523")),r=n("26cb"),c=n("a42d");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(t);e&&(f=f.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,f)}return n}var i={data:function(){var t=(0,c.getDate)({format:!0});return{date:t,scrollTop:0,stuff:[]}},onLoad:function(){this.getStuff()},onShow:function(){this.getStuff()},onPageScroll:function(t){this.scrollTop=t.scrollTop},methods:{toPar:function(e){t.navigateTo({url:"/pages/stuffItem/stuffItem?id=".concat(e.id)})},changeActive:function(t){var e=this,n=f.database();n.collection("Stuff").where({id:t}).update({active:!0,date:(0,c.getDate)()}).then((function(){e.getNowStuff()})),this.stuff.forEach((function(e){t===e.id&&(e.active=!0)}))},changeNowStuff:function(){this.getNowStuff()},toTop:function(){t.pageScrollTo({scrollTop:0,duration:100})},getNowStuff:function(){var t=~~(100*Math.random()+1);this.$store.dispatch("getNowStuff",t)},getStuff:function(){var t=this,e=f.database();e.collection("Stuff").get().then((function(e){t.stuff=e.result.data}))}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){(0,u.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({num:function(){var t=0;return this.stuff.forEach((function(e){e.active&&t++})),t}},(0,r.mapState)({nowStuff:function(t){return t.NowStuff.nowStuff}}))};e.default=i}).call(this,n("543d")["default"],n("a9ff")["default"])},"55a9":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return f}));var f={uniFab:function(){return n.e("uni_modules/uni-fab/components/uni-fab/uni-fab").then(n.bind(null,"25a4"))}},o=function(){var t=this.$createElement;this._self._c},u=[]},"70d0":function(t,e,n){"use strict";n.r(e);var f=n("55a9"),o=n("e42b");for(var u in o)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(u);n("1e75");var r=n("f0c5"),c=Object(r["a"])(o["default"],f["b"],f["c"],!1,null,null,null,!1,f["a"],void 0);e["default"]=c.exports},bb43:function(t,e,n){},e42b:function(t,e,n){"use strict";n.r(e);var f=n("2f5f"),o=n.n(f);for(var u in f)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return f[t]}))}(u);e["default"]=o.a},edc9:function(t,e,n){"use strict";(function(t,e){var f=n("4ea4");n("3c0e"),n("a9ff");f(n("66fd"));var o=f(n("70d0"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(o.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])}},[["edc9","common/runtime","common/vendor"]]]);