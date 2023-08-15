"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3545],{3905:(t,e,a)=>{a.r(e),a.d(e,{MDXContext:()=>c,MDXProvider:()=>s,mdx:()=>d,useMDXComponents:()=>h,withMDXComponents:()=>u});var i=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},n.apply(this,arguments)}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,i,r=function(t,e){if(null==t)return{};var a,i,r={},n=Object.keys(t);for(i=0;i<n.length;i++)a=n[i],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(i=0;i<n.length;i++)a=n[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=i.createContext({}),u=function(t){return function(e){var a=h(e.components);return i.createElement(t,n({},e,{components:a}))}},h=function(t){var e=i.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=h(t.components);return i.createElement(c.Provider,{value:e},t.children)},m="mdxType",_={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},f=i.forwardRef((function(t,e){var a=t.components,r=t.mdxType,n=t.originalType,o=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),u=h(a),s=r,m=u["".concat(o,".").concat(s)]||u[s]||_[s]||n;return a?i.createElement(m,l(l({ref:e},c),{},{components:a})):i.createElement(m,l({ref:e},c))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=a.length,o=new Array(n);o[0]=f;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[m]="string"==typeof t?t:r,o[1]=l;for(var c=2;c<n;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}f.displayName="MDXCreateElement"},17904:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var i=a(87462),r=(a(67294),a(3905));const n={id:"get_path_without_materialization"},o="get_path_without_materialization type",l={unversionedId:"api/bxl/get_path_without_materialization",id:"api/bxl/get_path_without_materialization",title:"get_path_without_materialization type",description:"get\\path\\without\\materialization.get\\path\\without\\materialization",source:"@site/../docs/api/bxl/get_path_without_materialization.generated.md",sourceDirName:"api/bxl",slug:"/api/bxl/get_path_without_materialization",permalink:"/docs/api/bxl/get_path_without_materialization",draft:!1,tags:[],version:"current",frontMatter:{id:"get_path_without_materialization"},sidebar:"manualSidebar",previous:{title:"fs type",permalink:"/docs/api/bxl/fs"},next:{title:"get_paths_without_materialization type",permalink:"/docs/api/bxl/get_paths_without_materialization"}},p={},c=[{value:"get_path_without_materialization.get_path_without_materialization",id:"get_path_without_materializationget_path_without_materialization",level:2}],u={toc:c};function h(t){let{components:e,...a}=t;return(0,r.mdx)("wrapper",(0,i.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"get_path_without_materialization-type"},(0,r.mdx)("inlineCode",{parentName:"h1"},"get_path_without_materialization")," type"),(0,r.mdx)("h2",{id:"get_path_without_materializationget_path_without_materialization"},"get","_","path","_","without","_","materialization.get","_","path","_","without","_","materialization"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'def get_path_without_materialization.get_path_without_materialization(\n    this: "artifact",\n    ctx: "bxl_ctx",\n    *,\n    abs: bool = False\n) -> str\n')),(0,r.mdx)("p",null,"The output path of a source or build artifact. Takes an optional boolean to print the absolute or relative path. Note that this method returns an artifact path without asking for the artifact to be materialized, (i.e. it may not actually exist on the disk yet)."),(0,r.mdx)("p",null,"This is a risky function to call because you may accidentally pass this path to further BXL actions\nthat expect the artifact to be materialized. If this happens, the BXL script will error out.\nIf you want the path without materialization for other uses that don\u2019t involve passing them into\nfurther actions, then it\u2019s safe."),(0,r.mdx)("p",null,"Sample usage:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_get_path_without_materialization(ctx):\n    owner = ctx.cquery().owner("cell//path/to/file")[0]\n    artifact = owner.get_source("cell//path/to/file", ctx)\n    source_artifact_project_rel_path = get_path_without_materialization(artifact, ctx)\n    ctx.output.print(source_artifact_project_rel_path) # Note this artifact is NOT ensured or materialized\n')))}h.isMDXComponent=!0}}]);