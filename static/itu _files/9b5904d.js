/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{262:function(e,t,n){var r,o,c;n(126),n(183),n(32),n(125),n(45);var d,f=n(263);d=function(e){"use strict";function t(e){return Math.round(1e5*e)/1e5||0}var b=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,n=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,r=Math.PI/180,o=Math.sin,c=Math.cos,d=Math.abs,f=Math.sqrt;function l(e,t,n,s,a,l,i,h,v){if(e!==h||t!==v){n=d(n),s=d(s);var u=a%360*r,m=c(u),x=o(u),_=Math.PI,g=2*_,y=(e-h)/2,w=(t-v)/2,k=m*y+x*w,p=-x*y+m*w,z=k*k,M=p*p,C=z/(n*n)+M/(s*s);1<C&&(n=f(C)*n,s=f(C)*s);var P=n*n,S=s*s,b=(P*S-P*M-S*z)/(P*M+S*z);b<0&&(b=0);var j=(l===i?-1:1)*f(b),E=n*p/s*j,N=-s*k/n*j,L=m*E-x*N+(e+h)/2,A=x*E+m*N+(t+v)/2,H=(k-E)/n,J=(p-N)/s,D=(-k-E)/n,q=(-p-N)/s,O=H*H+J*J,R=(J<0?-1:1)*Math.acos(H/f(O)),T=(H*q-J*D<0?-1:1)*Math.acos((H*D+J*q)/f(O*(D*D+q*q)));isNaN(T)&&(T=_),!i&&0<T?T-=g:i&&T<0&&(T+=g),R%=g,T%=g;var V,Y=Math.ceil(d(T)/(g/4)),I=[],X=T/Y,Z=4/3*o(X/2)/(1+c(X/2)),$=m*n,G=x*n,Q=x*-s,B=m*s;for(V=0;V<Y;V++)k=c(a=R+V*X),p=o(a),H=c(a+=X),J=o(a),I.push(k-Z*p,p+Z*k,H+Z*J,J-Z*H,H,J);for(V=0;V<I.length;V+=2)k=I[V],p=I[V+1],I[V]=k*$+p*Q+L,I[V+1]=k*G+p*B+A;return I[V-2]=h,I[V-1]=v,I}}function p(){return v||"undefined"!=typeof window&&(v=window.gsap)&&v.registerPlugin&&v}function q(){(v=p())?(v.registerEase("_CE",y.create),a=1):console.warn("Please gsap.registerPlugin(CustomEase)")}function s(e){return~~(1e3*e+(e<0?-.5:.5))/1e3}function h(e,t,n,s,a,r,i,o,c,u,d){var f,l=(e+n)/2,g=(t+s)/2,v=(n+a)/2,m=(s+r)/2,p=(a+i)/2,x=(r+o)/2,_=(l+v)/2,y=(g+m)/2,w=(v+p)/2,k=(m+x)/2,b=(_+w)/2,z=(y+k)/2,M=i-e,C=o-t,P=Math.abs((n-i)*C-(s-o)*M),S=Math.abs((a-i)*C-(r-o)*M);return u||(u=[{x:e,y:t},{x:i,y:o}],d=1),u.splice(d||u.length-1,0,{x:b,y:z}),c*(M*M+C*C)<(P+S)*(P+S)&&(f=u.length,h(e,t,l,g,_,y,b,z,c,u,d),h(b,z,w,k,p,x,i,o,c,u,d+1+(u.length-f))),u}var v,a,m,x=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,_=/[cLlsSaAhHvVtTqQ]/g,y=((m=w.prototype).setData=function(e,t){t=t||{};var r,s,a,o,i,c,f,u,m,y=(e=e||"0,0,1,1").match(x),w=1,g=[],k=[],z=t.precision||1,p=z<=1;if(this.data=e,(_.test(e)||~e.indexOf("M")&&e.indexOf("C")<0)&&(y=function(e){function t(e,t,n,s){v=(n-e)/3,m=(s-t)/3,f.push(e+v,t+m,n-v,s-m,n,s)}var r,o,s,a,c,i,f,h,u,v,m,x,g,_,y,w=(e+"").replace(n,(function(e){var t=+e;return t<1e-4&&-1e-4<t?0:t})).match(b)||[],p=[],k=0,z=0,M=w.length,C=0,P="ERROR: malformed path: "+e;if(!e||!isNaN(w[0])||isNaN(w[1]))return console.log(P),p;for(r=0;r<M;r++)if(g=c,isNaN(w[r])?i=(c=w[r].toUpperCase())!==w[r]:r--,s=+w[r+1],a=+w[r+2],i&&(s+=k,a+=z),r||(h=s,u=a),"M"===c)f&&(f.length<8?--p.length:C+=f.length),k=h=s,z=u=a,f=[s,a],p.push(f),r+=2,c="L";else if("C"===c)i||(k=z=0),(f=f||[0,0]).push(s,a,k+1*w[r+3],z+1*w[r+4],k+=1*w[r+5],z+=1*w[r+6]),r+=6;else if("S"===c)v=k,m=z,"C"!==g&&"S"!==g||(v+=k-f[f.length-4],m+=z-f[f.length-3]),i||(k=z=0),f.push(v,m,s,a,k+=1*w[r+3],z+=1*w[r+4]),r+=4;else if("Q"===c)v=k+2/3*(s-k),m=z+2/3*(a-z),i||(k=z=0),k+=1*w[r+3],z+=1*w[r+4],f.push(v,m,k+2/3*(s-k),z+2/3*(a-z),k,z),r+=4;else if("T"===c)v=k-f[f.length-4],m=z-f[f.length-3],f.push(k+v,z+m,s+2/3*(k+1.5*v-s),a+2/3*(z+1.5*m-a),k=s,z=a),r+=2;else if("H"===c)t(k,z,k=s,z),r+=1;else if("V"===c)t(k,z,k,z=s+(i?z-k:0)),r+=1;else if("L"===c||"Z"===c)"Z"===c&&(s=h,a=u,f.closed=!0),("L"===c||.5<d(k-s)||.5<d(z-a))&&(t(k,z,s,a),"L"===c&&(r+=2)),k=s,z=a;else if("A"===c){if(_=w[r+4],y=w[r+5],v=w[r+6],m=w[r+7],o=7,1<_.length&&(_.length<3?(m=v,v=y,o--):(m=y,v=_.substr(2),o-=2),y=_.charAt(1),_=_.charAt(0)),x=l(k,z,+w[r+1],+w[r+2],+w[r+3],+_,+y,(i?k:0)+1*v,(i?z:0)+1*m),r+=o,x)for(o=0;o<x.length;o++)f.push(x[o]);k=f[f.length-2],z=f[f.length-1]}else console.log(P);return(r=f.length)<6?(p.pop(),r=0):f[0]===f[r-2]&&f[1]===f[r-1]&&(f.closed=!0),p.totalPoints=C+r,p}(e)[0]),4===(r=y.length))y.unshift(0,0),y.push(1,1),r=8;else if((r-2)%6)throw"Invalid CustomEase";for(0==+y[0]&&1==+y[r-2]||function(e,t,n){n||0===n||(n=Math.max(+e[e.length-1],+e[1]));var s,a=-1*e[0],r=-n,i=e.length,o=1/(+e[i-2]+a),c=-t||(Math.abs(e[i-1]-e[1])<.01*(e[i-2]-e[0])?function(e){var t,n=e.length,s=1e20;for(t=1;t<n;t+=6)+e[t]<s&&(s=+e[t]);return s}(e)+r:+e[i-1]+r);for(c=c?1/c:-o,s=0;s<i;s+=2)e[s]=(+e[s]+a)*o,e[s+1]=(+e[s+1]+r)*c}(y,t.height,t.originY),this.segment=y,o=2;o<r;o+=6)s={x:+y[o-2],y:+y[o-1]},a={x:+y[o+4],y:+y[o+5]},g.push(s,a),h(s.x,s.y,+y[o],+y[o+1],+y[o+2],+y[o+3],a.x,a.y,1/(2e5*z),g,g.length-1);for(r=g.length,o=0;o<r;o++)f=g[o],u=g[o-1]||f,(f.x>u.x||u.y!==f.y&&u.x===f.x||f===u)&&f.x<=1?(u.cx=f.x-u.x,u.cy=f.y-u.y,u.n=f,u.nx=f.x,p&&1<o&&2<Math.abs(u.cy/u.cx-g[o-2].cy/g[o-2].cx)&&(p=0),u.cx<w&&(u.cx?w=u.cx:(u.cx=.001,o===r-1&&(u.x-=.001,w=Math.min(w,.001),p=0)))):(g.splice(o--,1),r--);if(i=1/(r=1/w+1|0),f=g[c=0],p){for(o=0;o<r;o++)m=o*i,f.nx<m&&(f=g[++c]),s=f.y+(m-f.x)/f.cx*f.cy,k[o]={x:m,cx:i,y:s,cy:0,nx:9},o&&(k[o-1].cy=s-k[o-1].y);k[r-1].cy=g[g.length-1].y-s}else{for(o=0;o<r;o++)f.nx<o*i&&(f=g[++c]),k[o]=f;c<g.length-1&&(k[o-1]=g[g.length-2])}return this.ease=function(e){var t=k[e*r|0]||k[r-1];return t.nx<e&&(t=t.n),t.y+(e-t.x)/t.cx*t.cy},(this.ease.custom=this).id&&v.registerEase(this.id,this.ease),this},m.getSVGData=function(e){return w.getSVGData(this,e)},w.create=function(e,t,n){return new w(e,t,n).ease},w.register=function(e){v=e,q()},w.get=function(e){return v.parseEase(e)},w.getSVGData=function(e,n){var r,a,o,i,c,d,u,f,l,h,g=(n=n||{}).width||100,m=n.height||100,x=n.x||0,p=(n.y||0)+m,_=v.utils.toArray(n.path)[0];if(n.invert&&(m=-m,p=0),"string"==typeof e&&(e=v.parseEase(e)),e.custom&&(e=e.custom),e instanceof w)r=function(e){!function(e){return"number"==typeof e}(e[0])||(e=[e]);var n,r,s,a,o="",i=e.length;for(r=0;r<i;r++){for(o+="M"+t((a=e[r])[0])+","+t(a[1])+" C",n=a.length,s=2;s<n;s++)o+=t(a[s++])+","+t(a[s++])+" "+t(a[s++])+","+t(a[s++])+" "+t(a[s++])+","+t(a[s])+" ";a.closed&&(o+="z")}return o}(function(e,t,n,s,a,r,i){for(var o,c,u,d,f,l=e.length;-1<--l;)for(c=(o=e[l]).length,u=0;u<c;u+=2)d=o[u],f=o[u+1],o[u]=d*t+f*s+r,o[u+1]=d*n+f*a+i;return e._dirty=1,e}([e.segment],g,0,0,-m,x,p));else{for(r=[x,p],i=1/(u=Math.max(5,200*(n.precision||1))),f=5/(u+=2),l=s(x+i*g),a=((h=s(p+e(i)*-m))-p)/(l-x),o=2;o<u;o++)c=s(x+o*i*g),d=s(p+e(o*i)*-m),(Math.abs((d-h)/(c-l)-a)>f||o===u-1)&&(r.push(l,h),a=(d-h)/(c-l)),l=c,h=d;r="M"+r.join(",")}return _&&_.setAttribute("d",r),r},w);function w(e,t,n){a||q(),this.id=e,this.setData(t,n)}p()&&v.registerPlugin(y),y.version="3.7.0",e.CustomEase=y,e.default=y,"undefined"==typeof window||window!==e?Object.defineProperty(e,"__esModule",{value:!0}):delete e.default},"object"==f(t)&&void 0!==e?d(t):(o=[t],void 0===(c="function"==typeof(r=d)?r.apply(t,o):r)||(e.exports=c))},263:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},275:function(e,t,n){var content=n(293);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(57).default)("56ddd9d6",content,!0,{sourceMap:!1})},292:function(e,t,n){"use strict";n(275)},293:function(e,t,n){var r=n(56),o=n(122),c=n(123),d=n(124),f=r(!1);f.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap);"]),f.push([e.i,"@import url(https://cdn.jsdelivr.net/npm/yakuhanjp@3.3.1/dist/css/yakuhanjp.min.css);"]),f.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400..700&display=swap&text=ZYPRESSEN);"]),f.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Lora:wght@400..700&display=swap&text=ZYPRESSEN);"]);var l=o(c),h=o(d);f.push([e.i,'/*! destyle.css v1.0.13 | MIT License | https://github.com/nicolas-cusan/destyle.css */*[data-v-579f2eca]{box-sizing:border-box}[data-v-579f2eca]:after,[data-v-579f2eca]:before{box-sizing:inherit}html[data-v-579f2eca]{line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}body[data-v-579f2eca]{margin:0}main[data-v-579f2eca]{display:block}address[data-v-579f2eca],blockquote[data-v-579f2eca],dl[data-v-579f2eca],figure[data-v-579f2eca],form[data-v-579f2eca],iframe[data-v-579f2eca],p[data-v-579f2eca],pre[data-v-579f2eca],table[data-v-579f2eca]{margin:0}h1[data-v-579f2eca],h2[data-v-579f2eca],h3[data-v-579f2eca],h4[data-v-579f2eca],h5[data-v-579f2eca],h6[data-v-579f2eca]{font-size:inherit;line-height:inherit;font-weight:inherit;margin:0}ol[data-v-579f2eca],ul[data-v-579f2eca]{margin:0;padding:0;list-style:none}dt[data-v-579f2eca]{font-weight:700}dd[data-v-579f2eca]{margin-left:0}hr[data-v-579f2eca]{box-sizing:content-box;height:0;overflow:visible;border:0;border-top:1px solid;margin:0;clear:both;color:inherit}pre[data-v-579f2eca]{font-family:monospace;font-size:inherit}address[data-v-579f2eca]{font-style:inherit}a[data-v-579f2eca]{background-color:transparent;text-decoration:none;color:inherit}abbr[title][data-v-579f2eca]{border-bottom:none;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b[data-v-579f2eca],strong[data-v-579f2eca]{font-weight:bolder}code[data-v-579f2eca],kbd[data-v-579f2eca],samp[data-v-579f2eca]{font-family:monospace;font-size:inherit}small[data-v-579f2eca]{font-size:80%}sub[data-v-579f2eca],sup[data-v-579f2eca]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[data-v-579f2eca]{bottom:-.25em}sup[data-v-579f2eca]{top:-.5em}img[data-v-579f2eca]{border-style:none;vertical-align:bottom}embed[data-v-579f2eca],iframe[data-v-579f2eca],object[data-v-579f2eca]{border:0;vertical-align:bottom}button[data-v-579f2eca],input[data-v-579f2eca],optgroup[data-v-579f2eca],select[data-v-579f2eca],textarea[data-v-579f2eca]{-webkit-appearance:none;-moz-appearance:none;appearance:none;vertical-align:middle;color:inherit;font:inherit;border:0;background:transparent;padding:0;margin:0;outline:0;border-radius:0;text-align:inherit}[type=checkbox][data-v-579f2eca]{-webkit-appearance:checkbox;-moz-appearance:checkbox;appearance:checkbox}[type=radio][data-v-579f2eca]{-webkit-appearance:radio;-moz-appearance:radio;appearance:radio}button[data-v-579f2eca],input[data-v-579f2eca]{overflow:visible}button[data-v-579f2eca],select[data-v-579f2eca]{text-transform:none}[type=button][data-v-579f2eca],[type=reset][data-v-579f2eca],[type=submit][data-v-579f2eca],button[data-v-579f2eca]{cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}[type=button][disabled][data-v-579f2eca],[type=reset][disabled][data-v-579f2eca],[type=submit][disabled][data-v-579f2eca],button[disabled][data-v-579f2eca]{cursor:default}[type=button][data-v-579f2eca]::-moz-focus-inner,[type=reset][data-v-579f2eca]::-moz-focus-inner,[type=submit][data-v-579f2eca]::-moz-focus-inner,button[data-v-579f2eca]::-moz-focus-inner{border-style:none;padding:0}[type=button][data-v-579f2eca]:-moz-focusring,[type=reset][data-v-579f2eca]:-moz-focusring,[type=submit][data-v-579f2eca]:-moz-focusring,button[data-v-579f2eca]:-moz-focusring{outline:1px dotted ButtonText}fieldset[data-v-579f2eca],option[data-v-579f2eca]{padding:0}fieldset[data-v-579f2eca]{margin:0;border:0;min-width:0}legend[data-v-579f2eca]{color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress[data-v-579f2eca]{vertical-align:baseline}textarea[data-v-579f2eca]{overflow:auto}[type=checkbox][data-v-579f2eca],[type=radio][data-v-579f2eca]{padding:0}[type=number][data-v-579f2eca]::-webkit-inner-spin-button,[type=number][data-v-579f2eca]::-webkit-outer-spin-button{height:auto}[type=search][data-v-579f2eca]{outline-offset:-2px}[type=search][data-v-579f2eca]::-webkit-search-decoration{-webkit-appearance:none}[data-v-579f2eca]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}label[for][data-v-579f2eca]{cursor:pointer}details[data-v-579f2eca]{display:block}summary[data-v-579f2eca]{display:list-item}table[data-v-579f2eca]{border-collapse:collapse;border-spacing:0}caption[data-v-579f2eca]{text-align:left}td[data-v-579f2eca],th[data-v-579f2eca]{vertical-align:top;padding:0}th[data-v-579f2eca]{text-align:left;font-weight:700}[hidden][data-v-579f2eca],template[data-v-579f2eca]{display:none}@font-face{font-family:"Helvetica neue";src:url('+l+') format("truetype");font-weight:400}@font-face{font-family:"Helvetica neue";src:url('+h+') format("truetype");font-weight:300}body *[data-v-579f2eca]{font-family:"Helvetica neue","YakuHanJP","Noto Sans JP",san-selif;color:#fff;color:var(--color-white);font-weight:400;letter-spacing:.6px;font-size:15px}html[data-v-579f2eca]{--color-black:#020016;--color-white:#fff;font-size:4px}body[data-v-579f2eca],html[data-v-579f2eca]{width:100vw;overflow-x:hidden;-ms-scroll-chaining:none;overscroll-behavior:none;min-height:100vh;min-height:var(--wh,100vh);background:#92a5c4}img[data-v-579f2eca]{-o-object-fit:cover;object-fit:cover;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}span[data-v-579f2eca]{font-size:inherit;font-weight:inherit;line-height:inherit;letter-spacing:inherit;display:inline-block}[data-v-579f2eca]::-moz-selection{background:#fff;color:#92a5c4}[data-v-579f2eca]::selection{background:#fff;color:#92a5c4}@media(max-width:750px){.pc-only[data-v-579f2eca]{display:none!important}}@media(min-width:751px){.sp-only[data-v-579f2eca]{display:none!important}}.container[data-v-579f2eca]{height:100vh;height:var(--wh,100vh)}.container .container__back-blur[data-v-579f2eca]{width:100vw;background:hsla(0,0%,100%,.15);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);z-index:0}.container .container__back-blur[data-v-579f2eca],.index[data-v-579f2eca],.index>body[data-v-579f2eca]{height:100vh;height:var(--wh,100vh);position:fixed;top:0;left:0}.index[data-v-579f2eca],.index>body[data-v-579f2eca]{-ms-scroll-chaining:none;overscroll-behavior:none;right:0;bottom:0;width:100%;overflow:hidden}.scrollbar-track[data-v-579f2eca]{background:transparent!important;width:1rem!important}.scrollbar-track .scrollbar-thumb[data-v-579f2eca]{border-radius:0;background:#fff;transition:height .5s ease-in}.marquee-link[data-v-579f2eca]{width:100vw;height:144px;overflow-x:hidden;display:block;position:relative;margin-top:240px;margin-bottom:240px}@media(max-width:750px){.marquee-link[data-v-579f2eca]{height:40px;margin-top:80px;margin-bottom:180px}}.marquee-link .marquee-link__wrap[data-v-579f2eca]{display:flex;align-items:center;position:absolute;top:0;bottom:0;left:0;margin:auto;-webkit-animation:marquee-link-data-v-579f2eca 20s linear 0s infinite;animation:marquee-link-data-v-579f2eca 20s linear 0s infinite;will-change:transform}.marquee-link .marquee-link__wrap__text[data-v-579f2eca]{font-weight:300;font-size:144px;line-height:100%;margin-right:240px}@media(max-width:750px){.marquee-link .marquee-link__wrap__text[data-v-579f2eca]{font-size:40px;letter-spacing:4px;margin-right:56px}}@-webkit-keyframes marquee-link-data-v-579f2eca{to{transform:translateX(0)}0%{transform:translateX(-50%)}}@keyframes marquee-link-data-v-579f2eca{to{transform:translateX(0)}0%{transform:translateX(-50%)}}.first__title-box__text-item[data-v-579f2eca],.first__title-box__title[data-v-579f2eca]{transform:translateY(110%)}.first[data-v-579f2eca]{max-width:2100px;width:100%;left:0;right:0;margin:auto;box-sizing:border-box;padding-left:140px;padding-right:140px;height:100vh;height:var(--wh,100vh);display:flex;align-items:center;position:relative}@media(max-width:750px){.first[data-v-579f2eca]{max-width:100%;padding-left:20px;padding-right:20px;box-sizing:border-box;justify-content:center}}.first .first__title-box[data-v-579f2eca]{display:flex;align-items:flex-start;overflow:hidden;padding:2px 0}.first .first__title-box__text[data-v-579f2eca]{font-size:18px;padding-right:20px;overflow:hidden}@media(max-width:750px){.first .first__title-box__text[data-v-579f2eca]{padding-right:8px;font-size:10px;letter-spacing:.4px}}.first .first__title-box__text-item[data-v-579f2eca]{display:block}.first .first__title-box__title[data-v-579f2eca]{font-size:6vw;font-weight:300;line-height:77%}@media(max-width:750px){.first .first__title-box__title[data-v-579f2eca]{font-size:40px;letter-spacing:2px}}.scrollbar-track-x[data-v-579f2eca]{display:none!important}.base-header[data-v-579f2eca]{max-width:2100px;width:100%;left:0;right:0;margin:auto;box-sizing:border-box;padding-left:80px;padding-right:80px;position:fixed;width:100vw;height:auto;top:80px;z-index:2;display:flex;justify-content:space-between;align-items:center}@media(max-width:750px){.base-header[data-v-579f2eca]{max-width:100%;padding-left:20px;padding-right:20px;box-sizing:border-box;top:32px}}.base-header .base-header__right[data-v-579f2eca]{display:flex;align-items:center}@media(max-width:750px){.base-header .base-header__left[data-v-579f2eca]{display:none}}.base-header .base-header__logo-wrap[data-v-579f2eca]{line-height:0}@media(max-width:750px){.base-header .base-header__logo-wrap[data-v-579f2eca]{overflow:auto}}.base-header .base-header__logo[data-v-579f2eca]{margin-right:88px;width:120px}@media(max-width:750px){.base-header .base-header__logo[data-v-579f2eca]{margin-right:0;width:82px}}.base-header .base-header__lang>*[data-v-579f2eca]{margin:0 20px 0 0}.base-header .base-header__lang[data-v-579f2eca]>:last-child{margin:0}@media(max-width:750px){.base-header .base-header__lang[data-v-579f2eca]{display:none}}.base-header .base-header__lang__text[data-v-579f2eca]{font-size:15px;opacity:.5;transition:opacity .5s ease-out}.base-header .base-header__lang__text--active[data-v-579f2eca]{opacity:1}.base-header .base-header__menu[data-v-579f2eca]{display:flex;align-items:center}.base-header .base-header__menu>*[data-v-579f2eca]{margin:0 32px 0 0}.base-header .base-header__menu[data-v-579f2eca]>:last-child{margin:0}.base-header .base-header__menu .base-header__menu__link[data-v-579f2eca]{font-size:15px;letter-spacing:.6px}',""]),e.exports=f},312:function(e,t,n){"use strict";n.r(t);var r=n(78),o=n(262),c=n.n(o),d={data:function(){return{}},mounted:function(){r.a.registerPlugin(c.a)},created:function(){},methods:{changeLang:function(e){var t=this,n=r.a.timeline();n.to(".transition-curtain__item",{ease:c.a.create("custom","M0,0 C0.6,0 0.604,1 0.9,1 0.958,1 0.818,1.001 1,1 "),stagger:{amount:.5,from:"start"},clipPath:"inset(-10% 0 0% 0)"}),n.call((function(){t.$store.commit("changeLang",e)})),n.to(".transition-curtain__item",{ease:c.a.create("custom","M0,0 C0.075,0 0.013,0 0.1,0 0.4,0 0.6,1 1,1"),stagger:{amount:.5,from:"start"},clipPath:"inset(0% 0 110% 0)"}),n.set(".transition-curtain__item",{clipPath:"inset(110% 0 0% 0)"})}}},f=(n(292),n(36)),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"base-header"},[n("div",{staticClass:"base-header__right"},[n("n-link",{staticClass:"base-header__logo-wrap",attrs:{to:"/"}},[n("img",{staticClass:"base-header__logo",attrs:{src:"/logo.png",onselectstart:"return false;",onmousedown:"return false;"}})]),n("div",{staticClass:"base-header__lang"},[n("button",{staticClass:"base-header__lang__text",class:{"base-header__lang__text--active":"en"===e.$store.state.lang},on:{click:function(t){return e.changeLang("en")}}},[e._v("EN")]),n("button",{staticClass:"base-header__lang__text",class:{"base-header__lang__text--active":"jp"===e.$store.state.lang},on:{click:function(t){return e.changeLang("jp")}}},[e._v("JP")])])],1),n("div",{staticClass:"base-header__left"},[n("ul",{staticClass:"base-header__menu"},[n("li",[n("n-link",{staticClass:"base-header__menu__link",attrs:{to:"/"}},[e._v("Top")])],1),n("li",[n("n-link",{staticClass:"base-header__menu__link",attrs:{to:"/works"}},[e._v("Works")])],1),n("li",[n("n-link",{staticClass:"base-header__menu__link",attrs:{to:"/about"}},[e._v("About")])],1)])])])}),[],!1,null,"579f2eca",null);t.default=component.exports}}]);