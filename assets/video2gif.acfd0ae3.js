var Be=Object.defineProperty;var X=Object.getOwnPropertySymbols;var me=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var ge=(o,l,n)=>l in o?Be(o,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[l]=n,ee=(o,l)=>{for(var n in l||(l={}))me.call(l,n)&&ge(o,n,l[n]);if(X)for(var n of X(l))he.call(l,n)&&ge(o,n,l[n]);return o};var ve=(o,l)=>{var n={};for(var a in o)me.call(o,a)&&l.indexOf(a)<0&&(n[a]=o[a]);if(o!=null&&X)for(var a of X(o))l.indexOf(a)<0&&he.call(o,a)&&(n[a]=o[a]);return n};var R=(o,l,n)=>new Promise((a,f)=>{var c=h=>{try{d(n.next(h))}catch(E){f(E)}},v=h=>{try{d(n.throw(h))}catch(E){f(E)}},d=h=>h.done?a(h.value):Promise.resolve(h.value).then(c,v);d((n=n.apply(o,l)).next())});import{aJ as Se,f as Ae,y as xe,A as De,Y as P,a1 as Pe,a4 as Oe,am as Ne,Z as Ue,aK as Ie,aL as Ge,aM as Te,_ as Re,aN as Ve,a0 as Me,au as We,av as qe,aw as Ye,o as J,n as se,g as L,w as A,b as we,h as ye,aO as He,j as te,Q as ze,ax as be,p as O,i as re,t as ie,aa as le}from"./vendor.303085b1.js";/* empty css                 *//* empty css                     */import{u as Je,l as Ze}from"./index.0cdc481d.js";/* empty css              *//* empty css                *//* empty css               *//* empty css                  */var Ke={exports:{}};(function(o){var l=function(n){var a=Object.prototype,f=a.hasOwnProperty,c,v=typeof Symbol=="function"?Symbol:{},d=v.iterator||"@@iterator",h=v.asyncIterator||"@@asyncIterator",E=v.toStringTag||"@@toStringTag";function F(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{F({},"")}catch(t){F=function(e,r,u){return e[r]=u}}function x(t,e,r,u){var i=e&&e.prototype instanceof V?e:V,y=Object.create(i.prototype),$=new H(u||[]);return y._invoke=oe(t,r,$),y}n.wrap=x;function I(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(u){return{type:"throw",arg:u}}}var D="suspendedStart",b="suspendedYield",_="executing",T="completed",C={};function V(){}function G(){}function s(){}var p={};F(p,d,function(){return this});var g=Object.getPrototypeOf,m=g&&g(g(Y([])));m&&m!==a&&f.call(m,d)&&(p=m);var w=s.prototype=V.prototype=Object.create(p);G.prototype=s,F(w,"constructor",s),F(s,"constructor",G),G.displayName=F(s,E,"GeneratorFunction");function N(t){["next","throw","return"].forEach(function(e){F(t,e,function(r){return this._invoke(e,r)})})}n.isGeneratorFunction=function(t){var e=typeof t=="function"&&t.constructor;return e?e===G||(e.displayName||e.name)==="GeneratorFunction":!1},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,s):(t.__proto__=s,F(t,E,"GeneratorFunction")),t.prototype=Object.create(w),t},n.awrap=function(t){return{__await:t}};function B(t,e){function r(y,$,k,S){var j=I(t[y],t,$);if(j.type==="throw")S(j.arg);else{var ae=j.arg,z=ae.value;return z&&typeof z=="object"&&f.call(z,"__await")?e.resolve(z.__await).then(function(W){r("next",W,k,S)},function(W){r("throw",W,k,S)}):e.resolve(z).then(function(W){ae.value=W,k(ae)},function(W){return r("throw",W,k,S)})}}var u;function i(y,$){function k(){return new e(function(S,j){r(y,$,S,j)})}return u=u?u.then(k,k):k()}this._invoke=i}N(B.prototype),F(B.prototype,h,function(){return this}),n.AsyncIterator=B,n.async=function(t,e,r,u,i){i===void 0&&(i=Promise);var y=new B(x(t,e,r,u),i);return n.isGeneratorFunction(e)?y:y.next().then(function($){return $.done?$.value:y.next()})};function oe(t,e,r){var u=D;return function(y,$){if(u===_)throw new Error("Generator is already running");if(u===T){if(y==="throw")throw $;return U()}for(r.method=y,r.arg=$;;){var k=r.delegate;if(k){var S=Q(k,r);if(S){if(S===C)continue;return S}}if(r.method==="next")r.sent=r._sent=r.arg;else if(r.method==="throw"){if(u===D)throw u=T,r.arg;r.dispatchException(r.arg)}else r.method==="return"&&r.abrupt("return",r.arg);u=_;var j=I(t,e,r);if(j.type==="normal"){if(u=r.done?T:b,j.arg===C)continue;return{value:j.arg,done:r.done}}else j.type==="throw"&&(u=T,r.method="throw",r.arg=j.arg)}}}function Q(t,e){var r=t.iterator[e.method];if(r===c){if(e.delegate=null,e.method==="throw"){if(t.iterator.return&&(e.method="return",e.arg=c,Q(t,e),e.method==="throw"))return C;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return C}var u=I(r,t.iterator,e.arg);if(u.type==="throw")return e.method="throw",e.arg=u.arg,e.delegate=null,C;var i=u.arg;if(!i)return e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,C;if(i.done)e[t.resultName]=i.value,e.next=t.nextLoc,e.method!=="return"&&(e.method="next",e.arg=c);else return i;return e.delegate=null,C}N(w),F(w,E,"Generator"),F(w,d,function(){return this}),F(w,"toString",function(){return"[object Generator]"});function ne(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function H(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(ne,this),this.reset(!0)}n.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function u(){for(;e.length;){var i=e.pop();if(i in t)return u.value=i,u.done=!1,u}return u.done=!0,u}};function Y(t){if(t){var e=t[d];if(e)return e.call(t);if(typeof t.next=="function")return t;if(!isNaN(t.length)){var r=-1,u=function i(){for(;++r<t.length;)if(f.call(t,r))return i.value=t[r],i.done=!1,i;return i.value=c,i.done=!0,i};return u.next=u}}return{next:U}}n.values=Y;function U(){return{value:c,done:!0}}return H.prototype={constructor:H,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=c,this.done=!1,this.delegate=null,this.method="next",this.arg=c,this.tryEntries.forEach(M),!t)for(var e in this)e.charAt(0)==="t"&&f.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=c)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if(e.type==="throw")throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(S,j){return y.type="throw",y.arg=t,e.next=S,j&&(e.method="next",e.arg=c),!!j}for(var u=this.tryEntries.length-1;u>=0;--u){var i=this.tryEntries[u],y=i.completion;if(i.tryLoc==="root")return r("end");if(i.tryLoc<=this.prev){var $=f.call(i,"catchLoc"),k=f.call(i,"finallyLoc");if($&&k){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if($){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else if(k){if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var u=this.tryEntries[r];if(u.tryLoc<=this.prev&&f.call(u,"finallyLoc")&&this.prev<u.finallyLoc){var i=u;break}}i&&(t==="break"||t==="continue")&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var y=i?i.completion:{};return y.type=t,y.arg=e,i?(this.method="next",this.next=i.finallyLoc,C):this.complete(y)},complete:function(t,e){if(t.type==="throw")throw t.arg;return t.type==="break"||t.type==="continue"?this.next=t.arg:t.type==="return"?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):t.type==="normal"&&e&&(this.next=e),C},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),M(r),C}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var u=r.completion;if(u.type==="throw"){var i=u.arg;M(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:Y(t),resultName:e,nextLoc:r},this.method==="next"&&(this.arg=c),C}},n}(o.exports);try{regeneratorRuntime=l}catch(n){typeof globalThis=="object"?globalThis.regeneratorRuntime=l:Function("r","regeneratorRuntime = r")(l)}})(Ke);var Qe={defaultArgs:["./ffmpeg","-nostdin","-y"],baseOptions:{log:!1,logger:()=>{},progress:()=>{},corePath:""}};let ue=!1,Fe=()=>{};const Xe=o=>{ue=o},et=o=>{Fe=o},tt=(o,l)=>{Fe({type:o,message:l}),ue&&console.log(`[${o}] ${l}`)};var Ee={logging:ue,setLogging:Xe,setCustomLogger:et,log:tt};let Z=0,ce=0;const _e=o=>{const[l,n,a]=o.split(":");return parseFloat(l)*60*60+parseFloat(n)*60+parseFloat(a)};var rt=(o,l)=>{if(typeof o=="string")if(o.startsWith("  Duration")){const n=o.split(", ")[0].split(": ")[1],a=_e(n);l({duration:a,ratio:ce}),(Z===0||Z>a)&&(Z=a)}else if(o.startsWith("frame")||o.startsWith("size")){const n=o.split("time=")[1].split(" ")[0],a=_e(n);ce=a/Z,l({ratio:ce,time:a})}else o.startsWith("video:")&&(l({ratio:1}),Z=0)},ot=(o,l)=>{const n=o._malloc(l.length*Uint32Array.BYTES_PER_ELEMENT);return l.forEach((a,f)=>{const c=o._malloc(a.length+1);o.writeAsciiToMemory(a,c),o.setValue(n+Uint32Array.BYTES_PER_ELEMENT*f,c,"i32")}),[l.length,n]},fe={exports:{}};(function(o,l){(function(n,a){o.exports=a()})(Se,function(){function n(){var a=arguments.length;if(a===0)throw new Error("resolveUrl requires at least one argument; got none.");var f=document.createElement("base");if(f.href=arguments[0],a===1)return f.href;var c=document.getElementsByTagName("head")[0];c.insertBefore(f,c.firstChild);for(var v=document.createElement("a"),d,h=1;h<a;h++)v.href=arguments[h],d=v.href,f.href=d;return c.removeChild(f),d}return n})})(fe);const nt="@ffmpeg/ffmpeg",at="0.10.1",st="FFmpeg WebAssembly version",it="src/index.js",lt="src/index.d.ts",ut={example:"examples"},ct={start:"node scripts/server.js",build:"rimraf dist && webpack --config scripts/webpack.config.prod.js",prepublishOnly:"npm run build",lint:"eslint src",wait:"rimraf dist && wait-on http://localhost:3000/dist/ffmpeg.dev.js",test:"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:ffmpeg test:node:all","test:node":"node --experimental-wasm-threads --experimental-wasm-bulk-memory node_modules/.bin/_mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser":"mocha-headless-chrome -a allow-file-access-from-files -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:ffmpeg":"npm run test:browser -- -f ./tests/ffmpeg.test.html"},ft={"./src/node/index.js":"./src/browser/index.js"},pt={type:"git",url:"git+https://github.com/ffmpegwasm/ffmpeg.wasm.git"},dt=["ffmpeg","WebAssembly","video"],mt="Jerome Wu <jeromewus@gmail.com>",ht="MIT",gt={url:"https://github.com/ffmpegwasm/ffmpeg.wasm/issues"},vt={node:">=12.16.1"},wt="https://github.com/ffmpegwasm/ffmpeg.wasm#readme",yt={"is-url":"^1.2.4","node-fetch":"^2.6.1","regenerator-runtime":"^0.13.7","resolve-url":"^0.2.1"},bt={"@babel/core":"^7.12.3","@babel/preset-env":"^7.12.1","@ffmpeg/core":"^0.10.0","@types/emscripten":"^1.39.4","babel-loader":"^8.1.0",chai:"^4.2.0",cors:"^2.8.5",eslint:"^7.12.1","eslint-config-airbnb-base":"^14.1.0","eslint-plugin-import":"^2.22.1",express:"^4.17.1",mocha:"^8.2.1","mocha-headless-chrome":"^2.0.3","npm-run-all":"^4.1.5","wait-on":"^5.3.0",webpack:"^5.3.2","webpack-cli":"^4.1.0","webpack-dev-middleware":"^4.0.0"};var Ce={name:nt,version:at,description:st,main:it,types:lt,directories:ut,scripts:ct,browser:ft,repository:pt,keywords:dt,author:mt,license:ht,bugs:gt,engines:vt,homepage:wt,dependencies:yt,devDependencies:bt};const{devDependencies:Ft}=Ce;var Et={corePath:`https://unpkg.com/@ffmpeg/core@${Ft["@ffmpeg/core"].substring(1)}/dist/ffmpeg-core.js`};const _t=fe.exports,{log:K}=Ee,pe=(o,l)=>R(void 0,null,function*(){K("info",`fetch ${o}`);const n=yield(yield fetch(o)).arrayBuffer();K("info",`${o} file size = ${n.byteLength} bytes`);const a=new Blob([n],{type:l}),f=URL.createObjectURL(a);return K("info",`${o} blob URL = ${f}`),f});var Ct=l=>R(void 0,[l],function*({corePath:o}){if(typeof o!="string")throw Error("corePath should be a string!");const n=_t(o),a=yield pe(n,"application/javascript"),f=yield pe(n.replace("ffmpeg-core.js","ffmpeg-core.wasm"),"application/wasm"),c=yield pe(n.replace("ffmpeg-core.js","ffmpeg-core.worker.js"),"application/javascript");return typeof createFFmpegCore=="undefined"?new Promise(v=>{const d=document.createElement("script"),h=()=>{d.removeEventListener("load",h),K("info","ffmpeg-core.js script loaded"),v({createFFmpegCore,corePath:a,wasmPath:f,workerPath:c})};d.src=a,d.type="text/javascript",d.addEventListener("load",h),document.getElementsByTagName("head")[0].appendChild(d)}):(K("info","ffmpeg-core.js script is loaded already"),Promise.resolve({createFFmpegCore,corePath:a,wasmPath:f,workerPath:c}))});const Lt=fe.exports,$t=o=>new Promise((l,n)=>{const a=new FileReader;a.onload=()=>{l(a.result)},a.onerror=({target:{error:{code:f}}})=>{n(Error(`File could not be read! Code=${f}`))},a.readAsArrayBuffer(o)});var kt=o=>R(void 0,null,function*(){let l=o;return typeof o=="undefined"?new Uint8Array:(typeof o=="string"?/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(o)?l=atob(o.split(",")[1]).split("").map(n=>n.charCodeAt(0)):l=yield(yield fetch(Lt(o))).arrayBuffer():(o instanceof File||o instanceof Blob)&&(l=yield $t(o)),new Uint8Array(l))});const jt=Et,Bt=Ct,St=kt;var Le={defaultOptions:jt,getCreateFFmpegCore:Bt,fetchFile:St};const{defaultArgs:At,baseOptions:xt}=Qe,{setLogging:$e,setCustomLogger:ke,log:q}=Ee,Dt=rt,Pt=ot,{defaultOptions:Ot,getCreateFFmpegCore:Nt}=Le,{version:Ut}=Ce,de=Error("ffmpeg.wasm is not ready, make sure you have completed load().");var It=(o={})=>{const G=ee(ee(ee({},xt),Ot),o),{log:l,logger:n,progress:a}=G,f=ve(G,["log","logger","progress"]);let c=null,v=null,d=null,h=!1,E=a;const F=s=>{s==="FFMPEG_END"&&d!==null&&(d(),d=null,h=!1)},x=({type:s,message:p})=>{q(s,p),Dt(p,E),F(p)},I=()=>R(void 0,null,function*(){if(q("info","load ffmpeg-core"),c===null){q("info","loading ffmpeg-core");const{createFFmpegCore:s,corePath:p,workerPath:g,wasmPath:m}=yield Nt(f);c=yield s({mainScriptUrlOrBlob:p,printErr:w=>x({type:"fferr",message:w}),print:w=>x({type:"ffout",message:w}),locateFile:(w,N)=>{if(typeof window!="undefined"){if(typeof m!="undefined"&&w.endsWith("ffmpeg-core.wasm"))return m;if(typeof g!="undefined"&&w.endsWith("ffmpeg-core.worker.js"))return g}return N+w}}),v=c.cwrap("proxy_main","number",["number","number"]),q("info","ffmpeg-core loaded")}else throw Error("ffmpeg.wasm was loaded, you should not load it again, use ffmpeg.isLoaded() to check next time.")}),D=()=>c!==null,b=(...s)=>{if(q("info",`run ffmpeg command: ${s.join(" ")}`),c===null)throw de;if(h)throw Error("ffmpeg.wasm can only run one command at a time");return h=!0,new Promise(p=>{const g=[...At,...s].filter(m=>m.length!==0);d=p,v(...Pt(c,g))})},_=(s,...p)=>{if(q("info",`run FS.${s} ${p.map(g=>typeof g=="string"?g:`<${g.length} bytes binary file>`).join(" ")}`),c===null)throw de;{let g=null;try{g=c.FS[s](...p)}catch(m){throw Error(s==="readdir"?`ffmpeg.FS('readdir', '${p[0]}') error. Check if the path exists, ex: ffmpeg.FS('readdir', '/')`:s==="readFile"?`ffmpeg.FS('readFile', '${p[0]}') error. Check if the path exists`:"Oops, something went wrong in FS operation.")}return g}},T=()=>{if(c===null)throw de;h=!1,c.exit(1),c=null,v=null,d=null},C=s=>{E=s},V=s=>{ke(s)};return $e(l),ke(n),q("info",`use ffmpeg.wasm v${Ut}`),{setProgress:C,setLogger:V,setLogging:$e,load:I,isLoaded:D,run:b,exit:T,FS:_}};const Gt=It,{fetchFile:Tt}=Le;var je={createFFmpeg:Gt,fetchFile:Tt};const Rt={class:"page-tool-video2gif"},Vt={key:1,class:"mt-4"},Mt=O("span",{class:"text-base font-bold"},"GIF \u8BBE\u7F6E",-1),Wt={key:0,class:"mt-4 flex flex-row justify-start items-center"},qt=O("span",{class:"w-64px"},"\u8FDB\u5EA6",-1),Yt=O("p",null,"\u70B9\u51FB\u56FE\u7247\u8FDB\u884C\u9884\u89C8",-1),Ht=re(" \u6216\u56FE\u7247\u53F3\u952E\u6216\u957F\u6309\u8FDB\u884C\u4E0B\u8F7D "),zt=O("div",{class:"list-document"},[O("p",null," \u652F\u6301\u7684\u89C6\u9891\u683C\u5F0F: mp4(\u63A8\u8350), webm, ogv(ogg), mkv(\u4E0D\u63A8\u8350) "),O("p",null," \u63A8\u8350\u4F7F\u7528\u7684\u6D4F\u89C8\u5668\uFF1AChrome / Chromium / Edge(Chromium based) / firefox "),O("p",null," \u5904\u7406\u8FC7\u7A0B\u5B8C\u5168\u5728\u6D4F\u89C8\u5668\u672C\u5730\u8FDB\u884C\uFF0C\u82E5\u6587\u4EF6\u8FC7\u5927\u5219\u53EF\u80FD\u9020\u6210\u6D4F\u89C8\u5668\u6216\u8BBE\u5907\u5361\u987F ")],-1),nr=Ae({setup(o){const{t:l}=xe();Je().setTitle("\u89C6\u9891\u8F6C GIF"),De({title:`\u89C6\u9891\u8F6C GIF - ${l("app_name")}`});const n=window.URL||window.webkitURL,a=P(""),f=je.createFFmpeg({log:!0,progress:({ratio:s})=>{c.value=isNaN(s)?0:Math.floor(s*100)},logger:({type:s,message:p})=>{a.value+=`${s}: ${p}
`},corePath:"https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.10.0/dist/ffmpeg-core.js"}),c=P(0),v=P(!1),d=P(!1),h=P(""),E=P(""),F=Pe(()=>E.value.replace(/\.[^/.]+$/,"")),x=P(!1),I=P(""),D=P(""),b=P({width:0,height:0,fps:0}),_=P({width:0,height:0,quality:0,fps:0});Oe(()=>R(this,null,function*(){const s=Ne.service({fullscreen:!0,lock:!0,text:"\u6B63\u5728\u52A0\u8F7D FFmpeg \u7EC4\u4EF6...",background:"rgba(0, 0, 0, 0.7)"});yield f.load(),s.close()}));const T=s=>{var N;const g=s.split(`
`).find(B=>B.includes("Video:"));if(!g)return;const m=(N=g.match(/\d+x\d+/g))==null?void 0:N.filter(B=>!B.startsWith("0x")),w=g.match(/\d+(\.\d+)? fps/);return{width:(m==null?void 0:m.length)?Number(m[0].split("x")[0]):0,height:(m==null?void 0:m.length)?Number(m[0].split("x")[1]):0,fps:(w==null?void 0:w.length)?Math.round(Number(w[0].split(" ")[0])):0}},C=()=>R(this,null,function*(){var s,p,g;if(a.value="",v.value=!0,b.value={width:0,height:0,fps:0},_.value={width:0,height:0,quality:50,fps:0},x.value=!1,D.value="",!h.value){v.value=!1;return}try{E.value=`${new Date().getTime()}.${h.value.replace(/^.*\./,"")}`;const m=(p=(s=document.querySelector("input[type=file]"))==null?void 0:s.files)==null?void 0:p[0];v.value=!0,I.value=n.createObjectURL(m),f.FS("writeFile",E.value,yield je.fetchFile(I.value)),yield f.run("-i",E.value),b.value=(g=T(a.value))!=null?g:b.value,_.value={width:b.value.width,height:b.value.height,quality:50,fps:b.value.fps},console.log(b.value)}catch(m){x.value=!0,le.error({title:"\u89C6\u9891\u8BFB\u53D6\u5931\u8D25",message:m.message})}finally{v.value=!1}}),V=()=>R(this,null,function*(){if(!x.value){if(!I.value){le.error("\u8BF7\u5148\u9009\u62E9\u89C6\u9891\u6587\u4EF6");return}d.value=!0,c.value=0;try{const s=`${F.value}.gif`,p=["-i",E.value,"-movflags","+faststart","-s",`${_.value.width}x${_.value.height}`,"-r",`${_.value.fps}`,s];yield f.run(...p);const g=f.FS("readFile",s),m=new Blob([g.buffer],{type:"video/gif"});D.value=URL.createObjectURL(m),f.FS("unlink",s)}catch(s){le.error({title:"\u8F6C\u6362\u5931\u8D25",message:s.message})}finally{setTimeout(()=>{d.value=!1},1e3)}}}),G=()=>{const s=document.createElement("a");s.href=D.value,s.download=`${F.value}.gif`,s.click()};return(s,p)=>{const g=Ue,m=Ie,w=Ge,N=Te,B=Re,oe=Ve,Q=Me,ne=We,M=Ze,H=qe,Y=Ye;return J(),se("div",Rt,[L(M,{class:"container-content-section"},{default:A(()=>[be(L(g,{type:"file",accept:"video/*",modelValue:h.value,"onUpdate:modelValue":p[0]||(p[0]=U=>h.value=U),onChange:C},{append:A(()=>[O("span",{class:"cursor-pointer",onClick:V},"\u8F6C\u6362")]),_:1},8,["modelValue"]),[[Y,v.value||d.value]]),!v.value&&!x.value&&b.value.fps!==0?(J(),we(w,{key:0,title:"\u89C6\u9891\u4FE1\u606F",class:"mt-6"},{default:A(()=>[L(m,{label:"\u5BBD\u5EA6"},{default:A(()=>[re(ie(b.value.width),1)]),_:1}),L(m,{label:"\u9AD8\u5EA6"},{default:A(()=>[re(ie(b.value.height),1)]),_:1}),L(m,{label:"\u5E27\u7387"},{default:A(()=>[re(ie(b.value.fps),1)]),_:1})]),_:1})):te("",!0),!x.value&&b.value.fps!==0?(J(),se("div",Vt,[Mt,be(L(Q,{"label-position":"left","label-width":64,class:"mt-2"},{default:A(()=>[L(B,{label:"\u5BBD\u5EA6"},{default:A(()=>[L(N,{modelValue:_.value.width,"onUpdate:modelValue":p[1]||(p[1]=U=>_.value.width=U),min:1,max:b.value.width,size:"small"},null,8,["modelValue","max"])]),_:1}),L(B,{label:"\u9AD8\u5EA6"},{default:A(()=>[L(N,{modelValue:_.value.height,"onUpdate:modelValue":p[2]||(p[2]=U=>_.value.height=U),min:1,max:b.value.height,size:"small"},null,8,["modelValue","max"])]),_:1}),L(B,{label:"FPS"},{default:A(()=>[L(oe,{modelValue:_.value.fps,"onUpdate:modelValue":p[3]||(p[3]=U=>_.value.fps=U),min:1,max:b.value.fps,"show-input":""},null,8,["modelValue","max"])]),_:1})]),_:1},512),[[Y,d.value]]),d.value?(J(),se("div",Wt,[qt,L(ne,{"text-inside":!0,"stroke-width":16,percentage:c.value,status:"success",class:"w-full"},null,8,["percentage"])])):te("",!0)])):te("",!0)]),_:1}),D.value.length>0?(J(),we(M,{key:0,icon:ye(He),title:"\u8F6C\u6362\u7ED3\u679C",class:"container-content-section with-title"},{default:A(()=>[L(H,{class:"w-200px h-200px",src:D.value,"preview-src-list":[D.value],"initial-index":0,fit:"cover","append-to-body":!0},null,8,["src","preview-src-list"]),O("div",{class:"list-document"},[Yt,O("p",null,[O("span",{style:{color:"var(--el-color-primary)"},class:"cursor-pointer",onClick:G}," \u70B9\u51FB\u6211 "),Ht])])]),_:1},8,["icon"])):te("",!0),L(M,{icon:ye(ze),title:s.$t("title.document"),class:"container-content-section with-title"},{default:A(()=>[zt]),_:1},8,["icon","title"])])}}});export{nr as default};
