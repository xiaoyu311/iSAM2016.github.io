webpackJsonp([27,36],{232:function(e,n,t){t(233);var i=t(12)(t(235),t(236),null,null);e.exports=i.exports},233:function(e,n,t){var i=t(234);"string"==typeof i&&(i=[[e.id,i,""]]);t(11)(i,{});i.locals&&(e.exports=i.locals)},234:function(e,n,t){n=e.exports=t(6)(!0),n.push([e.id,".ol-mark-text{display:none}.ol-contents{position:relative;width:100%;padding:0 3.2px;padding:0 .2rem;border:1px solid #ccc;border-radius:4px;font-size:0}.ol-content-UI{vertical-align:top;width:100%;font-size:16px;font-size:1rem}.ol-content-code{border-left:1px dashed #ccc;overflow:hidden;height:10px;font-size:16px;font-size:1rem;line-height:1.2;transition:all 1s;-webkit-transition:all 1s ease}.ol-content-code .ol-drop{position:absolute;bottom:0;left:7px;width:100%;height:20px;text-align:center;vertical-align:middle;line-height:20px;background-color:rgba(0,0,0,.02)}.halfHeight{height:220px}.allHeight{height:auto}","",{version:3,sources:["E:/UI/src/components/showMark.vue"],names:[],mappings:"AACA,cACE,YAAc,CACf,AACD,aACE,kBAAmB,AACnB,WAAY,AACZ,gBAAiB,AACjB,gBAAkB,AAClB,sBAAuB,AACvB,kBAAmB,AACnB,WAAa,CACd,AACD,eACE,mBAAoB,AACpB,WAAY,AACZ,eAAgB,AAChB,cAAgB,CACjB,AACD,iBACE,4BAA6B,AAC7B,gBAAiB,AACjB,YAAa,AACb,eAAgB,AAChB,eAAgB,AAChB,gBAAiB,AACjB,kBAAmB,AACnB,8BAAgC,CACjC,AACD,0BACE,kBAAmB,AACnB,SAAU,AACV,SAAU,AACV,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,sBAAuB,AACvB,iBAAkB,AAClB,gCAAmC,CACpC,AACD,YACE,YAAc,CACf,AACD,WACE,WAAa,CACd",file:"showMark.vue",sourcesContent:["\n.ol-mark-text {\n  display: none;\n}\n.ol-contents {\n  position: relative;\n  width: 100%;\n  padding: 0 3.2px;\n  padding: 0 0.2rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 0;\n}\n.ol-content-UI {\n  vertical-align: top;\n  width: 100%;\n  font-size: 16px;\n  font-size: 1rem;\n}\n.ol-content-code {\n  border-left: 1px dashed #ccc;\n  overflow: hidden;\n  height: 10px;\n  font-size: 16px;\n  font-size: 1rem;\n  line-height: 1.2;\n  transition: all 1s;\n  -webkit-transition: all 1s ease;\n}\n.ol-content-code .ol-drop {\n  position: absolute;\n  bottom: 0;\n  left: 7px;\n  width: 100%;\n  height: 20px;\n  text-align: center;\n  vertical-align: middle;\n  line-height: 20px;\n  background-color: rgba(0,0,0,0.02);\n}\n.halfHeight {\n  height: 220px;\n}\n.allHeight {\n  height: auto;\n}"],sourceRoot:""}])},235:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=function(e){var n=document.createElement("div");return n.innerHTML=e,n.innerText||n.textContent};n.default={props:{str:{type:String}},data:function(){return{rawHtml:"",height:"0px"}},methods:{openitem:function(){if(this.$el.getElementsByClassName("ol-code-content")[0].offsetHeight<0)return!1;if("0px"===this.height){var e=Number(this.$el.getElementsByClassName("ol-code-content")[0].offsetHeight);this.height=e+0+"px"}else this.height="0px"}},mounted:function(){this.rawHtml=window.marked(t(this.$el.getElementsByClassName("ol-mark-text")[0].innerHTML))}}},236:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"ol-contents"},[t("div",{staticClass:"ol-content-UI"},[e._t("default")],2),e._v(" "),t("div",{staticClass:"ol-content-code",style:{height:e.height}},[t("div",{staticClass:"ol-code-content",domProps:{innerHTML:e._s(e.rawHtml)}}),e._v(" "),t("div",{staticClass:"ol-drop",on:{click:function(n){e.openitem()}}},[e._v("↑")])])])},staticRenderFns:[]}},345:function(e,n,t){t(346);var i=t(12)(t(348),t(349),null,null);e.exports=i.exports},346:function(e,n,t){var i=t(347);"string"==typeof i&&(i=[[e.id,i,""]]);t(11)(i,{});i.locals&&(e.exports=i.locals)},347:function(e,n,t){n=e.exports=t(6)(!0),n.push([e.id,".img-box{width:400px}.img-box img{width:100%}.doc-preview-imgbox{height:260px;background:no-repeat 50%;background-size:cover}","",{version:3,sources:["E:/UI/src/components/show/showPreview.vue"],names:[],mappings:"AACA,SACE,WAAa,CACd,AACD,aACE,UAAY,CACb,AACD,oBACE,aAAc,AACd,yBAAoC,AACpC,qBAAuB,CACxB",file:"showPreview.vue",sourcesContent:["\n.img-box {\n  width: 400px;\n}\n.img-box img {\n  width: 100%;\n}\n.doc-preview-imgbox {\n  height: 260px;\n  background: no-repeat center center;\n  background-size: cover;\n}"],sourceRoot:""}])},348:function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var o=t(37),r=t(232),s=i(r);n.default={components:{olTag:o.olTag,showMark:s.default},data:function(){return{imgs:["https://isam2016.github.io/img/b83c93e92706785a25914bd4fcd6f0d2_b.jpg","https://isam2016.github.io/img/v2-62dee35e7ae332e2581d6f7e4d918a3c_r.jpg"]}},events:{}}},349:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("section",{staticClass:"img-box"},[e._l(e.imgs,function(e){return t("img",{directives:[{name:"preview",rawName:"v-preview",value:e,expression:"img"}],attrs:{src:e}})}),e._v(" "),e._l(e.imgs,function(e){return t("div",{directives:[{name:"preview",rawName:"v-preview",value:e,expression:"img"}],staticClass:"doc-preview-imgbox",style:{"background-image":"url("+e+")"}})})],2),e._v(" "),t("showMark",[t("textarea",{staticClass:"ol-mark-text"},[e._v('\r\n```html\r\n<section class="img-box">\r\n    <img v-for="img in imgs" v-preview="img" :src="img">\r\n    <div \r\n      v-for="img in imgs"\r\n      v-preview="img" \r\n      class="doc-preview-imgbox" \r\n      :style="{ \'background-image\':  \'url(\' + img + \')\'}"></div> \r\n </section>\r\n\r\nexport default {\r\n    components: { \r\n      olTag\r\n    },\r\n    data () {\r\n      return {\r\n          imgs: [\'https://isam2016.github.io/img/b83c93e92706785a25914bd4fcd6f0d2_b.jpg\', \'https://isam2016.github.io/img/v2-62dee35e7ae332e2581d6f7e4d918a3c_r.jpg\']\r\n        }\r\n    },\r\n    events: {\r\n    }\r\n  }\r\n\r\n\r\n在根组件中添加<ol-preview></ol-preview>\r\n\r\n<template>\r\n<div>\r\n  <router-view></router-view>  \r\n  <ol-preview></ol-preview>    \r\n</div>\r\n</template>\r\n<script>\r\n  import olPreview from \'./components/global/preview\';\r\n  export default {\r\n    components: {\r\n      olPreview \r\n    }\r\n  }\r\n</script>\r\n```\r\n')]),e._v("\r\n点击查看代码\r\n")])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=27.660da52.js.map