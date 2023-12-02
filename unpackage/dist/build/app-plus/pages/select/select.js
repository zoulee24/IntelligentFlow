"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(()=>{var I=Object.create;var v=Object.defineProperty;var N=Object.getOwnPropertyDescriptor;var P=Object.getOwnPropertyNames;var R=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty;var b=(o,e)=>()=>(e||o((e={exports:{}}).exports,e),e.exports);var H=(o,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of P(e))!D.call(o,r)&&r!==t&&v(o,r,{get:()=>e[r],enumerable:!(s=N(e,r))||s.enumerable});return o};var p=(o,e,t)=>(t=o!=null?I(R(o)):{},H(e||!o||!o.__esModule?v(t,"default",{value:o,enumerable:!0}):t,o));var f=b((V,S)=>{S.exports=Vue});var _=b((j,w)=>{w.exports=uni.Pinia});var i=p(f()),x=p(_());var $="onShow",B="onHide";function d(o,e,...t){uni.__log__?uni.__log__(o,e,...t):console[o].apply(console,[...t,e])}var k=o=>(e,t=(0,i.getCurrentInstance)())=>{!i.isInSSRComponentSetup&&(0,i.injectHook)(o,e,t)},T=k($),C=k(B);var A=(0,x.defineStore)("setting",()=>{let o=uni.getStorageSync("setting");o||(o={ip:"127.0.0.1",port:8080});let e=(0,i.ref)(o);o=uni.getStorageSync("text"),o||(o={topTitle:"\u667A\u6167\u5BA2\u6D41",leftTitle:"\u5BA2\u6D41\u5206\u5E03",rightTitle:"\u8FD1\u671F\u5BA2\u6D41",centre:{title:"\u666F\u533A\u4EBA\u6570",text:"\u4ECA\u65E5\u5165\u56ED"},bottomTitle:"\u5206\u65F6\u5BA2\u6D41"});let t=(0,i.ref)(o),s=l=>{l&&(Object.assign(e.value,l),uni.setStorageSync("setting",e.value))},r=l=>{Object.assign(t.value,l)},a=(0,i.computed)(()=>(e.value===void 0&&(e.value={ip:"127.0.0.1",port:8080}),`http://${e.value.ip}:${e.value.port}/power-haven`));return{setting:e,textConfig:t,updateText:r,updateSetting:s,baseUrl:a}}),m=(o,e)=>{let t=o.__vccOpts||o;for(let[s,r]of e)t[s]=r;return t};var n=p(f());var L="/static/background.png";function U(o,e=null){let t=A();return new Promise((s,r)=>{uni.request({method:"GET",url:t.baseUrl+o,data:e,success(a){a.statusCode==200?(response=a.data,response.code==0?s(response.data):r(response.msg)):r(a.errMsg)},fail(a){r(a)}})})}function O(){return U("/camera/selectshop")}var Z=p(_()),W={card:{"":{paddingTop:10,paddingRight:10,paddingBottom:10,paddingLeft:10,transitionProperty:"boxShadow",transitionDuration:300}},text:{"":{fontSize:24,fontWeight:"600"}},"@TRANSITION":{card:{property:"boxShadow",duration:300}}},z={__name:"TvCard",props:{title:{type:String,require:!0}},setup(o){let e=o;return(t,s)=>((0,n.openBlock)(),(0,n.createElementBlock)("view",{class:"card",onKeydown:s[0]||(s[0]=(0,n.withKeys)((...r)=>t.handleKeyPress&&t.handleKeyPress(...r),["enter"])),renderWhole:!0},[(0,n.createElementVNode)("u-text",{class:"text"},(0,n.toDisplayString)(e.title),1)],32))}},M=m(z,[["styles",[W]]]),q={contain:{"":{width:962,height:542,overflow:"hidden"}},background:{"":{position:"absolute",zIndex:-2}},"bg-img-1":{"":{top:0,left:0,width:962,height:542}},title:{"":{fontSize:36,fontWeight:"800",textAlign:"center",color:"#00bfff"}},"sub-title":{"":{fontSize:28,fontWeight:"600",textAlign:"center",marginTop:10,marginRight:10,marginBottom:10,marginLeft:10,color:"#00bfff"}},"card-box":{"":{display:"flex",alignItems:"center",justifyContent:"center"}},"card-item":{"":{marginTop:4,marginRight:4,marginBottom:4,marginLeft:4,backgroundColor:"#FFE4C4",borderColor:"#ff0000",borderRadius:10}}},F={__name:"select",setup(o){let e=(0,n.ref)([]);var t=0,s=(0,n.ref)([]);let r="border-width: 4px; margin: 0px;",a={left:21,right:22,top:19,bottom:20,confirm:23,menu:82};function l(u){u.keyCode===a.bottom?(s.value[t]="",t=Math.min(t+1,e.value.length),s.value[t]=r):u.keyCode===a.top?(s.value[t]="",t=Math.max(t-1,0),s.value[t]=r):u.keyCode===a.confirm&&e.value.length>0?(uni.showToast({title:`\u8DF3\u8F6C => ${e.value[t].location}`,mask:!0,icon:"none",duration:500}),setTimeout(()=>{uni.navigateTo({url:`/pages/index/index?cameraId=${e.value[t].cameraId}`})},200)):u.keyCode===a.menu&&uni.navigateTo({url:"/pages/Setting/index",fail:c=>{d("error","at pages/select/select.nvue:86","err= ",c)}})}return T(()=>{plus.key.removeEventListener("keydown",()=>{},!1),plus.key.addEventListener("keydown",l,!1),O().then(c=>{s.value=[],Array.isArray(c)&&c.length>0?(t=0,c.forEach(()=>{s.value.push("")}),s.value[t]=r,e.value=c):d("warn","at pages/select/select.nvue:114","\u6570\u636E\u4E0D\u5BF9")})}),C(()=>{plus.key.removeEventListener("keydown",l)}),(u,c)=>((0,n.openBlock)(),(0,n.createElementBlock)("scroll-view",{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true",style:{flexDirection:"column"}},[(0,n.createElementVNode)("view",{class:"contain"},[(0,n.createElementVNode)("u-image",{class:"background bg-img-1",src:L,mode:"scaleToFill"}),(0,n.createElementVNode)("u-text",{class:"title"},"PowerHaven"),(0,n.createElementVNode)("u-text",{class:"sub-title"},"\u9009\u62E9\u5E97\u94FA"),((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.value,(E,h)=>((0,n.openBlock)(),(0,n.createElementBlock)("view",{class:"card-box",key:h},[(0,n.createVNode)((0,n.unref)(M),{class:"card-item",style:(0,n.normalizeStyle)((0,n.unref)(s)[h]),title:E.location},null,8,["style","title"])]))),128))])]))}},g=m(F,[["styles",[q]]]);var y=plus.webview.currentWebview();if(y){let o=parseInt(y.id),e="pages/select/select",t={};try{t=JSON.parse(y.__query__)}catch(r){}g.mpType="page";let s=Vue.createPageApp(g,{$store:getApp({allowDefault:!0}).$store,__pageId:o,__pagePath:e,__pageQuery:t});s.provide("__globalStyles",Vue.useCssStyles([...__uniConfig.styles,...g.styles||[]])),s.mount("#root")}})();
