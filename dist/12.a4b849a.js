webpackJsonp([12,36],{232:function(e,n,t){t(233);var o=t(12)(t(235),t(236),null,null);e.exports=o.exports},233:function(e,n,t){var o=t(234);"string"==typeof o&&(o=[[e.id,o,""]]);t(11)(o,{});o.locals&&(e.exports=o.locals)},234:function(e,n,t){n=e.exports=t(6)(!0),n.push([e.id,".ol-mark-text{display:none}.ol-contents{position:relative;width:100%;padding:0 3.2px;padding:0 .2rem;border:1px solid #ccc;border-radius:4px;font-size:0}.ol-content-UI{vertical-align:top;width:100%;font-size:16px;font-size:1rem}.ol-content-code{border-left:1px dashed #ccc;overflow:hidden;height:10px;font-size:16px;font-size:1rem;line-height:1.2;transition:all 1s;-webkit-transition:all 1s ease}.ol-content-code .ol-drop{position:absolute;bottom:0;left:7px;width:100%;height:20px;text-align:center;vertical-align:middle;line-height:20px;background-color:rgba(0,0,0,.02)}.halfHeight{height:220px}.allHeight{height:auto}","",{version:3,sources:["E:/UI/src/components/showMark.vue"],names:[],mappings:"AACA,cACE,YAAc,CACf,AACD,aACE,kBAAmB,AACnB,WAAY,AACZ,gBAAiB,AACjB,gBAAkB,AAClB,sBAAuB,AACvB,kBAAmB,AACnB,WAAa,CACd,AACD,eACE,mBAAoB,AACpB,WAAY,AACZ,eAAgB,AAChB,cAAgB,CACjB,AACD,iBACE,4BAA6B,AAC7B,gBAAiB,AACjB,YAAa,AACb,eAAgB,AAChB,eAAgB,AAChB,gBAAiB,AACjB,kBAAmB,AACnB,8BAAgC,CACjC,AACD,0BACE,kBAAmB,AACnB,SAAU,AACV,SAAU,AACV,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,sBAAuB,AACvB,iBAAkB,AAClB,gCAAmC,CACpC,AACD,YACE,YAAc,CACf,AACD,WACE,WAAa,CACd",file:"showMark.vue",sourcesContent:["\n.ol-mark-text {\n  display: none;\n}\n.ol-contents {\n  position: relative;\n  width: 100%;\n  padding: 0 3.2px;\n  padding: 0 0.2rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 0;\n}\n.ol-content-UI {\n  vertical-align: top;\n  width: 100%;\n  font-size: 16px;\n  font-size: 1rem;\n}\n.ol-content-code {\n  border-left: 1px dashed #ccc;\n  overflow: hidden;\n  height: 10px;\n  font-size: 16px;\n  font-size: 1rem;\n  line-height: 1.2;\n  transition: all 1s;\n  -webkit-transition: all 1s ease;\n}\n.ol-content-code .ol-drop {\n  position: absolute;\n  bottom: 0;\n  left: 7px;\n  width: 100%;\n  height: 20px;\n  text-align: center;\n  vertical-align: middle;\n  line-height: 20px;\n  background-color: rgba(0,0,0,0.02);\n}\n.halfHeight {\n  height: 220px;\n}\n.allHeight {\n  height: auto;\n}"],sourceRoot:""}])},235:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=function(e){var n=document.createElement("div");return n.innerHTML=e,n.innerText||n.textContent};n.default={props:{str:{type:String}},data:function(){return{rawHtml:"",height:"0px"}},methods:{openitem:function(){if(this.$el.getElementsByClassName("ol-code-content")[0].offsetHeight<0)return!1;if("0px"===this.height){var e=Number(this.$el.getElementsByClassName("ol-code-content")[0].offsetHeight);this.height=e+0+"px"}else this.height="0px"}},mounted:function(){this.rawHtml=window.marked(t(this.$el.getElementsByClassName("ol-mark-text")[0].innerHTML))}}},236:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"ol-contents"},[t("div",{staticClass:"ol-content-UI"},[e._t("default")],2),e._v(" "),t("div",{staticClass:"ol-content-code",style:{height:e.height}},[t("div",{staticClass:"ol-code-content",domProps:{innerHTML:e._s(e.rawHtml)}}),e._v(" "),t("div",{staticClass:"ol-drop",on:{click:function(n){e.openitem()}}},[e._v("↑")])])])},staticRenderFns:[]}},237:function(e,n,t){t(238);var o=t(12)(t(240),t(241),null,null);e.exports=o.exports},238:function(e,n,t){var o=t(239);"string"==typeof o&&(o=[[e.id,o,""]]);t(11)(o,{});o.locals&&(e.exports=o.locals)},239:function(e,n,t){n=e.exports=t(6)(!0),n.push([e.id,".ol-mark-document{display:none}.ol-file table{border-collapse:collapse;width:100%;background-color:#fff;color:#5e6d82;font-size:14px;margin-bottom:45px;line-height:1.5em}.ol-file table tr{background-color:#fff;border-top:1px solid #ccc;line-height:3;text-align:center}.ol-file thead{display:table-header-group}.ol-file tbody,.ol-file thead{vertical-align:middle;border-color:inherit}.ol-file tbody{display:table-row-group}.ol-file table tr:nth-child(2n){background-color:#f8f8f8}.markdown-body table td,.ol-file table th{padding:6px 13px}","",{version:3,sources:["E:/UI/src/components/document.vue"],names:[],mappings:"AACA,kBACE,YAAc,CACf,AACD,eACE,yBAA0B,AAC1B,WAAY,AACZ,sBAAuB,AACvB,cAAe,AACf,eAAgB,AAChB,mBAAoB,AACpB,iBAAmB,CACpB,AACD,kBACE,sBAAuB,AACvB,0BAA2B,AAC3B,cAAe,AACf,iBAAmB,CACpB,AACD,eACE,0BAA4B,CAG7B,AACD,8BAHE,sBAAuB,AACvB,oBAAsB,CAMvB,AAJD,eACE,uBAAyB,CAG1B,AACD,gCACE,wBAA0B,CAC3B,AACD,0CACE,gBAAkB,CACnB",file:"document.vue",sourcesContent:["\n.ol-mark-document {\n  display: none;\n}\n.ol-file table {\n  border-collapse: collapse;\n  width: 100%;\n  background-color: #fff;\n  color: #5e6d82;\n  font-size: 14px;\n  margin-bottom: 45px;\n  line-height: 1.5em;\n}\n.ol-file table tr {\n  background-color: #fff;\n  border-top: 1px solid #ccc;\n  line-height: 3;\n  text-align: center;\n}\n.ol-file thead {\n  display: table-header-group;\n  vertical-align: middle;\n  border-color: inherit;\n}\n.ol-file tbody {\n  display: table-row-group;\n  vertical-align: middle;\n  border-color: inherit;\n}\n.ol-file table tr:nth-child(2n) {\n  background-color: #f8f8f8;\n}\n.ol-file table th, .markdown-body table td {\n  padding: 6px 13px;\n}"],sourceRoot:""}])},240:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=function(e){var n=document.createElement("div");return n.innerHTML=e,n.innerText||n.textContent};n.default={props:{str:{type:String}},data:function(){return{rawHtml:"",height:"220px"}},methods:{openitem:function(){}},mounted:function(){this.rawHtml=window.marked(t(this.$el.getElementsByClassName("ol-mark-document")[0].innerHTML))}}},241:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"ol-file"},[e._t("default"),e._v(" "),t("div",{staticClass:"ol-code-content",domProps:{innerHTML:e._s(e.rawHtml)}})],2)},staticRenderFns:[]}},278:function(e,n,t){t(279);var o=t(12)(t(281),t(282),null,null);e.exports=o.exports},279:function(e,n,t){var o=t(280);"string"==typeof o&&(o=[[e.id,o,""]]);t(11)(o,{});o.locals&&(e.exports=o.locals)},280:function(e,n,t){n=e.exports=t(6)(!0),n.push([e.id,".item{margin-top:10px}","",{version:3,sources:["E:/UI/src/components/show/showInput.vue"],names:[],mappings:"AACA,MACE,eAAiB,CAClB",file:"showInput.vue",sourcesContent:["\n.item {\n  margin-top: 10px;\n}"],sourceRoot:""}])},281:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(37),l=t(232),a=o(l),r=t(237),s=o(r);n.default={data:function(){return{form1:{name:"123"},limits:{length:{type:"Length",min:6,max:12},email:{type:"Email"},phone:{type:"Phone"},number:{type:"Number"}}}},components:{olInput:i.olInput,showMark:a.default,document:s.default},methods:{inputing:function(e){console.log(e)}},computed:{}}},282:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("h3",[e._v("输入框")]),e._v(" "),t("h4",[e._v("基本")]),e._v(" "),t("showMark",[t("span",[e._v("改动较大")]),e._v(" "),t("textarea",{staticClass:"ol-mark-text"},[e._v('\n```html\n<ol-input placeHolder=\'请输入内容\'></ol-input>\n<ol-input class="item" v-model="form1.name"  placeHolder=\'请输入内容\' state=\'primary\' @changing ="inputing"></ol-input>\n<ol-input class="item" v-model="form1.name"  placeHolder=\'请输入内容\' state=\'danger\'  @changing ="inputing"></ol-input>\n<ol-input class="item" v-model="form1.name"  placeHolder=\'请输入内容\' state=\'success\' @changing ="inputing"></ol-input>\n<ol-input class="item" v-model="form1.name"  placeHolder=\'请输入内容\' state=\'warning\' @changing ="inputing"></ol-input>\n```\n')]),e._v(" "),t("ol-input",{attrs:{placeHolder:"请输入内容"}}),e._v(" "),t("ol-input",{staticClass:"item",attrs:{placeHolder:"请输入内容",state:"primary"},on:{changing:e.inputing},model:{value:e.form1.name,callback:function(n){e.form1.name=n},expression:"form1.name"}}),e._v(" "),t("ol-input",{staticClass:"item",attrs:{placeHolder:"请输入内容",state:"danger"},on:{changing:e.inputing},model:{value:e.form1.name,callback:function(n){e.form1.name=n},expression:"form1.name"}}),e._v(" "),t("ol-input",{staticClass:"item",attrs:{placeHolder:"请输入内容",state:"success"},on:{changing:e.inputing},model:{value:e.form1.name,callback:function(n){e.form1.name=n},expression:"form1.name"}}),e._v(" "),t("ol-input",{staticClass:"item",attrs:{placeHolder:"请输入内容",state:"warning"},on:{changing:e.inputing},model:{value:e.form1.name,callback:function(n){e.form1.name=n},expression:"form1.name"}})],1),e._v(" "),t("h4",[e._v("提示框")]),e._v(" "),t("showMark",[t("textarea",{staticClass:"ol-mark-text"},[e._v("\n```html\n <ol-input class=\"item\" v-model=\"form1.name\"  placeHolder='请输入内容' tip='我是提示语' :disabled='true'></ol-input>\n\n```\n")]),e._v(" "),t("ol-input",{staticClass:"item",attrs:{placeHolder:"请输入内容",tip:"我是提示语",disabled:!0},model:{value:e.form1.name,callback:function(n){e.form1.name=n},expression:"form1.name"}})],1),e._v(" "),t("h4",[e._v("密码")]),e._v(" "),t("showMark",[t("textarea",{staticClass:"ol-mark-text"},[e._v("\n```html\n<ol-input  v-model=\"form1.name\"  placeHolder='请输入内容' state='primary' type='password'></ol-input>\n\n```\n")]),e._v(" "),t("ol-input",{attrs:{placeHolder:"请输入内容",state:"primary",type:"password"},model:{value:e.form1.name,callback:function(n){e.form1.name=n},expression:"form1.name"}})],1),e._v(" "),t("h4",[e._v("验证")]),e._v(" "),t("showMark",[t("textarea",{staticClass:"ol-mark-text"},[e._v("\n```html\n 长度<ol-input v-model=\"form1.name\"  placeHolder='请输入内容' state='primary' :limit=\"limits.length\"></ol-input>\n手机<ol-input v-model=\"form1.name\"  placeHolder='请输入内容' state='primary' :limit=\"limits.phone\"></ol-input> \nemail<ol-input v-model=\"form1.name\"  placeHolder='请输入内容' state='primary' :limit=\"limits.email\"></ol-input> \nnumber<ol-input v-model=\"form1.name\"  placeHolder='请输入内容' state='primary' :limit=\"limits.number\"></ol-input> \n\n```\n")]),e._v("\n 长度"),t("ol-input",{attrs:{placeHolder:"请输入内容",state:"primary",limit:e.limits.length},model:{value:e.form1.name,callback:function(n){e.form1.name=n},expression:"form1.name"}}),e._v("\n手机"),t("ol-input",{attrs:{placeHolder:"请输入内容",state:"primary",limit:e.limits.phone},model:{value:e.form1.name,callback:function(n){e.form1.name=n},expression:"form1.name"}}),e._v(" \nemail"),t("ol-input",{attrs:{placeHolder:"请输入内容",state:"primary",limit:e.limits.email},model:{value:e.form1.name,callback:function(n){e.form1.name=n},expression:"form1.name"}}),e._v(" \nnumber"),t("ol-input",{attrs:{placeHolder:"请输入内容",state:"primary",limit:e.limits.number},model:{value:e.form1.name,callback:function(n){e.form1.name=n},expression:"form1.name"}})],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=12.a4b849a.js.map