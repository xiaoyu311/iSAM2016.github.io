webpackJsonp([14,34],{261:function(e,s,t){t(262);var n=t(12)(t(264),t(265),null,null);e.exports=n.exports},262:function(e,s,t){var n=t(263);"string"==typeof n&&(n=[[e.id,n,""]]);t(11)(n,{});n.locals&&(e.exports=n.locals)},263:function(e,s,t){s=e.exports=t(6)(!0),s.push([e.id,".top{margin-top:80px}","",{version:3,sources:["/Users/isam2016/Desktop/UI-master/src/components/show/showSlider.vue"],names:[],mappings:"AACA,KACE,eAAiB,CAClB",file:"showSlider.vue",sourcesContent:["\n.top {\n  margin-top: 80px;\n}"],sourceRoot:""}])},264:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=t(37);s.default={components:{olSlider:n.olSlider},data:function(){return{slider:{value:0,min:10,max:100,step:0},slider1:{value:0,min:10,max:100,step:10},value:0}},methods:{change:function(e){this.value=e}}}},265:function(e,s){e.exports={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",[t("div",[t("h4",[e._v("\n      #标签\n    ")]),e._v(" "),t("ol-slider",{staticClass:"top",attrs:{value:e.slider},on:{change:e.change}}),e._v("\n      "+e._s(e.value)+"\n\n      "),t("ol-slider",{staticClass:"top",attrs:{value:e.slider1}})],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=14.e5cc5d3.js.map