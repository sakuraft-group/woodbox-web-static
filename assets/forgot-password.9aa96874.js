var E=(m,h,_)=>new Promise((g,w)=>{var x=n=>{try{p(_.next(n))}catch(d){w(d)}},A=n=>{try{p(_.throw(n))}catch(d){w(d)}},p=n=>n.done?g(n.value):Promise.resolve(n.value).then(x,A);p((_=_.apply(m,h)).next())});import{f as U,y as $,x as q,A as H,Y as f,m as M,Z as O,k as W,_ as Y,L as Z,o as P,n as V,g as u,w as l,p as c,t as j,h as z,a0 as G,R as J,S as K,E as v}from"./vendor.0a64e0b0.js";/* empty css                  */import{C as F,a as Q,_ as X}from"./contact.5c8dfd8f.js";/* empty css              */import{_ as ee,a as ue,u as se,b as oe,c as te,s as ae,r as re}from"./index.cfd81eac.js";import{u as le}from"./useValidator.9a78a0bb.js";const y=m=>(J("data-v-00c52efc"),m=m(),K(),m),ne={class:"container-content-section"},de=y(()=>c("span",{class:"text-xl text-gray-700"},"\u5FD8\u8BB0\u5BC6\u7801",-1)),ce={key:0,class:"flex flex-col justify-start items-center mt-8"},ie={class:"mt-12 w-full"},pe=y(()=>c("span",null,"\u786E\u8BA4\u8D26\u53F7",-1)),fe={key:1,class:"flex flex-col justify-start items-center"},me={class:"flex flex-col justify-start items-center text-sm text-gray-500"},_e={class:"mt-8"},Be={class:"mt-8 w-full"},ve=y(()=>c("span",{class:"text-sm text-gray-500"}," \u5BC6\u7801\u4E3A 6~16 \u4F4D\uFF0C\u53EF\u5305\u542B\u6570\u5B57\u3001\u5927\u5C0F\u5199\u82F1\u6587\u5B57\u6BCD\u548C\u7B26\u53F7\u7EC4\u6210\uFF0C\u4E0D\u80FD\u4E3A\u7EAF\u82F1\u6587\u6216\u7EAF\u6570\u5B57 ",-1)),we=y(()=>c("span",null,"\u91CD\u7F6E\u5BC6\u7801",-1)),Ce=U({setup(m){const{t:h}=$(),_=q(),g=ue(),{validatePhoneNumber:w,validateEmail:x,validatePassword:A}=le();se().setTitle("\u5FD8\u8BB0\u5BC6\u7801"),H({title:`\u5FD8\u8BB0\u5BC6\u7801 - ${h("app_name")}`,script:oe()});const p=f(!1),n=f(!1),d=f(!1),D=f(!1),t=f(""),a=f({verifyCode:"",password:"",confirmPassword:""}),I={verifyCode:{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",length:4},password:[{required:!0,trigger:"blur",validator:(s,e,o)=>{e.trim()===""?o(new Error("\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801")):A(e)?o():o(new Error("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u5BC6\u7801"))}}],confirmPassword:[{required:!0,trigger:"blur",validator:(s,e,o)=>{e.trim()===""?o(new Error("\u8BF7\u786E\u8BA4\u65B0\u5BC6\u7801")):a.value.password!==e?o(new Error("\u4E0E\u65B0\u5BC6\u7801\u4E0D\u4E00\u81F4")):o()}}]},S=f();function R(){return E(this,null,function*(){if(!x(t.value)&&!w(t.value)){v.error("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u6216\u624B\u673A\u53F7");return}p.value=!0;const s=yield g.checkExists(t.value);if(p.value=!1,!(D.value=s[0])){v.error(s[1]);return}d.value=w(t.value)})}function k(){return E(this,null,function*(){try{const[s,e]=yield te();if(!s)throw new Error(e);const{code:o,message:i,retCode:B}=yield ae({channel:d.value?F.PHONE:F.EMAIL,codeType:Q.RESET_PWD,target:t.value,challenge:e});if(o!==200||B!==0)throw new Error(i);return v.success("\u9A8C\u8BC1\u7801\u53D1\u9001\u6210\u529F, 5 \u5206\u949F\u5185\u6709\u6548"),!0}catch(s){return v.error(`${s}`),!1}})}function T(){return E(this,null,function*(){var s;if(!!(yield(s=S.value)==null?void 0:s.validate()))try{const{code:e,data:o,message:i,retCode:B}=yield re({channel:d.value?F.PHONE:F.EMAIL,account:t.value,verifyCode:a.value.verifyCode,password:a.value.password});if(e!==200||B!==0)throw new Error(i);v.success("\u5BC6\u7801\u91CD\u7F6E\u6210\u529F"),_.replace({path:"/account/login"})}catch(e){v.error(`${e}`)}})}return(s,e)=>{const o=M,i=O,B=W,L=X,C=Y,N=Z;return P(),V("div",ne,[u(N,{class:"card-forgot-password pt-2 p-4"},{default:l(()=>[u(o,{justify:"center",align:"middle"},{default:l(()=>[de]),_:1}),D.value?(P(),V("div",fe,[c("div",me,[c("span",_e," \u8BF7\u70B9\u51FB\u53D1\u9001\u9A8C\u8BC1\u7801\u81F3 "+j(d.value?t.value.replaceRange(3,8,"****"):t.value.replaceRange(0,t.value.indexOf("@"),"****")),1),c("span",null," \u82E5\u672A\u63A5\u6536\u5230\uFF0C\u8BF7\u68C0\u67E5"+j(d.value?"\u624B\u673A\u53F7":"\u90AE\u7BB1")+"\u662F\u5426\u586B\u5199\u6B63\u786E ",1)]),c("div",Be,[u(z(G),{ref:(r,b)=>{b.resetPasswdForm=r,S.value=r},model:a.value,rules:I},{default:l(()=>[u(C,{prop:"verifyCode"},{default:l(()=>[u(i,{modelValue:a.value.verifyCode,"onUpdate:modelValue":e[1]||(e[1]=r=>a.value.verifyCode=r),placeholder:"\u5B89\u5168\u9A8C\u8BC1\u7801",autocomplete:"off"},{append:l(()=>[u(L,{onSend:k})]),_:1},8,["modelValue"])]),_:1}),u(C,{prop:"password"},{default:l(()=>[u(i,{type:"passowrd","show-password":"",modelValue:a.value.password,"onUpdate:modelValue":e[2]||(e[2]=r=>a.value.password=r),placeholder:"\u65B0\u5BC6\u7801",autocomplete:"off"},null,8,["modelValue"])]),_:1}),u(C,{prop:"confirmPassword"},{default:l(()=>[u(i,{type:"passowrd","show-password":"",modelValue:a.value.confirmPassword,"onUpdate:modelValue":e[3]||(e[3]=r=>a.value.confirmPassword=r),placeholder:"\u786E\u8BA4\u65B0\u5BC6\u7801",autocomplete:"off"},null,8,["modelValue"])]),_:1}),ve,u(C,{class:"mt-12"},{default:l(()=>[u(B,{type:"primary",class:"w-full",loading:n.value,onClick:T},{default:l(()=>[we]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])])):(P(),V("div",ce,[u(i,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=r=>t.value=r),placeholder:"\u90AE\u7BB1/\u624B\u673A\u53F7",autocomplete:"off"},null,8,["modelValue"]),c("div",ie,[u(B,{type:"primary",class:"w-full",loading:p.value,onClick:R},{default:l(()=>[pe]),_:1},8,["loading"])])]))]),_:1})])}}});var Pe=ee(Ce,[["__scopeId","data-v-00c52efc"]]);export{Pe as default};
