import{f as h,y as C,A as g,Y as $,z as k,a1 as y,Z as A,o as s,n as o,g as r,w as i,h as e,b as B,aF as w,j as n,p as c,t as a}from"./vendor.0a64e0b0.js";import{_ as x}from"./CopyText.41ab5170.js";import{u as E,l as F}from"./index.cfd81eac.js";/* empty css              *//* empty css               */const U=c("h3",{class:"mt-2"},"\u8BF7\u8F93\u5165 User Agent ",-1),b={class:"list-document"},j={key:0},D={key:1},T={key:2},V={key:3},N={key:4},M=h({setup(P){const{t:d}=C();E().setTitle("UserAgent \u89E3\u6790"),g({title:`UserAgent \u89E3\u6790 - ${d("app_name")}`});const u=$(navigator.userAgent||"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36"),_=new k,t=y(()=>_.setUA(u.value).getResult());return(S,l)=>{const m=A,p=F,v=x;return s(),o("div",null,[r(p,{class:"container-content-section"},{default:i(()=>[U,r(m,{modelValue:u.value,"onUpdate:modelValue":l[0]||(l[0]=f=>u.value=f),placeholder:"User Agent"},null,8,["modelValue"])]),_:1}),e(t).ua?(s(),B(p,{key:0,class:"container-content-section with-title",title:"\u89E3\u6790\u7ED3\u679C",icon:e(w)},{default:i(()=>[r(v,{text:e(t).ua},{default:i(()=>[c("div",null,a(e(t).ua),1)]),_:1},8,["text"]),c("div",b,[e(t).device.model?(s(),o("p",j,a(`\u8BBE\u5907: ${e(t).device.type} / ${e(t).device.vendor} / ${e(t).device.model}`),1)):n("",!0),e(t).browser.name?(s(),o("p",D,a(`\u6D4F\u89C8\u5668: ${e(t).browser.name} / ${e(t).browser.version}`),1)):n("",!0),e(t).os.name?(s(),o("p",T,a(`\u64CD\u4F5C\u7CFB\u7EDF: ${e(t).os.name} / ${e(t).os.version}`),1)):n("",!0),e(t).engine.name?(s(),o("p",V,a(`\u6D4F\u89C8\u5668\u5185\u6838: ${e(t).engine.name} / ${e(t).engine.version}`),1)):n("",!0),e(t).cpu.architecture?(s(),o("p",N,a(`CPU \u67B6\u6784: ${e(t).cpu.architecture}`),1)):n("",!0)])]),_:1},8,["icon"])):n("",!0)])}}});export{M as default};
