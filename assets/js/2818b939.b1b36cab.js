"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1545],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>x,useMDXComponents:()=>d,withMDXComponents:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),m=function(e){return function(t){var r=d(t.components);return n.createElement(e,o({},t,{components:r}))}},d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=d(r),p=a,u=m["".concat(l,".").concat(p)]||m[p]||f[p]||o;return r?n.createElement(u,s(s({ref:t},c),{},{components:r})):n.createElement(u,s({ref:t},c))}));function x(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=v;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},64766:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={id:"request_for_comments",title:"Request for Comments"},l=void 0,s={unversionedId:"developers/request_for_comments",id:"developers/request_for_comments",title:"Request for Comments",description:"Following are Request for Comments (RFCs) at specific stages of the lifecycle.",source:"@site/../docs/developers/request_for_comments.md",sourceDirName:"developers",slug:"/developers/request_for_comments",permalink:"/docs/developers/request_for_comments",draft:!1,tags:[],version:"current",frontMatter:{id:"request_for_comments",title:"Request for Comments"},sidebar:"manualSidebar",previous:{title:"Value Representation",permalink:"/docs/developers/starlark/values"},next:{title:"Windows Cheat Sheet",permalink:"/docs/developers/windows_cheat_sheet"}},i={},c=[{value:"Drafts",id:"drafts",level:3},{value:"Accepted",id:"accepted",level:3},{value:"Implemented",id:"implemented",level:3}],m={toc:c};function d(e){let{components:t,...r}=e;return(0,a.mdx)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Following are Request for Comments (RFCs) at specific stages of the lifecycle."),(0,a.mdx)("h3",{id:"drafts"},"Drafts"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/rfcs/drafts/configuration-at-syntax"},"@configuration syntax")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/rfcs/drafts/bxl-actions"},"bxl actions and Build API")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/rfcs/drafts/digest-kinds"},"Digest Kinds")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/rfcs/attr-metadata"},"labels -> metadata attribute"))),(0,a.mdx)("h3",{id:"accepted"},"Accepted"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/rfcs/configured-alias"},"configured_alias")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/rfcs/bxl"},"Buck Extension Language (BXL)")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/rfcs/bxl-analysis"},"Bxl Support for performing analysis on targets")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/rfcs/package-local-values"},"Package-local values"))),(0,a.mdx)("h3",{id:"implemented"},"Implemented"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/rfcs/implemented/provider-collection-at"},"ProviderCollection[]"))))}d.isMDXComponent=!0}}]);