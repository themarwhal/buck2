"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4031],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>d,MDXProvider:()=>p,mdx:()=>b,useMDXComponents:()=>u,withMDXComponents:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),c=function(e){return function(t){var r=u(t.components);return n.createElement(e,i({},t,{components:r}))}},u=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(r),p=a,m=c["".concat(o,".").concat(p)]||c[p]||f[p]||i;return r?n.createElement(m,l(l({ref:t},d),{},{components:r})):n.createElement(m,l({ref:t},d))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},95659:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const i={id:"deferred_materialization",title:"Deferred Materialization"},o=void 0,l={unversionedId:"users/advanced/deferred_materialization",id:"users/advanced/deferred_materialization",title:"Deferred Materialization",description:"When using Remote Execution, Buck2 can optionally operate with Deferred Materialization, which means that Buck2 will avoid downloading outputs until they are required by a local action.",source:"@site/../docs/users/advanced/deferred_materialization.md",sourceDirName:"users/advanced",slug:"/users/advanced/deferred_materialization",permalink:"/docs/users/advanced/deferred_materialization",draft:!1,tags:[],version:"current",frontMatter:{id:"deferred_materialization",title:"Deferred Materialization"},sidebar:"manualSidebar",previous:{title:"Remote Execution",permalink:"/docs/users/remote_execution"},next:{title:"Restarter",permalink:"/docs/users/advanced/restarter"}},s={},d=[{value:"Pitfalls",id:"pitfalls",level:2},{value:"Enabling Deferred Materialization",id:"enabling-deferred-materialization",level:2},{value:"On-disk state",id:"on-disk-state",level:2},{value:"Deferring Write Actions",id:"deferring-write-actions",level:2},{value:"<code>buck2 clean --stale</code>",id:"buck2-clean---stale",level:2}],c=(u="OssOnly",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",e)});var u;const p={toc:d};function m(e){let{components:t,...r}=e;return(0,a.mdx)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"When using ",(0,a.mdx)("a",{parentName:"p",href:"/docs/users/remote_execution"},"Remote Execution"),", Buck2 can optionally operate with Deferred Materialization, which means that Buck2 will avoid downloading outputs until they are required by a local action."),(0,a.mdx)("p",null,"This can provide very substantial performance savings on builds that execute primarily on Remote Execution, since those builds become able to proceed without ever downloading any intermediary outputs."),(0,a.mdx)("p",null,"At Meta, despite very fast networks being used internally, this was was observed to make real-world builds finish approximately 2.5 times faster."),(0,a.mdx)("h2",{id:"pitfalls"},"Pitfalls"),(0,a.mdx)("p",null,"Buck2's deferred materialization makes assumptions about your Remote Execution backend. In particular, it expects that the TTL returned from action cache entries by your Remote Execution backend always exceeds the TTL of all output artifacts it references."),(0,a.mdx)("p",null,"Nonetheless, artifacts may also eventually expire from your Remote Execution backend. When that happens, builds using Deferred Materialization may fail if those artifacts are needed locally."),(0,a.mdx)("p",null,"A kill is necessary to recover from those builds. However, the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/users/advanced/restarter"},"Restarter")," can be used to mitigate this issue by restarting Buck when it encounters an expired artifact."),(0,a.mdx)(c,{mdxType:"OssOnly"},"At Meta, artifacts get periodically refreshed, but open source RE backends do not expose the TTL of artifacts, so this feature does not work outside of Meta."),(0,a.mdx)("h2",{id:"enabling-deferred-materialization"},"Enabling Deferred Materialization"),(0,a.mdx)("p",null,"To enable deferred materialization, add this to your Buckconfig:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"[buck2]\nmaterializations = deferred\n")),(0,a.mdx)("h2",{id:"on-disk-state"},"On-disk state"),(0,a.mdx)("p",null,"Buck2 can also optionally track its state on disk in a SQLite database. This allows Buck2 to remember what files are on disk across restarts."),(0,a.mdx)("p",null,"This can allow Buck2 to avoid re-downloading outputs from your Remote Execution backend if they are already on disk."),(0,a.mdx)("p",null,"To enable, add this to your Buckconfig:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"[buck2]\nsqlite_materializer_state = true\n")),(0,a.mdx)("h2",{id:"deferring-write-actions"},"Deferring Write Actions"),(0,a.mdx)("p",null,"To further speedup builds, Buck2 can also be instructed to not execute any writes on the critical path for a build."),(0,a.mdx)("p",null,"To enable, add this to your Buckconfig:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"[buck2]\ndefer_write_actions = true\n")),(0,a.mdx)("p",null,"This mechanism is recommended if you're using the On-disk State, since it means Buck can omit writes entirely if the same content is already on disk."),(0,a.mdx)("h2",{id:"buck2-clean---stale"},(0,a.mdx)("inlineCode",{parentName:"h2"},"buck2 clean --stale")),(0,a.mdx)("p",null,"When enabling the on-disk state, Buck2 can also optionally delete only artifacts that were not used recently. This also requires enabling deferred write actions."),(0,a.mdx)("p",null,"You can use this mechanism via ",(0,a.mdx)("inlineCode",{parentName:"p"},"buck2 clean --stale"),"."))}m.isMDXComponent=!0}}]);