(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Home/Home"],{"090d":function(t,e,n){"use strict";n.r(e);var a=n("624c"),o=n.n(a);for(var c in a)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(c);e["default"]=o.a},"5f87":function(t,e,n){"use strict";n.r(e);var a=n("82ab"),o=n("090d");for(var c in o)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(c);n("a379");var f=n("f0c5"),u=Object(f["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=u.exports},6222:function(t,e,n){},"624c":function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{navs:[{icon:"https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/640bdaca-b1b2-49e6-b835-83a564c15d19.png",text:"心里话",path:""},{icon:"https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/5d29fce9-63f0-4a3d-997c-e821918bde9b.png",text:"未来信件",path:""},{icon:"https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/3f5dee91-9b0b-4171-b26b-4e5ffa89beb3.png",text:"宠物公寓",path:""},{icon:"https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/f19e1fd4-a2ed-459f-ac3e-514af2626cd7.png",text:"恋爱答案书",path:""},{icon:"https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/f1aa3e8f-abd0-424c-91a0-638d96b463aa.png",text:"情侣礼物",path:""}],dbNum:0,dbContent:[]}},onLoad:function(){t.getStorage({key:"token",fail:function(){t.reLaunch({url:"/pages/Login/Login"})}})},onShow:function(){this.getDbNum(),this.getDbContent()},onPullDownRefresh:function(){this.getDbContent(),setTimeout((function(){t.stopPullDownRefresh()}))},methods:{cxy:function(){t.showModal({content:"为何要点程翔宇?",cancelText:"爱他",confirmText:"更爱他"})},getDbContent:function(){var t=this,e=n.database();e.collection("Home").get().then((function(e){t.dbContent=e.result.data})).catch((function(t){}))},getDbNum:function(){var t=this,e=n.database();e.collection("Home").get({getCount:!0}).then((function(e){t.dbNum=e.result.count})).catch((function(t){console.error(t)}))},toAdd:function(){t.navigateTo({url:"/pages/addDay/addDay?id=1"})},toComDay:function(e){t.navigateTo({url:"/pages/commemorationDay/commemorationDay?id=".concat(e)})}},computed:{day:function(){var t=Date.parse(new Date),e=Date.parse("2022-12-19"),n=parseInt((t-e)/864e5);return n}}};e.default=a}).call(this,n("543d")["default"],n("a9ff")["default"])},"6bf9":function(t,e,n){"use strict";(function(t,e){var a=n("4ea4");n("3c0e"),n("a9ff");a(n("66fd"));var o=a(n("5f87"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(o.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"82ab":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},o=[]},a379:function(t,e,n){"use strict";var a=n("6222"),o=n.n(a);o.a}},[["6bf9","common/runtime","common/vendor"]]]);