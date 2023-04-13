(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker"],{"34e8":function(e,t,i){"use strict";(function(e,n){var r=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(i("2eee")),a=r(i("448a")),l=r(i("9523")),u=r(i("c973")),o=i("1da9"),c=i("6299");function f(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function h(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?f(Object(i),!0).forEach((function(t){(0,l.default)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var p={name:"uniFilePicker",components:{uploadImage:function(){i.e("uni_modules/uni-file-picker/components/uni-file-picker/upload-image").then(function(){return resolve(i("a1ad"))}.bind(null,i)).catch(i.oe)},uploadFile:function(){i.e("uni_modules/uni-file-picker/components/uni-file-picker/upload-file").then(function(){return resolve(i("61d1"))}.bind(null,i)).catch(i.oe)}},options:{virtualHost:!0},emits:["select","success","fail","progress","delete","update:modelValue","input"],props:{value:{type:[Array,Object],default:function(){return[]}},disabled:{type:Boolean,default:!1},disablePreview:{type:Boolean,default:!1},delIcon:{type:Boolean,default:!0},autoUpload:{type:Boolean,default:!0},limit:{type:[Number,String],default:9},mode:{type:String,default:"grid"},fileMediatype:{type:String,default:"image"},fileExtname:{type:[Array,String],default:function(){return[]}},title:{type:String,default:""},listStyles:{type:Object,default:function(){return{border:!0,dividline:!0,borderStyle:{}}}},imageStyles:{type:Object,default:function(){return{width:"auto",height:"auto"}}},readonly:{type:Boolean,default:!1},returnType:{type:String,default:"array"},sizeType:{type:Array,default:function(){return["original","compressed"]}}},data:function(){return{files:[],localValue:[]}},watch:{value:{handler:function(e,t){this.setValue(e,t)},immediate:!0}},computed:{filesList:function(){var e=[];return this.files.forEach((function(t){e.push(t)})),e},showType:function(){return"image"===this.fileMediatype?this.mode:"list"},limitLength:function(){return"object"===this.returnType?1:this.limit?this.limit>=9?9:this.limit:1}},created:function(){e.config&&e.config.provider||(this.noSpace=!0,e.chooseAndUploadFile=o.chooseAndUploadFile),this.form=this.getForm("uniForms"),this.formItem=this.getForm("uniFormsItem"),this.form&&this.formItem&&this.formItem.name&&(this.rename=this.formItem.name,this.form.inputChildrens.push(this))},methods:{clearFiles:function(e){var t=this;0===e||e?this.files.splice(e,1):(this.files=[],this.$nextTick((function(){t.setEmit()}))),this.$nextTick((function(){t.setEmit()}))},upload:function(){var e=[];return this.files.forEach((function(t,i){"ready"!==t.status&&"error"!==t.status||e.push(Object.assign({},t))})),this.uploadFiles(e)},setValue:function(e,t){var i=this;return(0,u.default)(s.default.mark((function t(){var n,r,a,l;return s.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=function(){var e=(0,u.default)(s.default.mark((function e(t){var n,r;return s.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=/cloud:\/\/([\w.]+\/?)\S*/,r="",r=t.fileID?t.fileID:t.url,!n.test(r)){e.next=8;break}return t.fileID=r,e.next=7,i.getTempFileURL(r);case 7:t.url=e.sent;case 8:return t.url&&(t.path=t.url),e.abrupt("return",t);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),"object"!==i.returnType){t.next=10;break}if(!e){t.next=7;break}return t.next=5,n(e);case 5:t.next=8;break;case 7:e={};case 8:t.next=19;break;case 10:e||(e=[]),r=0;case 12:if(!(r<e.length)){t.next=19;break}return a=e[r],t.next=16,n(a);case 16:r++,t.next=12;break;case 19:i.localValue=e,i.form&&i.formItem&&!i.is_reset&&(i.is_reset=!1,i.formItem.setValue(i.localValue)),l=Object.keys(e).length>0?e:[],i.files=[].concat(l);case 23:case"end":return t.stop()}}),t)})))()},choose:function(){this.disabled||(this.files.length>=Number(this.limitLength)&&"grid"!==this.showType&&"array"===this.returnType?n.showToast({title:"您最多选择 ".concat(this.limitLength," 个文件"),icon:"none"}):this.chooseFiles())},chooseFiles:function(){var t=this,i=(0,c.get_extname)(this.fileExtname);e.chooseAndUploadFile({type:this.fileMediatype,compressed:!1,sizeType:this.sizeType,extension:i.length>0?i:void 0,count:this.limitLength-this.files.length,onChooseFile:this.chooseFileCallback,onUploadProgress:function(e){t.setProgress(e,e.index)}}).then((function(e){t.setSuccessAndError(e.tempFiles)})).catch((function(e){console.log("选择失败",e)}))},chooseFileCallback:function(e){var t=this;return(0,u.default)(s.default.mark((function i(){var n,r,a,l,u,o,f,p;return s.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:n=(0,c.get_extname)(t.fileExtname),r=1===Number(t.limitLength)&&t.disablePreview&&!t.disabled||"object"===t.returnType,r&&(t.files=[]),a=(0,c.get_files_and_is_max)(e,n),l=a.filePaths,u=a.files,n&&n.length>0||(l=e.tempFilePaths,u=e.tempFiles),o=[],f=0;case 7:if(!(f<u.length)){i.next=21;break}if(!(t.limitLength-t.files.length<=0)){i.next=10;break}return i.abrupt("break",21);case 10:return u[f].uuid=Date.now(),i.next=13,(0,c.get_file_data)(u[f],t.fileMediatype);case 13:p=i.sent,p.progress=0,p.status="ready",t.files.push(p),o.push(h(h({},p),{},{file:u[f]}));case 18:f++,i.next=7;break;case 21:t.$emit("select",{tempFiles:o,tempFilePaths:l}),e.tempFiles=u,t.autoUpload&&!t.noSpace||(e.tempFiles=[]);case 24:case"end":return i.stop()}}),i)})))()},uploadFiles:function(e){var t=this;return e=[].concat(e),o.uploadCloudFiles.call(this,e,5,(function(e){t.setProgress(e,e.index,!0)})).then((function(e){return t.setSuccessAndError(e),e})).catch((function(e){console.log(e)}))},setSuccessAndError:function(e,t){var i=this;return(0,u.default)(s.default.mark((function t(){var n,r,a,l,u,o,c;return s.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=[],r=[],a=[],l=[],u=s.default.mark((function t(u){var o,c,f;return s.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(o=e[u],c=o.uuid?i.files.findIndex((function(e){return e.uuid===o.uuid})):o.index,-1!==c&&i.files){t.next=4;break}return t.abrupt("return","break");case 4:if("request:fail"!==o.errMsg){t.next=12;break}i.files[c].url=o.path,i.files[c].status="error",i.files[c].errMsg=o.errMsg,r.push(i.files[c]),l.push(i.files[c].url),t.next=26;break;case 12:if(i.files[c].errMsg="",i.files[c].fileID=o.url,f=/cloud:\/\/([\w.]+\/?)\S*/,!f.test(o.url)){t.next=21;break}return t.next=18,i.getTempFileURL(o.url);case 18:i.files[c].url=t.sent,t.next=22;break;case 21:i.files[c].url=o.url;case 22:i.files[c].status="success",i.files[c].progress+=1,n.push(i.files[c]),a.push(i.files[c].fileID);case 26:case"end":return t.stop()}}),t)})),o=0;case 6:if(!(o<e.length)){t.next=14;break}return t.delegateYield(u(o),"t0",8);case 8:if(c=t.t0,"break"!==c){t.next=11;break}return t.abrupt("break",14);case 11:o++,t.next=6;break;case 14:n.length>0&&(i.setEmit(),i.$emit("success",{tempFiles:i.backObject(n),tempFilePaths:a})),r.length>0&&i.$emit("fail",{tempFiles:i.backObject(r),tempFilePaths:l});case 16:case"end":return t.stop()}}),t)})))()},setProgress:function(e,t,i){this.files.length;var n=Math.round(100*e.loaded/e.total),r=t;i||(r=this.files.findIndex((function(t){return t.uuid===e.tempFile.uuid}))),-1!==r&&this.files[r]&&(this.files[r].progress=n-1,this.$emit("progress",{index:r,progress:parseInt(n),tempFile:this.files[r]}))},delFile:function(e){var t=this;this.$emit("delete",{tempFile:this.files[e],tempFilePath:this.files[e].url}),this.files.splice(e,1),this.$nextTick((function(){t.setEmit()}))},getFileExt:function(e){var t=e.lastIndexOf("."),i=e.length;return{name:e.substring(0,t),ext:e.substring(t+1,i)}},setEmit:function(){var e=[];"object"===this.returnType?(e=this.backObject(this.files)[0],this.localValue=e||null):(e=this.backObject(this.files),this.localValue||(this.localValue=[]),this.localValue=(0,a.default)(e)),this.$emit("input",this.localValue)},backObject:function(e){var t=[];return e.forEach((function(e){t.push({extname:e.extname,fileType:e.fileType,image:e.image,name:e.name,path:e.path,size:e.size,fileID:e.fileID,url:e.url})})),t},getTempFileURL:function(t){return(0,u.default)(s.default.mark((function i(){var n;return s.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return t={fileList:[].concat(t)},i.next=3,e.getTempFileURL(t);case 3:return n=i.sent,i.abrupt("return",n.fileList[0].tempFileURL||"");case 5:case"end":return i.stop()}}),i)})))()},getForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniForms",t=this.$parent,i=t.$options.name;while(i!==e){if(t=t.$parent,!t)return!1;i=t.$options.name}return t}}};t.default=p}).call(this,i("a9ff")["default"],i("543d")["default"])},"43ae":function(e,t,i){"use strict";i.r(t);var n=i("34e8"),r=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(s);t["default"]=r.a},"7aad":function(e,t,i){"use strict";var n=i("8ad7"),r=i.n(n);r.a},"8ad7":function(e,t,i){},ce92:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){}));var n=function(){var e=this.$createElement,t=(this._self._c,this.title?this.filesList.length:null);this.$mp.data=Object.assign({},{$root:{g0:t}})},r=[]},f716:function(e,t,i){"use strict";i.r(t);var n=i("ce92"),r=i("43ae");for(var s in r)["default"].indexOf(s)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(s);i("7aad");var a=i("f0c5"),l=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);t["default"]=l.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker-create-component',
    {
        'uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("f716"))
        })
    },
    [['uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker-create-component']]
]);
