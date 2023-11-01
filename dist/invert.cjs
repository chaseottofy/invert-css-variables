"use strict";var c=Object.defineProperty;var $=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var h=Object.prototype.hasOwnProperty;var u=(n,t)=>c(n,"name",{value:t,configurable:!0});var v=(n,t)=>{for(var l in t)c(n,l,{get:t[l],enumerable:!0})},C=(n,t,l,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let e of g(t))!h.call(n,e)&&e!==l&&c(n,e,{get:()=>t[e],enumerable:!(i=$(t,e))||i.enumerable});return n};var I=n=>C(c({},"__esModule",{value:!0}),n);var R={};v(R,{default:()=>b});module.exports=I(R);var x={includedRoot:`      
  only pass the variables to this function, not the entire :root block.
  Example:
  invertColorsInRoot(\`
    --accent-1: #111;
    --accent-2: rgb(255,170,204);
    --accent-3: #333;
    --accent-4: #444;\`)`},f=x;var m=u(n=>{let t=Number.parseInt(n,10);return Number.isNaN(t)||t<0||t>255?null:255-t},"invertRgb"),S=u(n=>{let t=Number.parseInt(n,10);return Number.isNaN(t)||t<0||t>=360?null:(t+180)%360},"flipHue");function d(n){let t=n.trim();if(/^#([\dA-Fa-f]{3}){1,2}$/.test(t)){let e=t.length===4,s=t.toLowerCase()===t,o=e?t.slice(1).split("").map(a=>a+a).join(""):t.slice(1);if(o.length!==6)return null;let r="";for(let a=0;a<o.length;a+=2){let N=Number.parseInt(o.slice(a,a+2),16);if(Number.isNaN(N))return null;r+=(255-N).toString(16).padStart(2,"0")}return`#${s?r.toLowerCase():r.toUpperCase()}`}let l=t.match(/^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d.]+))?\)$/);if(l){let e=m(l[1]),s=m(l[2]),o=m(l[3]),r=l[5]?Number.parseFloat(l[5]):null;return e===null||s===null||o===null||r!==null&&(Number.isNaN(r)||r<0||r>1)?null:r===null?`rgb(${e},${s},${o})`:`rgba(${e},${s},${o},${r})`}let i=t.match(/^hsla?\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%(,\s*([\d.]+))?\)$/);if(i){let e=S(i[1]),s=Number.parseInt(i[2],10),o=Number.parseInt(i[3],10),r=i[5]?Number.parseFloat(i[5]):null;return e===null||Number.isNaN(s)||s<0||s>100||Number.isNaN(o)||o<0||o>100||r!==null&&(Number.isNaN(r)||r<0||r>1)?null:r===null?`hsl(${e},${s}%,${o}%)`:`hsla(${e},${s}%,${o}%,${r})`}return null}u(d,"invertColor");function p(n){return n.split(`
`).map(t=>t.trimStart()).join(`
`).trim()}u(p,"removePadding");function b(n){let t=p(n);if(t.slice(0,4)==="root")return console.log(f.includedRoot),n;let l=[],i=t.trim().split(`
`);for(let e of i){let[s,o]=e.split(":").map(a=>a.trim());if(!s||!o)return console.log(`Invalid CSS variable declaration: ${e}`),n;let r=d(o.replace(/;$/,""));if(!r)return console.log(`Invalid color value: ${o}`),n;l.push(`  ${s}: ${r};`)}return`
${l.join(`
`).trimEnd()}`}u(b,"invert");
