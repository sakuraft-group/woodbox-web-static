import{f as V,y as b,A as E,Y as _,a1 as f,Z as N,aD as y,o as r,n as h,g as s,w as c,p as o,N as $,O as S,h as i,b as j,t as v,j as z,i as T}from"./vendor.0a64e0b0.js";import{u as k,l as U}from"./index.98f0f520.js";import{_ as H}from"./CopyText.41ab5170.js";/* empty css               *//* empty css              *//* empty css               */const I={class:"page-tool-number2chinese"},L={class:"text-base font-bold mt-4"},M=T(" \u7E41\u4F53\u4E2D\u6587 "),R={class:"mt-4"},Z={class:"text-base"},A={class:"mt-6"},W=V({setup(O){const{t:g}=b();k().setTitle("\u6570\u5B57\u8F6C\u4E2D\u6587"),E({title:`\u6570\u5B57\u8F6C\u4E2D\u6587 - ${g("app_name")}`,script:[{src:"/static/scripts/nzh.min.js",defer:!0,async:!0}]});const l=_(!1),a=f(()=>l.value?"\u7E41\u4F53\u4E2D\u6587":"\u7B80\u4F53\u4E2D\u6587"),d=_(""),w=f(()=>{const t=d.value.trim();if(!Reflect.has(window,"Nzh")||!t.length)return[];const e=l.value?Nzh==null?void 0:Nzh.hk:Nzh==null?void 0:Nzh.cn;return[[`${a.value}\u5C0F\u5199`,e.encodeS(t)],[`${a.value}\u5927\u5199`,e.encodeB(t)],[`${a.value}\u91D1\u989D(\u7B80\u5199)`,e.toMoney(t,{outSymbol:!1})],[`${a.value}\u5927\u5199(\u5B8C\u6574)`,e.toMoney(t,{complete:!0,outSymbol:!1})]]}),C=/^负?[零一二三四五六七八九十百千万亿]*点?[零一二三四五六七八九]*$/g,D=/^负?[零壹贰叁肆伍陆柒捌玖拾佰仟万亿]*点?[零壹贰叁肆伍陆柒捌玖]*$/g,m=_(""),p=f(()=>{var e,n;const t=m.value.trim();return!Reflect.has(window,"Nzh")||!t.length?"":C.test(t)?`${(e=Nzh==null?void 0:Nzh.cn)==null?void 0:e.decodeS(t)}`:D.test(t)?`${(n=Nzh==null?void 0:Nzh.cn)==null?void 0:n.decodeB(t)}`:""});return(t,e)=>{const n=N,F=y,B=H,x=U;return r(),h("div",I,[s(x,{class:"container-content-section with-title",title:"\u6570\u5B57\u8F6C\u4E2D\u6587"},{default:c(()=>[s(n,{modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=u=>d.value=u),placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"},null,8,["modelValue"]),o("div",L,[M,s(F,{modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=u=>l.value=u)},null,8,["modelValue"])]),(r(!0),h($,null,S(i(w),(u,Y)=>(r(),h("div",R,[o("div",Z,v(u[0]),1),s(B,{text:u[1]},{default:c(()=>[o("div",null,v(u[1]),1)]),_:2},1032,["text"])]))),256))]),_:1}),s(x,{class:"container-content-section with-title",title:"\u4E2D\u6587\u8F6C\u6570\u5B57"},{default:c(()=>[s(n,{modelValue:m.value,"onUpdate:modelValue":e[2]||(e[2]=u=>m.value=u),placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"},null,8,["modelValue"]),o("div",A,[i(p).length?(r(),j(B,{key:0,text:i(p)},{default:c(()=>[o("div",null,v(i(p)),1)]),_:1},8,["text"])):z("",!0)])]),_:1})])}}});export{W as default};
