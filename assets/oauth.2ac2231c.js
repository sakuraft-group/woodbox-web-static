var m=Object.defineProperty,U=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var O=(e,s,o)=>s in e?m(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,c=(e,s)=>{for(var o in s||(s={}))R.call(s,o)&&O(e,o,s[o]);if(h)for(var o of h(s))T.call(s,o)&&O(e,o,s[o]);return e},i=(e,s)=>U(e,b(s));import{$ as n}from"./vendor.0a64e0b0.js";import{U as t,B as r,R as d,i as u,j as a}from"./index.427ef12b.js";const C=e=>n(t.OAUTH.CONNECT,{baseURL:r,method:d.POST,headers:u(),body:a(e)}),L=e=>n(t.OAUTH.DISCONNECT,{baseURL:r,method:d.POST,headers:u(),body:a(e)}),N=e=>n(t.OAUTH.LOGIN,{baseURL:r,method:d.POST,headers:u(),body:a(i(c({},e),{openId:e.openId||"",unionId:e.unionId||"",shouldConnect:e.shouldConnect||!1,shouldReg:e.shouldReg||!1,username:e.username||"",password:e.password||""}))});export{C as c,L as d,N as l};
