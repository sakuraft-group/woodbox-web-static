var p=(t,l,a)=>new Promise((f,e)=>{var c=n=>{try{u(a.next(n))}catch(i){e(i)}},o=n=>{try{u(a.throw(n))}catch(i){e(i)}},u=n=>n.done?f(n.value):Promise.resolve(n.value).then(c,o);u((a=a.apply(t,l)).next())});import{f as h,G as D,Y as v,a1 as R,o as I,b as S,w as k,p as w,t as P,h as E,k as x}from"./vendor.0a64e0b0.js";const A={class:"text-sm pl-2 pr-2"},G=h({props:{timeout:{default:60}},emits:["finished","tick"],setup(t,{emit:l}){const a=t,f=D();let e=v(0);const c=R(()=>e.value!==0),o=v(!1);function u(s){return p(this,null,function*(){let d=f[s];if(d){const r=yield d();return r===void 0?!0:r}return!1})}function n(){return p(this,null,function*(){if(!c.value){o.value=!0;const s=yield u("onSend");o.value=!1,s&&i()}})}function i(){e.value=a.timeout;const s=setInterval(()=>{e.value--,e.value<=0?(clearInterval(s),l("finished"),e.value=0):l("tick",e)},1e3)}return(s,d)=>{const r=x;return I(),S(r,{type:"text",loading:o.value,onClick:n},{default:k(()=>[w("span",A,P(E(c)?`${E(e)}s`:"\u53D1\u9001\u9A8C\u8BC1\u7801"),1)]),_:1},8,["loading"])}}});var m;(function(t){t.LOGIN="LOGIN",t.OTHER="OTHER",t.REGISTER="REGISTER",t.RESET_PWD="RESET_PWD",t.UPDATE="UPDATE"})(m||(m={}));var _;(function(t){t.PHONE="phone",t.EMAIL="email"})(_||(_={}));export{_ as C,G as _,m as a};
