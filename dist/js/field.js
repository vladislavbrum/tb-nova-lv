/*! For license information please see field.js.LICENSE.txt */
(()=>{var e={367:function(e,t){var n,o,r;o=[e,t],n=function(e,t){"use strict";var n,o,r="function"==typeof Map?new Map:(n=[],o=[],{has:function(e){return n.indexOf(e)>-1},get:function(e){return o[n.indexOf(e)]},set:function(e,t){-1===n.indexOf(e)&&(n.push(e),o.push(t))},delete:function(e){var t=n.indexOf(e);t>-1&&(n.splice(t,1),o.splice(t,1))}}),l=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){l=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}function i(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!r.has(e)){var t=null,n=null,o=null,i=function(){e.clientWidth!==n&&f()},a=function(t){window.removeEventListener("resize",i,!1),e.removeEventListener("input",f,!1),e.removeEventListener("keyup",f,!1),e.removeEventListener("autosize:destroy",a,!1),e.removeEventListener("autosize:update",f,!1),Object.keys(t).forEach((function(n){e.style[n]=t[n]})),r.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",a,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",f,!1),window.addEventListener("resize",i,!1),e.addEventListener("input",f,!1),e.addEventListener("autosize:update",f,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",r.set(e,{destroy:a,update:f}),s()}function s(){var n=window.getComputedStyle(e,null);"vertical"===n.resize?e.style.resize="none":"both"===n.resize&&(e.style.resize="horizontal"),t="content-box"===n.boxSizing?-(parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)):parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),isNaN(t)&&(t=0),f()}function u(t){var n=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=n,e.style.overflowY=t}function d(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}function c(){if(0!==e.scrollHeight){var o=d(e),r=document.documentElement&&document.documentElement.scrollTop;e.style.height="",e.style.height=e.scrollHeight+t+"px",n=e.clientWidth,o.forEach((function(e){e.node.scrollTop=e.scrollTop})),r&&(document.documentElement.scrollTop=r)}}function f(){c();var t=Math.round(parseFloat(e.style.height)),n=window.getComputedStyle(e,null),r="content-box"===n.boxSizing?Math.round(parseFloat(n.height)):e.offsetHeight;if(r<t?"hidden"===n.overflowY&&(u("scroll"),c(),r="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight):"hidden"!==n.overflowY&&(u("hidden"),c(),r="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight),o!==r){o=r;var i=l("autosize:resized");try{e.dispatchEvent(i)}catch(e){}}}}function a(e){var t=r.get(e);t&&t.destroy()}function s(e){var t=r.get(e);t&&t.update()}var u=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((u=function(e){return e}).destroy=function(e){return e},u.update=function(e){return e}):((u=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],(function(e){return i(e,t)})),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],a),e},u.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],s),e}),t.default=u,e.exports=t.default},void 0===(r="function"==typeof n?n.apply(t,o):n)||(e.exports=r)},744:(e,t)=>{"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,o]of t)n[e]=o;return n}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var l=t[o]={exports:{}};return e[o].call(l.exports,l,l.exports,n),l.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=Vue;var t={class:"bg-white overflow-hidden"};var o={class:"flex items-center key-value-item"},r={class:"flex flex-grow border-b border-50 key-value-fields"},l=["onClick"],i=["disabled","dusk","onFocus","onUpdate:modelValue"],a={key:0,class:"flex justify-center h-11 w-11 absolute",style:{right:"-40px"}};var s=n(367),u=n.n(s);const d={props:{index:Number,row:Object,disabled:{type:Boolean,default:!1},readOnly:{type:Boolean,default:!1},canDelete:{type:Boolean,default:!0}},mounted:function(){u()(this.$refs.columnFields)},methods:{handleColumnFieldFocus:function(e){this.$refs.columnFields[e].select()}},computed:{isEditable:function(){return!this.readOnly&&!this.disabled}}};var c=n(744);const f=(0,c.Z)(d,[["render",function(t,n,s,u,d,c){var f=(0,e.resolveComponent)("icon");return(0,e.openBlock)(),(0,e.createElementBlock)("div",o,[(0,e.createElementVNode)("div",r,[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(s.row.cells,(function(t,n){return(0,e.openBlock)(),(0,e.createElementBlock)("div",{key:"column-".concat(n),onClick:function(e){return c.handleColumnFieldFocus(n)},class:"flex-grow border-l border-50"},[(0,e.withDirectives)(((0,e.openBlock)(),(0,e.createElementBlock)("textarea",{class:(0,e.normalizeClass)([{"bg-white":!c.isEditable,"hover:bg-20 focus:bg-white":c.isEditable},"font-mono text-sm block min-h-input w-full form-control form-input form-input-row py-4 text-90 min-h-full"]),disabled:!c.isEditable,dusk:"key-value-value-".concat(n),key:t.id,onFocus:function(e){return c.handleColumnFieldFocus(n)},ref_for:!0,ref:"columnFields","onUpdate:modelValue":function(e){return s.row.cells[n]=e}},null,42,i)),[[e.vModelText,s.row.cells[n]]])],8,l)})),128))]),c.isEditable&&s.canDelete?((0,e.openBlock)(),(0,e.createElementBlock)("div",a,[(0,e.createElementVNode)("button",{onClick:n[0]||(n[0]=function(e){return t.$emit("remove-row",s.row.id)}),class:"flex appearance-none cursor-pointer text-70 hover:text-danger active:outline-none active:shadow-outline focus:outline-none focus:shadow-outline",style:{"align-items":"center"},tabindex:"-1",title:"Delete",type:"button"},[(0,e.createVNode)(f,{type:"trash"})])])):(0,e.createCommentVNode)("",!0)])}]]);const m={props:{canDelete:{type:Boolean,default:!0},editMode:{type:Boolean,default:!0}}},h=(0,c.Z)(m,[["render",function(t,n,o,r,l,i){return(0,e.openBlock)(),(0,e.createElementBlock)("div",{class:(0,e.normalizeClass)(["relative bg-30 bg-clip border border-60",{"mr-12":o.editMode&&o.canDelete}])},[(0,e.renderSlot)(t.$slots,"default")],2)}]]),p={props:["resource","resourceName","resourceId","field"],components:{Table:h,TableRow:f},data:function(){return{theData:[]}},created:function(){var e=Array.isArray(this.field.value)?this.field.value:JSON.parse(this.field.value);Array.isArray(e)&&e.length||(e=[]),this.theData=_.map(e,(function(e){return{cells:e}}))}},v=(0,c.Z)(p,[["render",function(n,o,r,l,i,a){var s=(0,e.resolveComponent)("TableRow"),u=(0,e.resolveComponent)("Table"),d=(0,e.resolveComponent)("PanelItem");return(0,e.openBlock)(),(0,e.createBlock)(d,{index:n.index,field:r.field},{value:(0,e.withCtx)((function(){return[n.theData.length>0?((0,e.openBlock)(),(0,e.createBlock)(u,{key:0,"edit-mode":!1,class:"overflow-hidden"},{default:(0,e.withCtx)((function(){return[(0,e.createElementVNode)("div",t,[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(n.theData,(function(t,n){return(0,e.openBlock)(),(0,e.createBlock)(s,{disabled:!0,key:n,row:t},null,8,["row"])})),128))])]})),_:1})):(0,e.createCommentVNode)("",!0)]})),_:1},8,["index","field"])}]]);var y={class:"bg-white overflow-hidden key-value-items"},b={key:0,class:"relative mr-12 mt-3 flex"},w={class:"flex flex-grow justify-center"},x=["onClick"],g={key:1,class:"mr-12 flex"},k={class:"ml-1"},C={class:"ml-1"},E=["innerHTML"];const B=LaravelNova;function A(e){return function(e){if(Array.isArray(e))return F(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return F(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function N(){var e=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}const T={mixins:[B.HandlesValidationErrors,B.FormField],components:{Table:h,TableRow:f},data:function(){return{theData:[]}},mounted:function(){var e=Array.isArray(this.field.value)?this.value:JSON.parse(this.field.value);if(Array.isArray(e)&&e.length||(e=[]),this.theData=_.map(e,(function(e){return{id:N(),cells:e}})),0===this.theData.length)for(var t=0;t<(this.defaultAttributes.minRows||1);t++)this.addRow()},methods:{fill:function(e){e.append(this.field.attribute,JSON.stringify(this.finalPayload))},addRow:function(){var e=this;return this.theData.length+1>this.defaultAttributes.maxRows?this.$toasted.show(this.__("novaTableField.maxRowsError",{max:this.defaultAttributes.maxRows}),{type:"error"}):_.tap(N(),(function(t){return e.theData=[].concat(A(e.theData),[{id:t,cells:Array(e.numberOfColumns).join(".").split(".")}]),t}))},addColumn:function(){var e=this;if(this.numberOfColumns+1>this.defaultAttributes.maxColumns)return this.$toasted.show(this.__("novaTableField.maxColumnsError",{max:this.defaultAttributes.maxColumns}),{type:"error"});this.theData.forEach((function(t,n){e.theData[n].cells.push("")}))},addRowAndSelect:function(){return this.selectRow(this.addRow())},removeRow:function(e){var t=this;return this.theData.length-1<this.defaultAttributes.minRows?this.$toasted.show(this.__("novaTableField.minRowsError",{min:this.defaultAttributes.minRows}),{type:"error"}):_.tap(_.findIndex(this.theData,(function(t){return t.id===e})),(function(e){return t.theData.splice(e,1)}))},removeColumn:function(e){return this.numberOfColumns-1<this.defaultAttributes.minColumns?this.$toasted.show(this.__("novaTableField.minColumnsError",{min:this.defaultAttributes.minColumns}),{type:"error"}):this.theData.map((function(t){return t.cells.splice(e-1,1),t}))},removeTable:function(){return this.theData=[]},addColumnAndSelect:function(){return this.selectColumn(this.addColumn())},selectRow:function(e){var t=this;return this.$nextTick((function(){t.$refs[e][0].$refs.columnFields[0].select()}))},selectColumn:function(){var e=this;return this.$nextTick((function(){Object.values(e.$refs).map((function(e){return u()(e[0].$refs.columnFields)}))[0].slice(-1)[0].select()}))}},computed:{finalPayload:function(){return _(this.theData).map((function(e){return e&&e.cells&&e.cells.length>0?e.cells:void 0})).reject((function(e){return void 0===e})).value()},defaultAttributes:function(){return{minRows:this.field.minRows||1,maxRows:this.field.maxRows,minColumns:this.field.minColumns||1,maxColumns:this.field.maxColumns}},numberOfColumns:function(){return this.theData[0]?this.theData[0].cells.length:this.defaultAttributes.minColumns}}},D=(0,c.Z)(T,[["render",function(t,n,o,r,l,i){var a=(0,e.resolveComponent)("TableRow"),s=(0,e.resolveComponent)("Table"),u=(0,e.resolveComponent)("icon"),d=(0,e.resolveComponent)("DefaultField");return(0,e.openBlock)(),(0,e.createBlock)(d,{field:t.currentField,errors:t.errors,"show-help-text":t.showHelpText,"full-width-content":t.currentField.fullWidth},{field:(0,e.withCtx)((function(){return[(0,e.createVNode)(s,{"can-delete":t.field.canDelete,"edit-mode":!t.field.readonly},{default:(0,e.withCtx)((function(){return[(0,e.createElementVNode)("div",y,[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(t.theData,(function(n,o){return(0,e.openBlock)(),(0,e.createBlock)(a,{key:n.id,ref_for:!0,ref:n.id,"can-delete":t.field.canDelete,index:o,"read-only":t.field.readonly,row:n,onRemoveRow:i.removeRow},null,8,["can-delete","index","read-only","row","onRemoveRow"])})),128))])]})),_:1},8,["can-delete","edit-mode"]),t.field.canDelete?((0,e.openBlock)(),(0,e.createElementBlock)("div",b,[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(i.numberOfColumns,(function(t){return(0,e.openBlock)(),(0,e.createElementBlock)("div",w,[(0,e.createElementVNode)("button",{class:"appearance-none cursor-pointer text-70 hover:text-danger active:outline-none active:shadow-outline focus:outline-none focus:shadow-outline",tabindex:"-1",title:"Delete",type:"button",onClick:function(e){return i.removeColumn(t)}},[(0,e.createVNode)(u,{type:"trash"})],8,x)])})),256))])):(0,e.createCommentVNode)("",!0),!t.field.readonly&&t.field.canAdd?((0,e.openBlock)(),(0,e.createElementBlock)("div",g,[(0,e.createElementVNode)("button",{class:"btn btn-link dim cursor-pointer rounded-lg mx-auto text-primary mt-3 px-3 rounded-b-lg flex items-center",type:"button",onClick:n[0]||(n[0]=function(){return i.addRowAndSelect&&i.addRowAndSelect.apply(i,arguments)})},[(0,e.createVNode)(u,{height:"24",type:"plus","view-box":"0 0 24 24",width:"24"}),(0,e.createElementVNode)("span",k,(0,e.toDisplayString)(t.__("novaTableField.addRow")),1)]),i.numberOfColumns>0?((0,e.openBlock)(),(0,e.createElementBlock)("button",{key:0,class:"btn btn-link dim cursor-pointer rounded-lg mx-auto text-primary mt-3 px-3 rounded-b-lg flex items-center",tabindex:"-1",type:"button",onClick:n[1]||(n[1]=function(){return i.addColumnAndSelect&&i.addColumnAndSelect.apply(i,arguments)})},[(0,e.createVNode)(u,{height:"24",type:"plus","view-box":"0 0 24 24",width:"24"}),(0,e.createElementVNode)("span",C,(0,e.toDisplayString)(t.__("novaTableField.addColumn")),1)])):(0,e.createCommentVNode)("",!0)])):(0,e.createCommentVNode)("",!0),t.field.helpText?((0,e.openBlock)(),(0,e.createElementBlock)("div",{key:2,class:"help-text help-text mt-2",innerHTML:t.field.helpText},null,8,E)):(0,e.createCommentVNode)("",!0)]})),_:1},8,["field","errors","show-help-text","full-width-content"])}]]);Nova.booting((function(e){e.component("detail-nova-table-field",v),e.component("form-nova-table-field",D)}))})()})();
