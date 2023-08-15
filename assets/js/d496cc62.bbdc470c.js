"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4679],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>l,MDXProvider:()=>s,mdx:()=>y,useMDXComponents:()=>d,withMDXComponents:()=>p});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){return function(t){var r=d(t.components);return n.createElement(e,o({},t,{components:r}))}},d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(r),s=a,f=p["".concat(i,".").concat(s)]||p[s]||m[s]||o;return r?n.createElement(f,u(u({ref:t},l),{},{components:r})):n.createElement(f,u({ref:t},l))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[f]="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},8219:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={id:"configured_attr"},i="configured_attr type",u={unversionedId:"api/bxl/configured_attr",id:"api/bxl/configured_attr",title:"configured_attr type",description:"Methods on configured target node's attributes.",source:"@site/../docs/api/bxl/configured_attr.generated.md",sourceDirName:"api/bxl",slug:"/api/bxl/configured_attr",permalink:"/docs/api/bxl/configured_attr",draft:!1,tags:[],version:"current",frontMatter:{id:"configured_attr"},sidebar:"manualSidebar",previous:{title:"coerced_attr type",permalink:"/docs/api/bxl/coerced_attr"},next:{title:"configured_sub_target type",permalink:"/docs/api/bxl/configured_sub_target"}},c={},l=[{value:"configured_attr.type",id:"configured_attrtype",level:2},{value:"configured_attr.value",id:"configured_attrvalue",level:2}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,a.mdx)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"configured_attr-type"},(0,a.mdx)("inlineCode",{parentName:"h1"},"configured_attr")," type"),(0,a.mdx)("p",null,"Methods on configured target node's attributes."),(0,a.mdx)("h2",{id:"configured_attrtype"},"configured","_","attr.type"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"configured_attr.type: str\n")),(0,a.mdx)("p",null,"Returns the type name of the attribute"),(0,a.mdx)("p",null,"Sample usage:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_type(ctx):\n    node = ctx.cquery().owner("bin/TARGETS")[0]\n    attrs = node.attrs_eager()\n    ctx.output.print(attrs.name.type)\n')),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"configured_attrvalue"},"configured","_","attr.value"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"def configured_attr.value()\n")),(0,a.mdx)("p",null,"Returns the value of this attribute. The value here is not fully resolved like in rules."),(0,a.mdx)("p",null,"Sample usage:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_value(ctx):\n    node = ctx.cquery().owner("bin/TARGETS")[0]\n    attrs = node.attrs_eager()\n    ctx.output.print(attrs.name.value())\n')))}d.isMDXComponent=!0}}]);