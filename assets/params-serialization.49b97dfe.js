import{f as F,y as v,A as w,Y as h,a1 as C,Z as S,o as _,n as f,g as o,w as c,h as u,p as r,t as E,j as x}from"./vendor.0a64e0b0.js";import{u as V,l as b}from"./index.cfd81eac.js";import{_ as j}from"./CopyText.41ab5170.js";/* empty css              *//* empty css               */const D={key:0,class:"mt-4"},y=r("span",{class:"text-base font-bold"}," \u53CD\u5E8F\u5217\u5316\u7ED3\u679C ",-1),U={class:"mt-2"},B={key:0,class:"mt-4"},R=r("span",{class:"text-base font-bold"}," \u5E8F\u5217\u5316\u7ED3\u679C ",-1),A={class:"mt-2"},$=F({setup(L){const{t:g}=v();V().setTitle("URL \u53C2\u6570\u5E8F\u5217\u5316"),w({title:`URL \u53C2\u6570\u5E8F\u5217\u5316/\u53CD\u5E8F\u5217\u5316 - ${g("app_name")}`});const i=h(""),p=C(()=>{const n=i.value.trim();if(!n.length)return"";const s=/^https?\:/.test(n)?new URL(n).searchParams:new URLSearchParams(n),t={};return s.forEach((a,e)=>{t[e]?Array.isArray(t[e])?t[e].push(a):t[e]=[t[e],a]:t[e]=a}),JSON.stringify(t,null,2)}),d=h(""),m=C(()=>{const n=d.value.trim();if(!n.length)return"";try{const s=JSON.parse(n),t=new URLSearchParams;return Object.entries(s).forEach(([a,e])=>{Array.isArray(e)?e.forEach(l=>t.append(a,l)):t.append(a,`${e}`)}),t.toString()}catch(s){return""}});return(n,s)=>{const t=S,a=j,e=b;return _(),f("div",null,[o(e,{class:"container-content-section with-title",title:"\u53CD\u5E8F\u5217\u5316"},{default:c(()=>[o(t,{modelValue:i.value,"onUpdate:modelValue":s[0]||(s[0]=l=>i.value=l),placeholder:"https://cn.bing.com/search?q=hello&qs=n \u6216 (?)q=hello&qs=n"},null,8,["modelValue"]),u(p).length?(_(),f("div",D,[y,r("div",U,[o(a,{text:u(p)},{default:c(()=>[r("div",null,E(u(p)),1)]),_:1},8,["text"])])])):x("",!0)]),_:1}),o(e,{class:"container-content-section with-title",title:"\u5E8F\u5217\u5316"},{default:c(()=>[o(t,{type:"textarea",modelValue:d.value,"onUpdate:modelValue":s[1]||(s[1]=l=>d.value=l),autosize:{minRows:5},placeholder:`\u8BF7\u8F93\u5165 json \u5BF9\u8C61\uFF0C\u5982
{id1: 111, name: "demo"}`},null,8,["modelValue"]),u(m).length?(_(),f("div",B,[R,r("div",A,[o(a,{text:u(m)},{default:c(()=>[r("div",null,E(u(m)),1)]),_:1},8,["text"])])])):x("",!0)]),_:1})])}}});export{$ as default};
