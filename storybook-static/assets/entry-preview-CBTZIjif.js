import{h as l,c as S,i as T,a as b,r as d}from"./vue.esm-bundler-Cg6rw2kB.js";var h=Object.defineProperty,w=(r,e)=>{for(var t in e)h(r,t,{get:e[t],enumerable:!0})};const{sanitizeStoryContextUpdate:v}=__STORYBOOK_MODULE_PREVIEW_API__;var P={};w(P,{applyDecorators:()=>R,mount:()=>F,parameters:()=>z,render:()=>U,renderToCanvas:()=>A});var U=(r,e)=>{let{id:t,component:o}=e;if(!o)throw new Error(`Unable to render story ${t} as the component annotation is missing from the default export`);return()=>l(o,r,I(r,e))},j=async(r,e)=>{globalThis&&globalThis.PLUGINS_SETUP_FUNCTIONS&&await Promise.all([...globalThis.PLUGINS_SETUP_FUNCTIONS].map(t=>t(r,e)))},f=new Map;async function A({storyFn:r,forceRemount:e,showMain:t,showException:o,storyContext:n,id:a},s){let p=f.get(s);if(p&&!e){let u=r(),c=y(u,n);return N(p.reactiveArgs,c),()=>{g(p.vueApp,s)}}p&&e&&g(p.vueApp,s);let i=S({setup(){n.args=d(n.args);let u=r(),c=y(u,n),_={vueApp:i,reactiveArgs:d(c)};return f.set(s,_),()=>l(u)}});return i.config.errorHandler=(u,c,_)=>{window.__STORYBOOK_PREVIEW__?.storyRenders.some(m=>m.id===a&&m.phase==="playing")?setTimeout(()=>{throw u},0):o(u)},await j(i,n),i.mount(s),t(),()=>{g(i,s)}}function I(r,e){let{argTypes:t}=e,o=Object.entries(r).filter(([n])=>t[n]?.table?.category==="slots").map(([n,a])=>[n,typeof a=="function"?a:()=>a]);return Object.fromEntries(o)}function y(r,e){return r.props&&T(r)?r.props:e.args}function N(r,e){if(Object.keys(e).length===0)return;let t=b(r)?r:d(r);Object.keys(t).forEach(o=>{o in e||delete t[o]}),Object.assign(t,e)}function g(r,e){r?.unmount(),f.has(e)&&f.delete(e)}function E(r){return typeof r=="function"?{render:r,name:r.name}:r}function O(r,e){let t=r;return t===null?null:typeof t=="function"?t:e?{...E(t),components:{...t.components||{},story:e}}:{render(){return l(t)}}}function R(r,e){return e.reduce((t,o)=>n=>{let a,s=o(p=>{let i=v(p);return p&&(i.args=Object.assign(n.args,i.args)),a=t({...n,...i}),a},n);return a||(a=t(n)),s===a?a:O(s,()=>l(a))},t=>O(r(t)))}var F=r=>async(e,t)=>(e&&(r.originalStoryFn=()=>()=>l(e,t?.props,t?.slots)),await r.renderToCanvas(),r.canvas),z={renderer:"vue3"};export{R as applyDecorators,F as mount,z as parameters,U as render,A as renderToCanvas};