(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e1e8dcd"],{"070d":function(t,e,a){},"0d0a":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.error?t._e():a("Main",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"element-loading-text":"数据查询中，请耐心等候","element-loading-spinner":"el-icon-loading"}})},n=[],s=(a("c5f6"),a("c7ca")),r=a("caf0"),o={components:{Main:s["a"]},props:{dataSetId:{type:[String,Number],default:null},dataSetType:{type:String,default:null}},data:function(){return{loading:!0,error:!1}},created:function(){this.timeRequest()},methods:{timeRequest:function(){var t=this;this.loading=!0,Object(r["c"])(this.dataSetId,this.dataSetType).then(function(e){if(t.timeout&&(clearTimeout(t.timeout),t.timeout=null),e){var a=e.state;"PENDING"===a||"RUNNING"===a?(t.error=!1,t.timeout=setTimeout(function(){t.timeRequest()},3e3)):"ERROR"===a||"CANCELED"===a?(t.$message.error("数据集解析有误或者取消"),t.error=!0,t.loading=!1):"FINISHED"===a&&(t.$message.success("数据集解析成功"),t.error=!1,t.loading=!1,t.$store.commit("addComp",{type:"Line",x:0,y:0,list:t.$store.state.panel.compList,compType:null,vm:t}))}else t.$message.error("数据集解析有误"),t.error=!0,t.loading=!1}).catch(function(){t.loading=!1,t.error=!0})}}},c=o,l=a("2877"),u=Object(l["a"])(c,i,n,!1,null,null,null);e["default"]=u.exports},"7b5f":function(t,e,a){"use strict";var i=a("070d"),n=a.n(i);n.a},"91a5":function(t,e,a){"use strict";var i=a("facd"),n=a.n(i);n.a},c7ca:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["main",t.$store.state.panel.theme]},[t.$store.state.panel.preView?a("drag-container",{attrs:{list:t.$store.state.panel.compList}}):t._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.panel.preView,expression:"!$store.state.panel.preView"}],staticClass:"main-flex"},[a("div",{staticClass:"left-container"},[a("drag-header"),a("drag-container",{attrs:{list:t.$store.state.panel.compList}})],1),t.$store.state.panel.compList.length>0&&t.activeObj.type?a("div",{staticClass:"right-container"},[a(t.activeObj.type+"Config",{key:t.activeObj.i,tag:"component",attrs:{data:t.activeObj}})],1):t._e()])],1)},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left-header"},[a("ul",{staticClass:"utils"},t._l(t.utilsCList,function(e,i){return a("li",{key:i,attrs:{title:e.name,type:e.icon,draggable:"true"},on:{dblclick:function(a){return t.dbclick(e)},dragstart:function(e){return e.stopPropagation(),t.dragstart(e)}}},[a("i",{class:"iconfont icon-"+e.icon})])}),0),a("div",{staticClass:"silder"}),a("ul",t._l(t.compCList,function(e,i){return a("li",{key:i,attrs:{title:e.name,type:e.icon,draggable:"true"},on:{dblclick:function(a){return t.dbclick(e)},dragstart:function(e){return e.stopPropagation(),t.dragstart(e)}}},[a("i",{class:"iconfont icon-"+e.icon})])}),0)])},r=[],o=(a("6762"),a("2fdb"),a("27cc")),c={created:function(){this.utilsCList=o["f"],this.compCList=o["a"]},methods:{dbclick:function(t){["Select","Date"].includes(t.icon)||this.$store.commit("addComp",{type:t.icon,x:0,y:0,list:this.$store.state.panel.compList,compType:null,vm:this})},dragstart:function(t){t.dataTransfer.setData("type",t.target.type)}}},l=c,u=(a("91a5"),a("2877")),d=Object(u["a"])(l,s,r,!1,null,"772408f4",null),p=d.exports,m=a("40ee"),f={components:{dragHeader:p,dragContainer:m["a"]},computed:{activeObj:function(){return this.$store.state.panel.activeComp}},watch:{activeObj:function(){this.compChange=!0},"activeObj.styles.label.text":function(t,e){if(this.compChange)delete this.compChange;else{if(!t)return this.$message({type:"warning",message:"组件标题必填"}),this.activeObj.styles.label.text=e,void(this.compChange=!0);if(this.$store.state.panel.labelMap[t])return this.$message({type:"warning",message:"组件标题重复"}),this.activeObj.styles.label.text=e,void(this.compChange=!0);delete this.$store.state.panel.labelMap[e],this.$store.state.panel.labelMap[t]=!0}}}},g=f,h=(a("7b5f"),Object(u["a"])(g,i,n,!1,null,"7b95582e",null));e["a"]=h.exports},facd:function(t,e,a){}}]);
//# sourceMappingURL=chunk-0e1e8dcd.09fe9aa9.js.map