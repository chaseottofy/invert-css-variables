var f=Object.defineProperty;var u=(e,t)=>f(e,"name",{value:t,configurable:!0});var b={includedRoot:`      
  only pass the variables to this function, not the entire :root block.
  Example:
  invertColorsInRoot(\`
    --accent-1: #111;
    --accent-2: rgb(255,170,204);
    --accent-3: #333;
    --accent-4: #444;\`)`},N=b;var c=u(e=>{let t=Number.parseInt(e,10);return Number.isNaN(t)||t<0||t>255?null:255-t},"invertRgb"),$=u(e=>{let t=Number.parseInt(e,10);return Number.isNaN(t)||t<0||t>=360?null:(t+180)%360},"flipHue");function m(e){let t=e.trim();if(/^#([\dA-Fa-f]{3}){1,2}$/.test(t)){let l=t.length===4,o=t.toLowerCase()===t,r=l?t.slice(1).split("").map(i=>i+i).join(""):t.slice(1);if(r.length!==6)return null;let n="";for(let i=0;i<r.length;i+=2){let p=Number.parseInt(r.slice(i,i+2),16);if(Number.isNaN(p))return null;n+=(255-p).toString(16).padStart(2,"0")}return`#${o?n.toLowerCase():n.toUpperCase()}`}let s=t.match(/^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d.]+))?\)$/);if(s){let l=c(s[1]),o=c(s[2]),r=c(s[3]),n=s[5]?Number.parseFloat(s[5]):null;return l===null||o===null||r===null||n!==null&&(Number.isNaN(n)||n<0||n>1)?null:n===null?`rgb(${l},${o},${r})`:`rgba(${l},${o},${r},${n})`}let a=t.match(/^hsla?\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%(,\s*([\d.]+))?\)$/);if(a){let l=$(a[1]),o=Number.parseInt(a[2],10),r=Number.parseInt(a[3],10),n=a[5]?Number.parseFloat(a[5]):null;return l===null||Number.isNaN(o)||o<0||o>100||Number.isNaN(r)||r<0||r>100||n!==null&&(Number.isNaN(n)||n<0||n>1)?null:n===null?`hsl(${l},${o}%,${r}%)`:`hsla(${l},${o}%,${r}%,${n})`}return null}u(m,"invertColor");function d(e){return e.split(`
`).map(t=>t.trimStart()).join(`
`).trim()}u(d,"removePadding");function g(e){let t=d(e);if(t.slice(0,4)==="root")return console.log(N.includedRoot),e;let s=[],a=t.trim().split(`
`);for(let l of a){let[o,r]=l.split(":").map(i=>i.trim());if(!o||!r)return console.log(`Invalid CSS variable declaration: ${l}`),e;let n=m(r.replace(/;$/,""));if(!n)return console.log(`Invalid color value: ${r}`),e;s.push(`  ${o}: ${n};`)}return`
${s.join(`
`).trimEnd()}`}u(g,"invert");export{g as default};
