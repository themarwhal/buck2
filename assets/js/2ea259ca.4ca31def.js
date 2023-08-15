"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7884],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>h,useMDXComponents:()=>u,withMDXComponents:()=>d});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},a.apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=i.createContext({}),d=function(e){return function(n){var t=u(n.components);return i.createElement(e,a({},n,{components:t}))}},u=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return i.createElement(c.Provider,{value:n},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},b=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),p=o,m=d["".concat(r,".").concat(p)]||d[p]||f[p]||a;return t?i.createElement(m,l(l({ref:n},c),{},{components:t})):i.createElement(m,l({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=b;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<a;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}b.displayName="MDXCreateElement"},67649:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=t(87462),o=(t(67294),t(3905));const a={id:"offline_build_archives",title:"Offline build archives"},r=void 0,l={unversionedId:"users/advanced/offline_build_archives",id:"users/advanced/offline_build_archives",title:"Offline build archives",description:'Buck2 has the capability of producing so-called "offline build archives". These archives are Antlir OS images which contain every input necessary to build a buck target (or fbpkg.builder target), including:',source:"@site/../docs/users/advanced/offline_build_archives.md",sourceDirName:"users/advanced",slug:"/users/advanced/offline_build_archives",permalink:"/docs/users/advanced/offline_build_archives",draft:!1,tags:[],version:"current",frontMatter:{id:"offline_build_archives",title:"Offline build archives"}},s={},c=[{value:"How to build an image",id:"how-to-build-an-image",level:2},{value:"Building inside the image",id:"building-inside-the-image",level:2},{value:"Copy built package out of the container",id:"copy-built-package-out-of-the-container",level:2},{value:"Additional build modes",id:"additional-build-modes",level:2},{value:"Implementation details",id:"implementation-details",level:2}],d={toc:c};function u(e){let{components:n,...t}=e;return(0,o.mdx)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,'Buck2 has the capability of producing so-called "offline build archives". These archives are ',(0,o.mdx)("a",{parentName:"p",href:"https://www.internalfb.com/intern/staticdocs/antlir/"},"Antlir")," OS images which contain ",(0,o.mdx)("em",{parentName:"p"},"every")," input necessary to build a buck target (or ",(0,o.mdx)("a",{parentName:"p",href:"https://www.internalfb.com/intern/wiki/Fbpkg/fbpkg.builder/"},"fbpkg.builder")," target), including:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Source files"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://www.internalfb.com/intern/wiki/Gvfs/"},"gvfs")," artifacts"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://www.internalfb.com/intern/wiki/DotSlash/"},"Dotslash")," executables; these are prefetched and cached in the resulting OS image."),(0,o.mdx)("li",{parentName:"ul"},"Buckconfig files from inside and outside the repository")),(0,o.mdx)("h2",{id:"how-to-build-an-image"},"How to build an image"),(0,o.mdx)("p",null,"Offline build archives are primarily centered around producing OS images in which you can build an fbpkg in a fully-offline, low-Meta-dependency environment."),(0,o.mdx)("p",null,"In order to build an image, you need to add a new rule definition along side your ",(0,o.mdx)("inlineCode",{parentName:"p"},"fbpkg.builder")," target. Assume you have a service + ",(0,o.mdx)("inlineCode",{parentName:"p"},"fbpkg.builder")," definition like so:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-[python]"},'load("@fbcode_macros//build_defs:cpp_binary.bzl", "cpp_binary")\n\n# Import experimental fbpkg.builder using native buck2 rules\nload("//fbpkg:fbpkg.bzl", "fbpkg")\n\ncpp_binary(\n    name = "my_service",\n    srcs = [\n        "main.cpp",\n    ],\n    deps = [\n        "//some/dep:one",\n        "//another/dep:two",\n    ],\n)\n\nfbpkg.builder(\n    name = "my.service",\n    buck_opts = fbpkg.buck_opts(\n        mode = "opt-clang-thinlto",\n    ),\n    path_actions = {\n        "my_service": ":my_service",\n    },\n)\n')),(0,o.mdx)("p",null,"Add a new rule using the ",(0,o.mdx)("inlineCode",{parentName:"p"},"offline_builder")," rule type:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'fbpkg.offline_builder(\n    name = "my.service-offline",\n    fbpkg = ":my.service",\n)\n')),(0,o.mdx)("p",null,"The output of ",(0,o.mdx)("inlineCode",{parentName:"p"},"//:my.service-offline")," will be an Antlir container that itself can be packaged up in an fbpkg and shipped elsewhere."),(0,o.mdx)("h2",{id:"building-inside-the-image"},"Building inside the image"),(0,o.mdx)("p",null,"The OS image will contain all input files necessary to produce the desired output artifact(s) in a no-network, low-dependency environment."),(0,o.mdx)("p",null,"To test out a build on your devserver and ensure you ",(0,o.mdx)("em",{parentName:"p"},"can")," actually produce the output you expect, you can materialize the container in a separate location and enter with with ",(0,o.mdx)("inlineCode",{parentName:"p"},"systemd-nspawn"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-[bash]"},"# Use Antlir's special `=container` rule to generate the container locally.\n$ buck2 run //my/service:my.service-offline=container -- --snapshot-into ~/local/my_service_offline\n\n# Enter the container as the build user with no network, you will need root access\n$ sudo systemd-nspawn -D ~/local/my_service_offline --register=no --user facebook --private-network\n\n[facebook@my_service_offline ~]$ ls -l\ntotal 0\ndrwxr-xr-x 1 facebook users   16 Jul 20 10:13 dotslash_cache\ndrwxr-xr-x 1 facebook users 2142 Jul 20 10:28 fbsource\n")),(0,o.mdx)("p",null,"This drops you into the container as the ",(0,o.mdx)("inlineCode",{parentName:"p"},"facebook")," service user. This user has various settings and configurations configured on login for buck2 and the new ",(0,o.mdx)("inlineCode",{parentName:"p"},"fbpkg-build")," entrypoint to work offline by default with no extra flags or configuration required."),(0,o.mdx)("p",null,'There\'s a "checkout" of fbsource at ',(0,o.mdx)("inlineCode",{parentName:"p"},"/home/facebook")," (not a real source code repository, but enough to get builds working), as well as a cached dotslash directory with prefetched executables."),(0,o.mdx)("p",null,"Inside the fbsource repository are one or more shell scripts to make it easier to perform offline builds:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-[bash]"},'[facebook@my_service_offline fbsource]$ ls -l *.sh\n-rwxr-xr-x 1 facebook users 167 Jul 20 10:07 build_fbpkg_my_service.sh\n\n[facebook@my_service_offline fbsource]$ cat build_fbpkg_my_service.sh\n#!/bin/sh\n\nexec fbpkg-build --offline --build-local --no-publish fbcode//my/service:my.service\n\n[facebook@my_service_offline fbsource]$ ./build_fbpkg_my_service.sh\n2023-08-08T11:58:01.709968604-07:00  INFO registry_build_utils::build_utils: Using repo found at cwd: /home/facebook/fbsource\nBuck UI: https://www.internalfb.com/buck2/1dbe44a6-2089-46b5-b5fe-83ba82facf69\nJobs completed: 78265. Time elapsed: 50.2s.\nCache hits: 0%. Commands: 18 (cached: 0, remote: 0, local: 18)\nBUILD SUCCEEDED\n2023-08-08T18:59:00.958700Z  WARN buck2_client_ctx::cleanup_ctx: Async cleanup step \'sending invocation to Scribe\' took 3.535555792s\n{\n  "x86_64": "/home/facebook/fbsource/buck-out/v2/gen/fbcode/29146bce1651974e/path/to/my_service_offline/__my_service_offline__/tree"\n}\n')),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"NOTE: today, this only produces a tree of artifacts that represents ",(0,o.mdx)("strong",{parentName:"p"},"uncompressed")," fbpkg contents. In the future, this will be updated to produce a fully compressed fbpkg that can be handed off to tupperware. The script above will print out the location of the built fbpkg")),(0,o.mdx)("h2",{id:"copy-built-package-out-of-the-container"},"Copy built package out of the container"),(0,o.mdx)("p",null,"You can access the files inside the container, from your dev server, you can cp the generated fbpkg out as root. The path will be the image base path (the path you pass through --snapshot-into when built the image) + path inside container (the output of the build script), in our case it is shown below"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-[bash]"},"[yourunix@devvm4242.vll0 /]$ ls ~/local/my_service_offline/home/facebook/fbsource/buck-out/v2/gen/fbcode/29146bce1651974e/path/to/my_service_offline/__my_service_offline__/tree\nserver.par\n[yourunix@devvm4242.vll0 /]$ sudo cp ~/local/my_service_offline/home/facebook/fbsource/buck-out/v2/gen/fbcode/29146bce1651974e/path/to/my_service_offline/__my_service_offline__/tree/server.par /tmp/your_test_dir\n")),(0,o.mdx)("h2",{id:"additional-build-modes"},"Additional build modes"),(0,o.mdx)("p",null,"Iterating by building a full fbpkg can be slow, particularly if the service is built with very optimized but slow modes like ",(0,o.mdx)("inlineCode",{parentName:"p"},"opt-clang-thinlto"),". Instead, you can add additional modes in which we'll instrument a build and other inputs and configurations into the final container:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-[bash]"},'fbpkg.offline_builder(\n    name = "my.service-offline",\n    fbpkg = ":my.service",\n    additional_modes = [\n        "fbcode/mode/opt",\n        "fbcode/mode/dev",\n    ],\n)\n')),(0,o.mdx)("p",null,"This results in a new shell script at the root of the container fbsource repository, one for each mode:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-[bash]"},"[facebook@my_service_offline fbsource]$ ls -l *.sh\n-rwxr-xr-x 1 facebook users 167 Jul 20 10:07 build_fbpkg_my_service.sh\n-rwxr-xr-x 1 facebook users 123 Jul 20 10:07 build_fbpkg_my_service_targets_mode-opt.sh\n-rwxr-xr-x 1 facebook users 123 Jul 20 10:07 build_fbpkg_my_service_targets_mode-dev.sh\n\n[facebook@my_service_offline fbsource]$ cat build_my_service_targets_mode-opt.sh\n#!/bin/sh\n\nexec buck2 build @fbsource//fbcode/mode/opt fbcode//my/service:my_service\n")),(0,o.mdx)("p",null,"These shell scripts by default build all targets specified in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"fbpkg.builder")," target, but you can also invoke the ",(0,o.mdx)("inlineCode",{parentName:"p"},"buck2 build")," command accordingly."),(0,o.mdx)("h2",{id:"implementation-details"},"Implementation details"),(0,o.mdx)("p",null,"Several environment variables must be set to perform fully-offline builds. These are all set in user-level ",(0,o.mdx)("inlineCode",{parentName:"p"},".bash_profile")," scripts (which take effect on login):"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"BUCK_OFFLINE_BUILD")," must be set; this indicates to buck2 that it should only perform ",(0,o.mdx)("em",{parentName:"li"},"local execution")," and disable talking to the RE cache layer. Support is also built into ",(0,o.mdx)("inlineCode",{parentName:"li"},"fbpkg-build")," to use a fake fbpkg uuid and build token rather than allocating one from the fbpkg frontend service."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"DOTSLASH_CACHE")," is set to ",(0,o.mdx)("inlineCode",{parentName:"li"},"/home/facebook/dotslash_cache"),". This tells dotslash to look in this directory for prefetched dotslash executables.")),(0,o.mdx)("p",null,"There are also several buckconfigs that must be set to get buck2 working fully-offline:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"buck2.file_watcher = notify")," disables watchman; we don't need watchman during an offline build"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"buck2.use_network_action_output_cache = true")," tells buck2 to use precached action outputs from ",(0,o.mdx)("inlineCode",{parentName:"li"},"ctx.actions.download_file")," to e.g. perform a HEAD request to figure out if a file needs to be redownloaded during the build. These action outputs are cached in ",(0,o.mdx)("inlineCode",{parentName:"li"},"fbsource/buck-out/v2/offline-cache"),".")))}u.isMDXComponent=!0}}]);