import f from"./ContentSlot.304a0676.js";import y from"./ButtonLink.a00db706.js";import h from"./Terminal.2b60a7ad.js";import k from"./VideoPlayer.aeefe671.js";import{d as v,b as s,c as a,e as o,g as c,f as r,w as i,D as d,K as l,F as $,t as u,N as B,l as w}from"./entry.6ba5763c.js";import"./index.00837d1e.js";import"./NuxtImg.vue.228cd361.js";const g={class:"block-hero"},b={class:"layout"},H={class:"content"},N={key:0,class:"announce"},S={class:"title"},V={class:"description"},q={key:1,class:"extra"},C={class:"actions"},x=["href"],A={class:"support"},T=v({__name:"BlockHero",props:{cta:{type:Array,required:!1,default:()=>[]},secondary:{type:Array,required:!1,default:()=>[]},video:{type:String,required:!1,default:""},snippet:{type:[Array,String],required:!1,default:""}},setup(e){return(t,D)=>{const n=f,_=y,p=h,m=k;return s(),a("section",g,[o("div",b,[o("div",H,[t.$slots.announce?(s(),a("p",N,[c(n,{use:t.$slots.announce,unwrap:"p"},null,8,["use"])])):r("",!0),o("h1",S,[c(n,{use:t.$slots.title,unwrap:"p"},{default:i(()=>[d(" Hero Title ")]),_:1},8,["use"])]),o("p",V,[c(n,{use:t.$slots.description,unwrap:"p"},{default:i(()=>[d(" Hero default description. ")]),_:1},8,["use"])]),t.$slots.extra?(s(),a("div",q,[c(n,{use:t.$slots.extra,unwrap:"p"},null,8,["use"])])):r("",!0),o("div",C,[t.$slots.actions?(s(),l(n,{key:0,use:t.$slots.actions,unwrap:"p"},null,8,["use"])):(s(),a($,{key:1},[e.cta?(s(),l(_,{key:0,class:"cta",bold:"",size:"medium",href:e.cta[1]},{default:i(()=>[d(u(e.cta[0]),1)]),_:1},8,["href"])):r("",!0),e.secondary?(s(),a("a",{key:1,href:e.secondary[1],class:"secondary"},u(e.secondary[0]),9,x)):r("",!0)],64))])]),o("div",A,[B(t.$slots,"support",{},()=>[e.snippet?(s(),l(p,{key:0,content:e.snippet},null,8,["content"])):e.video?(s(),l(m,{key:1,src:e.video},null,8,["src"])):r("",!0)],!0)])])])}}});const j=w(T,[["__scopeId","data-v-b95c8d5e"]]);export{j as default};
