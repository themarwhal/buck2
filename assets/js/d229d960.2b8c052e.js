"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8088],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>s,MDXProvider:()=>b,mdx:()=>m,useMDXComponents:()=>p,withMDXComponents:()=>c});var l=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},a.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=l.createContext({}),c=function(e){return function(t){var r=p(t.components);return l.createElement(e,a({},t,{components:r}))}},p=function(e){var t=l.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},b=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},x=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(r),b=n,d=c["".concat(i,".").concat(b)]||c[b]||f[b]||a;return r?l.createElement(d,u(u({ref:t},s),{},{components:r})):l.createElement(d,u({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=x;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[d]="string"==typeof e?e:n,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,r)}x.displayName="MDXCreateElement"},18316:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var l=r(87462),n=(r(67294),r(3905));const a={id:"bxl_build_result"},i="bxl_build_result type",u={unversionedId:"api/bxl/bxl_build_result",id:"api/bxl/bxl_build_result",title:"bxl_build_result type",description:"The result of building in bxl.",source:"@site/../docs/api/bxl/bxl_build_result.generated.md",sourceDirName:"api/bxl",slug:"/api/bxl/bxl_build_result",permalink:"/docs/api/bxl/bxl_build_result",draft:!1,tags:[],version:"current",frontMatter:{id:"bxl_build_result"},sidebar:"manualSidebar",previous:{title:"bxl_actions type",permalink:"/docs/api/bxl/bxl_actions"},next:{title:"bxl_ctx type",permalink:"/docs/api/bxl/bxl_ctx"}},o={},s=[{value:"bxl_build_result.artifacts",id:"bxl_build_resultartifacts",level:2},{value:"bxl_build_result.failures",id:"bxl_build_resultfailures",level:2}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,n.mdx)("wrapper",(0,l.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"bxl_build_result-type"},(0,n.mdx)("inlineCode",{parentName:"h1"},"bxl_build_result")," type"),(0,n.mdx)("p",null,"The result of building in bxl."),(0,n.mdx)("h2",{id:"bxl_build_resultartifacts"},"bxl","_","build","_","result.artifacts"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},'def bxl_build_result.artifacts() -> "bxl_built_artifacts_iterable" | None\n')),(0,n.mdx)("p",null,"Returns an optional iterable of artifacts that was successfully built."),(0,n.mdx)("p",null,"Sample usage:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-text"},"def _impl(ctx):\n    outputs = {}\n    for target, value in ctx.build(ctx.cli_args.target).items():\n        ctx.output.print(value.artifacts())\n")),(0,n.mdx)("hr",null),(0,n.mdx)("h2",{id:"bxl_build_resultfailures"},"bxl","_","build","_","result.failures"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},'def bxl_build_result.failures() -> "bxl_failed_artifacts_iterable" | None\n')),(0,n.mdx)("p",null,"Returns an optional of iterable of artifacts that failed to be built."),(0,n.mdx)("p",null,"Sample usage:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-text"},"def _impl(ctx):\n    outputs = {}\n    for target, value in ctx.build(ctx.cli_args.target).items():\n        ctx.output.print(value.failures())\n")))}p.isMDXComponent=!0}}]);