(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"qO/+":function(e,t,s){"use strict";s.r(t),s.d(t,"scopeCss",function(){return T});const r="-shadowcsshost",c="-shadowcssslotted",o="-shadowcsscontext",n=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",l=new RegExp("(-shadowcsshost"+n,"gim"),i=new RegExp("(-shadowcsscontext"+n,"gim"),a=new RegExp("(-shadowcssslotted"+n,"gim"),p="-shadowcsshost-no-combinator",h=/-shadowcsshost-no-combinator([^\s]*)/,u=[/::shadow/g,/::content/g],d=/-shadowcsshost/gim,g=/:host/gim,m=/::slotted/gim,f=/:host-context/gim,w=/\/\*\s*[\s\S]*?\*\//g,x=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,$=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,_=/([{}])/g,b="%BLOCK%",S=(e,t)=>{const s=O(e);let r=0;return s.escapedString.replace($,(...e)=>{const c=e[2];let o="",n=e[4],l="";n&&n.startsWith("{%BLOCK%")&&(o=s.blocks[r++],n=n.substring(b.length+1),l="{");const i=t({selector:c,content:o});return`${e[1]}${i.selector}${e[3]}${l}${i.content}${n}`})},O=e=>{const t=e.split(_),s=[],r=[];let c=0,o=[];for(let n=0;n<t.length;n++){const e=t[n];"}"===e&&c--,c>0?o.push(e):(o.length>0&&(r.push(o.join("")),s.push(b),o=[]),s.push(e)),"{"===e&&c++}o.length>0&&(r.push(o.join("")),s.push(b));return{escapedString:s.join(""),blocks:r}},W=(e,t,s)=>e.replace(t,(...e)=>{if(e[2]){const t=e[2].split(","),r=[];for(let c=0;c<t.length;c++){const o=t[c].trim();if(!o)break;r.push(s(p,o,e[3]))}return r.join(",")}return p+e[3]}),j=(e,t,s)=>e+t.replace(r,"")+s,k=(e,t,s)=>t.indexOf(r)>-1?j(e,t,s):e+t+s+", "+t+" "+e+s,E=(e,t)=>!(e=>(e=e.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+e+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(t).test(e),R=(e,t,s)=>{const r="."+(t=t.replace(/\[is=([^\]]*)\]/g,(e,...t)=>t[0])),c=e=>{let c=e.trim();if(!c)return"";if(e.indexOf(p)>-1)c=((e,t,s)=>{if(d.lastIndex=0,d.test(e)){const t="."+s;return e.replace(h,(e,s)=>s.replace(/([^:]*)(:*)(.*)/,(e,s,r,c)=>s+t+r+c)).replace(d,t+" ")}return t+" "+e})(e,t,s);else{const t=e.replace(d,"");if(t.length>0){const e=t.match(/([^:]*)(:*)(.*)/);e&&(c=e[1]+r+e[2]+e[3])}}return c},o=(e=>{const t=[];let s,r=0;return s=(e=e.replace(/(\[[^\]]*\])/g,(e,s)=>{const c=`__ph-${r}__`;return t.push(s),r++,c})).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(e,s,c)=>{const o=`__ph-${r}__`;return t.push(c),r++,s+o}),{content:s,placeholders:t}})(e);let n,l="",i=0;const a=/( |>|\+|~(?!=))\s*/g;let u=!((e=o.content).indexOf(p)>-1);for(;null!==(n=a.exec(e));){const t=n[1],s=e.slice(i,n.index).trim();u=u||s.indexOf(p)>-1;l+=`${u?c(s):s} ${t} `,i=a.lastIndex}const g=e.substring(i);return u=u||g.indexOf(p)>-1,l+=u?c(g):g,m=o.placeholders,l.replace(/__ph-(\d+)__/g,(e,t)=>m[+t]);var m},C=(e,t,s,r,c)=>S(e,e=>{let c=e.selector,o=e.content;"@"!==e.selector[0]?c=((e,t,s,r)=>e.split(",").map(e=>r&&e.indexOf("."+r)>-1?e.trim():E(e,t)?R(e,t,s).trim():e.trim()).join(", "))(e.selector,t,s,r):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(o=C(e.content,t,s,r));return{selector:c.replace(/\s{2,}/g," ").trim(),content:o}}),L=(e,t,s,n,h)=>{const d=((e,t)=>{const s="."+t+" > ",r=[];return e=e.replace(a,(...e)=>{if(e[2]){const t=e[2].trim(),c=e[3],o=s+t+c;let n="";for(let s=e[4]-1;s>=0;s--){const t=e[5][s];if("}"===t||","===t)break;n=t+n}const l=n+o,i=`${n.trimRight()}${o.trim()}`;if(l.trim()!==i.trim()){const e=`${i}, ${l}`;r.push({orgSelector:l,updatedSelector:e})}return o}return p+e[3]}),{selectors:r,cssText:e}})(e=(e=>W(e,i,k))(e=(e=>W(e,l,j))(e=e.replace(f,o).replace(g,r).replace(m,c))),n);return e=(e=>u.reduce((e,t)=>e.replace(t," "),e))(e=d.cssText),t&&(e=C(e,t,s,n)),{cssText:(e=(e=e.replace(/-shadowcsshost-no-combinator/g,"."+s)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:d.selectors}},T=(e,t,s)=>{const r=t+"-h",c=t+"-s",o=e.match(x)||[];e=(e=>e.replace(w,""))(e);const n=[];if(s){const t=e=>{const t=`/*!@___${n.length}___*/`,s=`/*!@${e.selector}*/`;return n.push({placeholder:t,comment:s}),e.selector=t+e.selector,e};e=S(e,e=>"@"!==e.selector[0]?t(e):e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document")?(e.content=S(e.content,t),e):e)}const l=L(e,t,r,c);return e=[l.cssText,...o].join("\n"),s&&n.forEach(({placeholder:t,comment:s})=>{e=e.replace(t,s)}),l.slottedSelectors.forEach(t=>{e=e.replace(t.orgSelector,t.updatedSelector)}),e}}}]);