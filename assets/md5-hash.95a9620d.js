var V=(m,u,s)=>new Promise((A,f)=>{var v=l=>{try{d(s.next(l))}catch(_){f(_)}},p=l=>{try{d(s.throw(l))}catch(_){f(_)}},d=l=>l.done?A(l.value):Promise.resolve(l.value).then(v,p);d((s=s.apply(m,u)).next())});import{f as R,y as P,A as q,Y as z,a1 as $,Z as O,au as Y,aw as Z,o as M,n as D,g as S,w as U,h as b,aB as G,aC as J,p as C,t as F,j,ax as K,aa as Q}from"./vendor.0a64e0b0.js";/* empty css                 */import{u as W,l as X}from"./index.98f0f520.js";import{_ as k}from"./CopyText.41ab5170.js";/* empty css              *//* empty css               */var E={exports:{}};(function(m,u){(function(s){m.exports=s()})(function(s){var A=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function f(o,a){var e=o[0],t=o[1],n=o[2],r=o[3];e+=(t&n|~t&r)+a[0]-680876936|0,e=(e<<7|e>>>25)+t|0,r+=(e&t|~e&n)+a[1]-389564586|0,r=(r<<12|r>>>20)+e|0,n+=(r&e|~r&t)+a[2]+606105819|0,n=(n<<17|n>>>15)+r|0,t+=(n&r|~n&e)+a[3]-1044525330|0,t=(t<<22|t>>>10)+n|0,e+=(t&n|~t&r)+a[4]-176418897|0,e=(e<<7|e>>>25)+t|0,r+=(e&t|~e&n)+a[5]+1200080426|0,r=(r<<12|r>>>20)+e|0,n+=(r&e|~r&t)+a[6]-1473231341|0,n=(n<<17|n>>>15)+r|0,t+=(n&r|~n&e)+a[7]-45705983|0,t=(t<<22|t>>>10)+n|0,e+=(t&n|~t&r)+a[8]+1770035416|0,e=(e<<7|e>>>25)+t|0,r+=(e&t|~e&n)+a[9]-1958414417|0,r=(r<<12|r>>>20)+e|0,n+=(r&e|~r&t)+a[10]-42063|0,n=(n<<17|n>>>15)+r|0,t+=(n&r|~n&e)+a[11]-1990404162|0,t=(t<<22|t>>>10)+n|0,e+=(t&n|~t&r)+a[12]+1804603682|0,e=(e<<7|e>>>25)+t|0,r+=(e&t|~e&n)+a[13]-40341101|0,r=(r<<12|r>>>20)+e|0,n+=(r&e|~r&t)+a[14]-1502002290|0,n=(n<<17|n>>>15)+r|0,t+=(n&r|~n&e)+a[15]+1236535329|0,t=(t<<22|t>>>10)+n|0,e+=(t&r|n&~r)+a[1]-165796510|0,e=(e<<5|e>>>27)+t|0,r+=(e&n|t&~n)+a[6]-1069501632|0,r=(r<<9|r>>>23)+e|0,n+=(r&t|e&~t)+a[11]+643717713|0,n=(n<<14|n>>>18)+r|0,t+=(n&e|r&~e)+a[0]-373897302|0,t=(t<<20|t>>>12)+n|0,e+=(t&r|n&~r)+a[5]-701558691|0,e=(e<<5|e>>>27)+t|0,r+=(e&n|t&~n)+a[10]+38016083|0,r=(r<<9|r>>>23)+e|0,n+=(r&t|e&~t)+a[15]-660478335|0,n=(n<<14|n>>>18)+r|0,t+=(n&e|r&~e)+a[4]-405537848|0,t=(t<<20|t>>>12)+n|0,e+=(t&r|n&~r)+a[9]+568446438|0,e=(e<<5|e>>>27)+t|0,r+=(e&n|t&~n)+a[14]-1019803690|0,r=(r<<9|r>>>23)+e|0,n+=(r&t|e&~t)+a[3]-187363961|0,n=(n<<14|n>>>18)+r|0,t+=(n&e|r&~e)+a[8]+1163531501|0,t=(t<<20|t>>>12)+n|0,e+=(t&r|n&~r)+a[13]-1444681467|0,e=(e<<5|e>>>27)+t|0,r+=(e&n|t&~n)+a[2]-51403784|0,r=(r<<9|r>>>23)+e|0,n+=(r&t|e&~t)+a[7]+1735328473|0,n=(n<<14|n>>>18)+r|0,t+=(n&e|r&~e)+a[12]-1926607734|0,t=(t<<20|t>>>12)+n|0,e+=(t^n^r)+a[5]-378558|0,e=(e<<4|e>>>28)+t|0,r+=(e^t^n)+a[8]-2022574463|0,r=(r<<11|r>>>21)+e|0,n+=(r^e^t)+a[11]+1839030562|0,n=(n<<16|n>>>16)+r|0,t+=(n^r^e)+a[14]-35309556|0,t=(t<<23|t>>>9)+n|0,e+=(t^n^r)+a[1]-1530992060|0,e=(e<<4|e>>>28)+t|0,r+=(e^t^n)+a[4]+1272893353|0,r=(r<<11|r>>>21)+e|0,n+=(r^e^t)+a[7]-155497632|0,n=(n<<16|n>>>16)+r|0,t+=(n^r^e)+a[10]-1094730640|0,t=(t<<23|t>>>9)+n|0,e+=(t^n^r)+a[13]+681279174|0,e=(e<<4|e>>>28)+t|0,r+=(e^t^n)+a[0]-358537222|0,r=(r<<11|r>>>21)+e|0,n+=(r^e^t)+a[3]-722521979|0,n=(n<<16|n>>>16)+r|0,t+=(n^r^e)+a[6]+76029189|0,t=(t<<23|t>>>9)+n|0,e+=(t^n^r)+a[9]-640364487|0,e=(e<<4|e>>>28)+t|0,r+=(e^t^n)+a[12]-421815835|0,r=(r<<11|r>>>21)+e|0,n+=(r^e^t)+a[15]+530742520|0,n=(n<<16|n>>>16)+r|0,t+=(n^r^e)+a[2]-995338651|0,t=(t<<23|t>>>9)+n|0,e+=(n^(t|~r))+a[0]-198630844|0,e=(e<<6|e>>>26)+t|0,r+=(t^(e|~n))+a[7]+1126891415|0,r=(r<<10|r>>>22)+e|0,n+=(e^(r|~t))+a[14]-1416354905|0,n=(n<<15|n>>>17)+r|0,t+=(r^(n|~e))+a[5]-57434055|0,t=(t<<21|t>>>11)+n|0,e+=(n^(t|~r))+a[12]+1700485571|0,e=(e<<6|e>>>26)+t|0,r+=(t^(e|~n))+a[3]-1894986606|0,r=(r<<10|r>>>22)+e|0,n+=(e^(r|~t))+a[10]-1051523|0,n=(n<<15|n>>>17)+r|0,t+=(r^(n|~e))+a[1]-2054922799|0,t=(t<<21|t>>>11)+n|0,e+=(n^(t|~r))+a[8]+1873313359|0,e=(e<<6|e>>>26)+t|0,r+=(t^(e|~n))+a[15]-30611744|0,r=(r<<10|r>>>22)+e|0,n+=(e^(r|~t))+a[6]-1560198380|0,n=(n<<15|n>>>17)+r|0,t+=(r^(n|~e))+a[13]+1309151649|0,t=(t<<21|t>>>11)+n|0,e+=(n^(t|~r))+a[4]-145523070|0,e=(e<<6|e>>>26)+t|0,r+=(t^(e|~n))+a[11]-1120210379|0,r=(r<<10|r>>>22)+e|0,n+=(e^(r|~t))+a[2]+718787259|0,n=(n<<15|n>>>17)+r|0,t+=(r^(n|~e))+a[9]-343485551|0,t=(t<<21|t>>>11)+n|0,o[0]=e+o[0]|0,o[1]=t+o[1]|0,o[2]=n+o[2]|0,o[3]=r+o[3]|0}function v(o){var a=[],e;for(e=0;e<64;e+=4)a[e>>2]=o.charCodeAt(e)+(o.charCodeAt(e+1)<<8)+(o.charCodeAt(e+2)<<16)+(o.charCodeAt(e+3)<<24);return a}function p(o){var a=[],e;for(e=0;e<64;e+=4)a[e>>2]=o[e]+(o[e+1]<<8)+(o[e+2]<<16)+(o[e+3]<<24);return a}function d(o){var a=o.length,e=[1732584193,-271733879,-1732584194,271733878],t,n,r,h,w,x;for(t=64;t<=a;t+=64)f(e,v(o.substring(t-64,t)));for(o=o.substring(t-64),n=o.length,r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<n;t+=1)r[t>>2]|=o.charCodeAt(t)<<(t%4<<3);if(r[t>>2]|=128<<(t%4<<3),t>55)for(f(e,r),t=0;t<16;t+=1)r[t]=0;return h=a*8,h=h.toString(16).match(/(.*?)(.{0,8})$/),w=parseInt(h[2],16),x=parseInt(h[1],16)||0,r[14]=w,r[15]=x,f(e,r),e}function l(o){var a=o.length,e=[1732584193,-271733879,-1732584194,271733878],t,n,r,h,w,x;for(t=64;t<=a;t+=64)f(e,p(o.subarray(t-64,t)));for(o=t-64<a?o.subarray(t-64):new Uint8Array(0),n=o.length,r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<n;t+=1)r[t>>2]|=o[t]<<(t%4<<3);if(r[t>>2]|=128<<(t%4<<3),t>55)for(f(e,r),t=0;t<16;t+=1)r[t]=0;return h=a*8,h=h.toString(16).match(/(.*?)(.{0,8})$/),w=parseInt(h[2],16),x=parseInt(h[1],16)||0,r[14]=w,r[15]=x,f(e,r),e}function _(o){var a="",e;for(e=0;e<4;e+=1)a+=A[o>>e*8+4&15]+A[o>>e*8&15];return a}function g(o){var a;for(a=0;a<o.length;a+=1)o[a]=_(o[a]);return o.join("")}g(d("hello"))!=="5d41402abc4b2a76b9719d911017c592",typeof ArrayBuffer!="undefined"&&!ArrayBuffer.prototype.slice&&function(){function o(a,e){return a=a|0||0,a<0?Math.max(a+e,0):Math.min(a,e)}ArrayBuffer.prototype.slice=function(a,e){var t=this.byteLength,n=o(a,t),r=t,h,w,x,T;return e!==s&&(r=o(e,t)),n>r?new ArrayBuffer(0):(h=r-n,w=new ArrayBuffer(h),x=new Uint8Array(w),T=new Uint8Array(this,n,h),x.set(T),w)}}();function y(o){return/[\u0080-\uFFFF]/.test(o)&&(o=unescape(encodeURIComponent(o))),o}function B(o,a){var e=o.length,t=new ArrayBuffer(e),n=new Uint8Array(t),r;for(r=0;r<e;r+=1)n[r]=o.charCodeAt(r);return a?n:t}function H(o){return String.fromCharCode.apply(null,new Uint8Array(o))}function I(o,a,e){var t=new Uint8Array(o.byteLength+a.byteLength);return t.set(new Uint8Array(o)),t.set(new Uint8Array(a),o.byteLength),e?t:t.buffer}function c(o){var a=[],e=o.length,t;for(t=0;t<e-1;t+=2)a.push(parseInt(o.substr(t,2),16));return String.fromCharCode.apply(String,a)}function i(){this.reset()}return i.prototype.append=function(o){return this.appendBinary(y(o)),this},i.prototype.appendBinary=function(o){this._buff+=o,this._length+=o.length;var a=this._buff.length,e;for(e=64;e<=a;e+=64)f(this._hash,v(this._buff.substring(e-64,e)));return this._buff=this._buff.substring(e-64),this},i.prototype.end=function(o){var a=this._buff,e=a.length,t,n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],r;for(t=0;t<e;t+=1)n[t>>2]|=a.charCodeAt(t)<<(t%4<<3);return this._finish(n,e),r=g(this._hash),o&&(r=c(r)),this.reset(),r},i.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},i.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash.slice()}},i.prototype.setState=function(o){return this._buff=o.buff,this._length=o.length,this._hash=o.hash,this},i.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},i.prototype._finish=function(o,a){var e=a,t,n,r;if(o[e>>2]|=128<<(e%4<<3),e>55)for(f(this._hash,o),e=0;e<16;e+=1)o[e]=0;t=this._length*8,t=t.toString(16).match(/(.*?)(.{0,8})$/),n=parseInt(t[2],16),r=parseInt(t[1],16)||0,o[14]=n,o[15]=r,f(this._hash,o)},i.hash=function(o,a){return i.hashBinary(y(o),a)},i.hashBinary=function(o,a){var e=d(o),t=g(e);return a?c(t):t},i.ArrayBuffer=function(){this.reset()},i.ArrayBuffer.prototype.append=function(o){var a=I(this._buff.buffer,o,!0),e=a.length,t;for(this._length+=o.byteLength,t=64;t<=e;t+=64)f(this._hash,p(a.subarray(t-64,t)));return this._buff=t-64<e?new Uint8Array(a.buffer.slice(t-64)):new Uint8Array(0),this},i.ArrayBuffer.prototype.end=function(o){var a=this._buff,e=a.length,t=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],n,r;for(n=0;n<e;n+=1)t[n>>2]|=a[n]<<(n%4<<3);return this._finish(t,e),r=g(this._hash),o&&(r=c(r)),this.reset(),r},i.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},i.ArrayBuffer.prototype.getState=function(){var o=i.prototype.getState.call(this);return o.buff=H(o.buff),o},i.ArrayBuffer.prototype.setState=function(o){return o.buff=B(o.buff,!0),i.prototype.setState.call(this,o)},i.ArrayBuffer.prototype.destroy=i.prototype.destroy,i.ArrayBuffer.prototype._finish=i.prototype._finish,i.ArrayBuffer.hash=function(o,a){var e=l(new Uint8Array(o)),t=g(e);return a?c(t):t},i})})(E);var L=E.exports;function tt(m,u=1024*1024*10,s){return new Promise((A,f)=>{var v=new FileReader,p=new L.ArrayBuffer,d=Math.ceil(m.size/u),l=0,_=new Date().getTime();v.onload=function(y){l+=1,s&&s({total:d,current:l,progress:l/d});var B=y.target.result;if(p.append(B),l<d){g();return}A({hashResult:p.end(),duration:new Date().getTime()-_})},v.onerror=function(y){f(y)};function g(){var y=l*u,B=Math.min(y+u,m.size);v.readAsArrayBuffer(m.slice(y,B))}g()})}function N(m){m.__i18n=m.__i18n||[],m.__i18n.push({locale:"",resource:{"zh-CN":{tool:{md5_hash:{text:u=>{const{normalize:s}=u;return s(["\u6587\u672C\u54C8\u5E0C"])},file:u=>{const{normalize:s}=u;return s(["\u6587\u4EF6\u54C8\u5E0C"])},result:u=>{const{normalize:s}=u;return s(["\u54C8\u5E0C\u7ED3\u679C"])},calculate:u=>{const{normalize:s}=u;return s(["\u8BA1\u7B97"])}}}},"en-US":{tool:{md5_hash:{text:u=>{const{normalize:s}=u;return s(["Text Hash"])},file:u=>{const{normalize:s}=u;return s(["File Hash"])},result:u=>{const{normalize:s}=u;return s(["Hash Result"])},calculate:u=>{const{normalize:s}=u;return s(["Calculate"])}}}}}})}const et={class:"page-md5-hash"},rt={key:0},nt={key:0,class:"mt-8"},at={key:1},ot=R({setup(m){const{t:u}=P();W().setTitle("MD5 Hash"),q({title:`MD5 Hash - ${u("app_name")}`});const s=z(""),A=$(()=>s.value.length>0?L.hash(s.value):""),f=1024*1024,v=f*10,p=z(null),d=$(()=>{var c;return((c=p.value)==null?void 0:c.size)?(p.value.size/f).toFixed(2):0}),l=z(null),_=z(!1),g=z(0),y=z(""),B=z(""),H=c=>{var i,o,a;!l.value||(p.value=(o=(i=document.querySelector("input[type=file]"))==null?void 0:i.files)==null?void 0:o[0],console.log(`file size: ${(((a=p.value)==null?void 0:a.size)/1024/1024).toFixed(2)} MiB`))},I=()=>V(this,null,function*(){if(!!l.value){_.value=!0;try{const c=yield tt(p.value,v,i=>{const o=(v*i.current/f).toFixed(2);y.value=`${o} / ${d.value} MiB`,g.value=i.progress*100});console.log(`done, time consumed: ${c.duration/1e3}s`),B.value=c.hashResult}catch(c){Q.error({message:c.message,duration:2e3})}finally{setTimeout(()=>{_.value=!1,y.value,g.value=0},500)}}});return(c,i)=>{const o=O,a=k,e=X,t=Y,n=Z;return M(),D("div",et,[S(e,{class:"container-content-section with-title",title:b(u)("tool.md5_hash.text"),icon:b(G)},{default:U(()=>[S(o,{modelValue:s.value,"onUpdate:modelValue":i[0]||(i[0]=r=>s.value=r),placeholder:"Enter text",class:"mt-2"},null,8,["modelValue"]),b(A).length>0?(M(),D("div",rt,[C("h3",null,F(b(u)("tool.md5_hash.result")),1),S(a,{text:b(A)},{default:U(()=>[C("div",null,F(b(A)),1)]),_:1},8,["text"])])):j("",!0)]),_:1},8,["title","icon"]),S(e,{class:"container-content-section with-title",title:b(u)("tool.md5_hash.file"),icon:b(J)},{default:U(()=>{var r;return[K(S(o,{modelValue:l.value,"onUpdate:modelValue":i[1]||(i[1]=h=>l.value=h),type:"file",placeholder:"Upload file",class:"mt-2",onChange:H},{append:U(()=>[C("span",{class:"cursor-pointer",onClick:I},F(b(u)("tool.md5_hash.calculate")),1)]),_:1},8,["modelValue"]),[[n,_.value]]),b(d)>10&&_.value?(M(),D("div",nt,[S(t,{"text-inside":!0,"stroke-width":16,percentage:g.value,status:"success"},{default:U(()=>[C("span",null,F(y.value),1)]),_:1},8,["percentage"])])):j("",!0),((r=B.value)==null?void 0:r.length)&&!_.value?(M(),D("div",at,[C("h3",null,F(b(u)("tool.md5_hash.result")),1),S(a,{text:B.value},{default:U(()=>[C("div",null,F(B.value),1)]),_:1},8,["text"])])):j("",!0)]}),_:1},8,["title","icon"])])}}});typeof N=="function"&&N(ot);export{ot as default};
