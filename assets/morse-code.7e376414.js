import{f as C,y as v,A as V,Y as f,a1 as j,Z as w,aD as D,o as m,n as B,g as o,w as i,h as c,b as A,aE as N,j as S,Q as T,p as r,t as b,i as y}from"./vendor.0a64e0b0.js";import{_ as I}from"./CopyText.41ab5170.js";import{u as k,l as U}from"./index.cfd81eac.js";/* empty css               *//* empty css              *//* empty css               */const _={A:"01",B:"1000",C:"1010",D:"100",E:"0",F:"0010",G:"110",H:"0000",I:"00",J:"0111",K:"101",L:"0100",M:"11",N:"10",O:"111",P:"0110",Q:"1101",R:"010",S:"000",T:"1",U:"001",V:"0001",W:"011",X:"1001",Y:"1011",Z:"1100","0":"11111","1":"01111","2":"00111","3":"00011","4":"00001","5":"00000","6":"10000","7":"11000","8":"11100","9":"11110",".":"010101",",":"110011","?":"001100","'":"011110","!":"101011","/":"10010","(":"10110",")":"101101","&":"01000",":":"111000",";":"101010","=":"10001","+":"01010","-":"100001",_:"001101",'"':"010010",$:"0001001","@":"011010"},h={};for(const e in _)h[_[e]]=e;function g(e){return e=e||{},[e.space||"/",e.short||".",e.long||"-"]}function $(e){let t=[];for(let n=0;n<e.length;n++)t[n]=("00"+e.charCodeAt(n).toString(16)).slice(-4);return t=t.join(""),t=parseInt(t,16).toString(2),t}function H(e,t){t=g(t);const n=[];e=e.replace(/\s+/g,"").toLocaleUpperCase().split("");let s,u;for(let l=0,a=e.length;l<a;l++)s=e[l],u=_[s],u||(u=$(s)),n.push(u.replace(/0/g,t[1]).replace(/1/g,t[2]));return n.join(t[0])}function O(e){return e=parseInt(e,2),isNaN(e)?"":unescape("%u"+e.toString(16))}function R(e,t){t=g(t);const n=[];e=e.split(t[0]);let s,u;for(let l=0,a=e.length;l<a;l++)s=e[l].replace(/\s+/g,"").replace(new RegExp("\\"+t[1],"g"),"0").replace(new RegExp("\\"+t[2],"g"),"1"),u=h[s],u||(u=O(s)),n.push(u);return n.join("")}const L=r("h3",{class:"mt-2"},"\u8BF7\u8F93\u5165\u6587\u672C",-1),M={class:"text-base font-bold mt-4"},Q=y(" \u89E3\u7801 "),Y=r("div",{class:"list-document"},[r("p",null," \u672C\u5E73\u53F0\u652F\u6301\u7F16\u7801\u4E2D\u6587\uFF0C\u4F46\u53EF\u80FD\u4EC5\u652F\u6301\u5728\u672C\u7AD9\u89E3\u7801 ")],-1),X=C({setup(e){const{t}=v();k().setTitle("\u6469\u65AF\u7535\u7801"),V({title:`\u6469\u65AF\u7535\u7801 - ${t("app_name")}`});const n=f(!1),s=f(""),u=j(()=>n.value?R(s.value):H(s.value));return(l,a)=>{const E=w,x=D,d=U,F=I;return m(),B("div",null,[o(d,{class:"container-content-section"},{default:i(()=>[L,o(E,{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=p=>s.value=p),placeholder:"\u4E00\u4E2A\u6728\u51FD"},null,8,["modelValue"]),r("div",M,[Q,o(x,{class:"ml-1",modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=p=>n.value=p)},null,8,["modelValue"])])]),_:1}),c(u).length?(m(),A(d,{key:0,class:"container-content-section with-title",title:`${n.value?"\u89E3\u7801":"\u7F16\u7801"}\u7ED3\u679C`,icon:c(N)},{default:i(()=>[o(F,{text:c(u)},{default:i(()=>[r("div",null,b(c(u)),1)]),_:1},8,["text"])]),_:1},8,["title","icon"])):S("",!0),o(d,{class:"container-content-section with-title",title:l.$t("title.document"),icon:c(T)},{default:i(()=>[Y]),_:1},8,["title","icon"])])}}});export{X as default};
