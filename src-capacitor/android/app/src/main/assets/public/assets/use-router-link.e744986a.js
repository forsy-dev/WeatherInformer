import{a as c,c as D,h as f,b as F,S as C,g as K,f as U,V as H,m as X,u as Y,s as G,t as J,X as W}from"./index.c8fe6474.js";const O={xs:18,sm:24,md:32,lg:38,xl:46},Z={size:String};function ee(e,t=O){return c(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const A="0 0 24 24",z=e=>e,E=e=>`ionicons ${e}`,N={"mdi-":e=>`mdi ${e}`,"icon-":z,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":E,"ion-ios":E,"ion-logo":E,"iconfont ":z,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},V={o_:"-outlined",r_:"-round",s_:"-sharp"},Q={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},te=new RegExp("^("+Object.keys(N).join("|")+")"),re=new RegExp("^("+Object.keys(V).join("|")+")"),L=new RegExp("^("+Object.keys(Q).join("|")+")"),ne=/^[Mm]\s?[-+]?\.?\d/,se=/^img:/,ae=/^svguse:/,ie=/^ion-/,oe=/^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var he=D({name:"QIcon",props:{...Z,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:s}}=K(),r=ee(e),a=c(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),u=c(()=>{let i,n=e.name;if(n==="none"||!n)return{none:!0};if(s.iconMapFn!==null){const o=s.iconMapFn(n);if(o!==void 0)if(o.icon!==void 0){if(n=o.icon,n==="none"||!n)return{none:!0}}else return{cls:o.cls,content:o.content!==void 0?o.content:" "}}if(ne.test(n)===!0){const[o,p=A]=n.split("|");return{svg:!0,viewBox:p,nodes:o.split("&&").map(y=>{const[m,k,h]=y.split("@@");return f("path",{style:k,d:m,transform:h})})}}if(se.test(n)===!0)return{img:!0,src:n.substring(4)};if(ae.test(n)===!0){const[o,p=A]=n.split("|");return{svguse:!0,src:o.substring(7),viewBox:p}}let g=" ";const d=n.match(te);if(d!==null)i=N[d[1]](n);else if(oe.test(n)===!0)i=n;else if(ie.test(n)===!0)i=`ionicons ion-${s.platform.is.ios===!0?"ios":"md"}${n.substring(3)}`;else if(L.test(n)===!0){i="notranslate material-symbols";const o=n.match(L);o!==null&&(n=n.substring(6),i+=Q[o[1]]),g=n}else{i="notranslate material-icons";const o=n.match(re);o!==null&&(n=n.substring(2),i+=V[o[1]]),g=n}return{cls:i,content:g}});return()=>{const i={class:a.value,style:r.value,"aria-hidden":"true",role:"presentation"};return u.value.none===!0?f(e.tag,i,F(t.default)):u.value.img===!0?f(e.tag,i,C(t.default,[f("img",{src:u.value.src})])):u.value.svg===!0?f(e.tag,i,C(t.default,[f("svg",{viewBox:u.value.viewBox||"0 0 24 24"},u.value.nodes)])):u.value.svguse===!0?f(e.tag,i,C(t.default,[f("svg",{viewBox:u.value.viewBox},[f("use",{"xlink:href":u.value.src})])])):(u.value.cls!==void 0&&(i.class+=" "+u.value.cls),f(e.tag,i,C(t.default,[u.value.content])))}}});const ue={size:{type:[String,Number],default:"1em"},color:String};function le(e){return{cSize:c(()=>e.size in O?`${O[e.size]}px`:e.size),classes:c(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var ye=D({name:"QSpinner",props:{...ue,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:s}=le(e);return()=>f("svg",{class:s.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[f("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function ce(e,t=250){let s=!1,r;return function(){return s===!1&&(s=!0,setTimeout(()=>{s=!1},t),r=e.apply(this,arguments)),r}}function j(e,t,s,r){s.modifiers.stop===!0&&G(e);const a=s.modifiers.color;let u=s.modifiers.center;u=u===!0||r===!0;const i=document.createElement("span"),n=document.createElement("span"),g=J(e),{left:d,top:o,width:p,height:y}=t.getBoundingClientRect(),m=Math.sqrt(p*p+y*y),k=m/2,h=`${(p-m)/2}px`,_=u?h:`${g.left-d-k}px`,w=`${(y-m)/2}px`,q=u?w:`${g.top-o-k}px`;n.className="q-ripple__inner",W(n,{height:`${m}px`,width:`${m}px`,transform:`translate3d(${_},${q},0) scale3d(.2,.2,1)`,opacity:0}),i.className=`q-ripple${a?" text-"+a:""}`,i.setAttribute("dir","ltr"),i.appendChild(n),t.appendChild(i);const R=()=>{i.remove(),clearTimeout(S)};s.abort.push(R);let S=setTimeout(()=>{n.classList.add("q-ripple__inner--enter"),n.style.transform=`translate3d(${h},${w},0) scale3d(1,1,1)`,n.style.opacity=.2,S=setTimeout(()=>{n.classList.remove("q-ripple__inner--enter"),n.classList.add("q-ripple__inner--leave"),n.style.opacity=0,S=setTimeout(()=>{i.remove(),s.abort.splice(s.abort.indexOf(R),1)},275)},250)},50)}function B(e,{modifiers:t,value:s,arg:r}){const a=Object.assign({},e.cfg.ripple,t,s);e.modifiers={early:a.early===!0,stop:a.stop===!0,center:a.center===!0,color:a.color||r,keyCodes:[].concat(a.keyCodes||13)}}var ke=U({name:"ripple",beforeMount(e,t){const s=t.instance.$.appContext.config.globalProperties.$q.config||{};if(s.ripple===!1)return;const r={cfg:s,enabled:t.value!==!1,modifiers:{},abort:[],start(a){r.enabled===!0&&a.qSkipRipple!==!0&&a.type===(r.modifiers.early===!0?"pointerdown":"click")&&j(a,e,r,a.qKeyEvent===!0)},keystart:ce(a=>{r.enabled===!0&&a.qSkipRipple!==!0&&H(a,r.modifiers.keyCodes)===!0&&a.type===`key${r.modifiers.early===!0?"down":"up"}`&&j(a,e,r,!0)},300)};B(r,t),e.__qripple=r,X(r,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const s=e.__qripple;s!==void 0&&(s.enabled=t.value!==!1,s.enabled===!0&&Object(t.value)===t.value&&B(s,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(s=>{s()}),Y(t,"main"),delete e._qripple)}});function xe(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;for(;Object(t)===t;){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function fe(e){return e.appContext.config.globalProperties.$router!==void 0}function $e(e){return e.isUnmounted===!0||e.isDeactivated===!0}function M(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function I(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function de(e,t){for(const s in t){const r=t[s],a=e[s];if(typeof r=="string"){if(r!==a)return!1}else if(Array.isArray(a)===!1||a.length!==r.length||r.some((u,i)=>u!==a[i]))return!1}return!0}function T(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((s,r)=>s===t[r]):e.length===1&&e[0]===t}function pe(e,t){return Array.isArray(e)===!0?T(e,t):Array.isArray(t)===!0?T(t,e):e===t}function ve(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const s in e)if(pe(e[s],t[s])===!1)return!1;return!0}const me={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},be={...me,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function Re({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const s=K(),{props:r,proxy:a,emit:u}=s,i=fe(s),n=c(()=>r.disable!==!0&&r.href!==void 0),g=t===!0?c(()=>i===!0&&r.disable!==!0&&n.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""):c(()=>i===!0&&n.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""),d=c(()=>g.value===!0?q(r.to):null),o=c(()=>d.value!==null),p=c(()=>n.value===!0||o.value===!0),y=c(()=>r.type==="a"||p.value===!0?"a":r.tag||e||"div"),m=c(()=>n.value===!0?{href:r.href,target:r.target}:o.value===!0?{href:d.value.href,target:r.target}:{}),k=c(()=>{if(o.value===!1)return-1;const{matched:l}=d.value,{length:v}=l,x=l[v-1];if(x===void 0)return-1;const $=a.$route.matched;if($.length===0)return-1;const b=$.findIndex(I.bind(null,x));if(b!==-1)return b;const P=M(l[v-2]);return v>1&&M(x)===P&&$[$.length-1].path!==P?$.findIndex(I.bind(null,l[v-2])):b}),h=c(()=>o.value===!0&&k.value!==-1&&de(a.$route.params,d.value.params)),_=c(()=>h.value===!0&&k.value===a.$route.matched.length-1&&ve(a.$route.params,d.value.params)),w=c(()=>o.value===!0?_.value===!0?` ${r.exactActiveClass} ${r.activeClass}`:r.exact===!0?"":h.value===!0?` ${r.activeClass}`:"":"");function q(l){try{return a.$router.resolve(l)}catch{}return null}function R(l,{returnRouterError:v,to:x=r.to,replace:$=r.replace}={}){if(r.disable===!0)return l.preventDefault(),Promise.resolve(!1);if(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey||l.button!==void 0&&l.button!==0||r.target==="_blank")return Promise.resolve(!1);l.preventDefault();const b=a.$router[$===!0?"replace":"push"](x);return v===!0?b:b.then(()=>{}).catch(()=>{})}function S(l){if(o.value===!0){const v=x=>R(l,x);u("click",l,v),l.defaultPrevented!==!0&&v()}else u("click",l)}return{hasRouterLink:o,hasHrefLink:n,hasLink:p,linkTag:y,resolvedLink:d,linkIsActive:h,linkIsExactActive:_,linkClass:w,linkAttrs:m,getLink:q,navigateToRouterLink:R,navigateOnClick:S}}export{he as Q,ke as R,me as a,ee as b,Re as c,ye as d,$e as e,be as f,xe as g,Z as u,fe as v};
