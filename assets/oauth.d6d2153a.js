var m=Object.defineProperty,U=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var c=(e,s,o)=>s in e?m(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,O=(e,s)=>{for(var o in s||(s={}))T.call(s,o)&&c(e,o,s[o]);if(a)for(var o of a(s))b.call(s,o)&&c(e,o,s[o]);return e},i=(e,s)=>U(e,R(s));import{$ as n}from"./vendor.303085b1.js";import{U as t,B as d,R as r,i as u,j as h}from"./index.0cdc481d.js";const f=e=>n(t.OAUTH.CONNECT,{baseURL:d,method:r.POST,headers:u(),body:h(e)}),L=e=>n(t.OAUTH.DISCONNECT,{baseURL:d,method:r.POST,headers:u(),body:h(e)}),N=e=>n(t.OAUTH.LOGIN,{baseURL:d,method:r.POST,headers:u(),body:h(i(O({},e),{openId:e.openId||"",unionId:e.unionId||"",shouldConnect:e.shouldConnect||!1,shouldReg:e.shouldReg||!1,username:e.username||"",password:e.password||""}))});export{f as c,L as d,N as l};
