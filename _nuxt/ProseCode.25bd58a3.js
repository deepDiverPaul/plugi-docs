import{d as y,r as l,x as w,b as s,c as p,e as m,g as C,w as k,K as _,I as f,T as x,n as v,O as S,p as b,j as I,l as h,t as $,f as P,N}from"./entry.6ba5763c.js";import{u as z,o as T}from"./index.00837d1e.js";const V=e=>(b("data-v-4a003820"),e=e(),I(),e),A=V(()=>m("span",{class:"sr-only"},"Copy to clipboard",-1)),M={class:"icon-wrapper"},O=y({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const n=e,a=l(),{copy:t}=z();T(a,()=>{o.value==="copied"&&(o.value="init")});const{prose:c}=w(),o=l("init"),g=B=>{t(n.content).then(()=>{o.value="copied"}).catch(r=>{console.warn("Couldn't copy to clipboard!",r)})};return(B,r)=>{const u=S;return s(),p("button",{ref_key:"copyButtonRef",ref:a,class:v([(e.show||o.value==="copied")&&"show"]),onClick:g},[A,m("span",M,[C(x,{name:"fade"},{default:k(()=>{var d,i;return[o.value==="copied"?(s(),_(u,{key:0,name:(d=f(c).copyButton)==null?void 0:d.iconCopied,size:"18",class:"copied"},null,8,["name"])):(s(),_(u,{key:1,name:(i=f(c).copyButton)==null?void 0:i.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}});const R=h(O,[["__scopeId","data-v-4a003820"]]),j={key:0,class:"filename"},D=y({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const n=l(!1);return(a,t)=>{const c=R;return s(),p("div",{class:v([[`highlight-${e.language}`],"prose-code"]),onMouseenter:t[0]||(t[0]=o=>n.value=!0),onMouseleave:t[1]||(t[1]=o=>n.value=!1)},[e.filename?(s(),p("span",j,$(e.filename),1)):P("",!0),N(a.$slots,"default",{},void 0,!0),C(c,{show:n.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}});const q=h(D,[["__scopeId","data-v-c164ce0a"]]);export{q as default};
