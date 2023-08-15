"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2417],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){return function(t){var n=c(t.components);return a.createElement(e,i({},t,{components:n}))}},c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},x=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,u=p["".concat(o,".").concat(m)]||p[m]||g[m]||i;return n?a.createElement(u,l(l({ref:t},d),{},{components:n})):a.createElement(u,l({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=x;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}x.displayName="MDXCreateElement"},61708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={id:"bxl_how_tos",title:"Common How-Tos"},o=void 0,l={unversionedId:"developers/bxl_how_tos",id:"developers/bxl_how_tos",title:"Common How-Tos",description:"Passing in and using CLI args",source:"@site/../docs/developers/bxl_common_how_tos.md",sourceDirName:"developers",slug:"/developers/bxl_how_tos",permalink:"/docs/developers/bxl_how_tos",draft:!1,tags:[],version:"current",frontMatter:{id:"bxl_how_tos",title:"Common How-Tos"},sidebar:"manualSidebar",previous:{title:"Getting Started",permalink:"/docs/developers/bxl_getting_started"},next:{title:"BXL Telemetry",permalink:"/docs/developers/bxl_telemetry"}},s={},d=[{value:"Passing in and using CLI args",id:"passing-in-and-using-cli-args",level:2},{value:"Running actions",id:"running-actions",level:2},{value:"Getting providers from an analysis",id:"getting-providers-from-an-analysis",level:2},{value:"Get a specific provider from an analysis",id:"get-a-specific-provider-from-an-analysis",level:2},{value:"Get a specific subtarget from an analysis",id:"get-a-specific-subtarget-from-an-analysis",level:2},{value:"Building a subtarget",id:"building-a-subtarget",level:2},{value:"Getting attributes or resolved attributes efficiently",id:"getting-attributes-or-resolved-attributes-efficiently",level:2},{value:"Inspecting a struct",id:"inspecting-a-struct",level:2},{value:"Set addition/subtraction on a <code>target_set</code>",id:"set-additionsubtraction-on-a-target_set",level:2},{value:"Profiling, Testing, and Debugging a BXL script",id:"profiling-testing-and-debugging-a-bxl-script",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h2",{id:"passing-in-and-using-cli-args"},"Passing in and using CLI args"),(0,r.mdx)("p",null,"A BXL function can accept a ",(0,r.mdx)("inlineCode",{parentName:"p"},"cli_args")," attribute where args names and types are specified to use within your script, as shown in the following example:"),(0,r.mdx)("p",null,"Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'def _impl_example(ctx):\n    # ...\n    pass\n\nexample = bxl_main(\n    impl = _impl_example,\n    cli_args = {\n        # cli args that you want to receive from the command line\n        "bool_arg": cli_args.bool(),\n        "list_type": cli_args.list(cli_args.int()),\n        "optional": cli_args.option(cli_args.string()),\n        "target": cli_args.target_label(),\n    },\n)\n')),(0,r.mdx)("p",null,"On the command line, you can invoke the arguments as follows:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-sh"},"buck2 bxl //myscript.bxl:example -- --bool_arg true --list_type 1 --list_type 2 --target //foo:bar\n")),(0,r.mdx)("p",null,"For BXL functions, to read the arguments, use them as attributes from the ",(0,r.mdx)("inlineCode",{parentName:"p"},"cli_args")," attribute on the BXL ",(0,r.mdx)("inlineCode",{parentName:"p"},"ctx")," object, as follows:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def _impl_example(ctx):\n    my_bool_arg = ctx.cli_args.bool_arg\n")),(0,r.mdx)("h2",{id:"running-actions"},"Running actions"),(0,r.mdx)("p",null,"You can create actions within BXL via the ",(0,r.mdx)("inlineCode",{parentName:"p"},"actions_factory"),". This is called once globally then used on demand:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'def _impl_example(ctx):\n    actions = ctx.bxl_actions().actions # call once, reuse wherever needed\n    output = actions.write("my_output", "out")\n')),(0,r.mdx)("p",null,"You can specify the execution platform resolution by setting named parameters when instantiating ",(0,r.mdx)("inlineCode",{parentName:"p"},"bxl_actions"),":"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"exec_deps")," - These are dependencies you wish to access as executables for creating the action. This is usually the same set of targets one would pass to rule's ",(0,r.mdx)("inlineCode",{parentName:"li"},"attr.exec_dep"),". Accepts a list of strings, subtarget labels, target labels, or target nodes."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"toolchains")," - The set of toolchains needed for the actions you intend to create. Accepts a list of strings, subtarget labels, target labels, or target nodes."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"target_platform")," - The intended target platform for your toolchains. Accepts a string or target label."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"exec_compatible_with")," - Explicit list of configuration nodes (like platforms or constraints) that these actions are compatible with. This is the ",(0,r.mdx)("inlineCode",{parentName:"li"},"exec_compatible_with")," attribute of a target. Accepts a list of strings, target labels, or target nodes.")),(0,r.mdx)("p",null,"If you specify ",(0,r.mdx)("inlineCode",{parentName:"p"},"exec_deps")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"toolchains"),", you can access the resolved ",(0,r.mdx)("inlineCode",{parentName:"p"},"dependency")," objects on the ",(0,r.mdx)("inlineCode",{parentName:"p"},"bxl_actions")," object. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"bxl_actions")," object will have ",(0,r.mdx)("inlineCode",{parentName:"p"},"exec_deps")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"toolchains")," attributes, which are ",(0,r.mdx)("inlineCode",{parentName:"p"},"dict"),"s where the keys are the unconfigured subtarget labels, and the values are the configured/resolved ",(0,r.mdx)("inlineCode",{parentName:"p"},"dependency")," objects."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'def _impl_example(ctx):\n    my_exec_dep = ctx.unconfigured_sub_targets("foo//bar:baz") # has some provider that you would use in the action\n    bxl_actions = ctx.bxl_actions(exec_deps = [my_exec_dep]) # call once, reuse wherever needed\n    output = bxl_actions.actions.run(\n        [\n            "python3",\n            bxl_actions.exec_deps[my_exec_dep][RunInfo], # access resolved exec_deps on the `bxl_actions`\n            out.as_output(),\n        ],\n        category = "command",\n        local_only = True,\n    )\n    ctx.output.ensure(output)\n')),(0,r.mdx)("h2",{id:"getting-providers-from-an-analysis"},"Getting providers from an analysis"),(0,r.mdx)("p",null,"After calling ",(0,r.mdx)("inlineCode",{parentName:"p"},"analysis()"),", you can get the providers collection from ",(0,r.mdx)("inlineCode",{parentName:"p"},"providers()"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def _impl_example(ctx):\n    my_providers = ctx.analysis(my_target).providers()\n")),(0,r.mdx)("h2",{id:"get-a-specific-provider-from-an-analysis"},"Get a specific provider from an analysis"),(0,r.mdx)("p",null,"After calling ",(0,r.mdx)("inlineCode",{parentName:"p"},"analysis()"),", you can also get the providers collection from ",(0,r.mdx)("inlineCode",{parentName:"p"},"providers()")," then grab whatever specific provider you need:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def _impl_example(ctx):\n    default_info = ctx.analysis(my_target).providers()[DefaultInfo]\n    ctx.output.print(default_info)\n")),(0,r.mdx)("h2",{id:"get-a-specific-subtarget-from-an-analysis"},"Get a specific subtarget from an analysis"),(0,r.mdx)("p",null,"Once you have a provider, you can get its subtargets by using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"sub_targets")," attribute on the struct to get a dict of provider labels to provider collections:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def _impl_example(ctx):\n    subtarget = ctx.analysis(my_target).providers()[DefaultInfo].sub_targets[\u201cmy_subtarget\u201d]\n    ctx.output.print(subtarget)\n")),(0,r.mdx)("h2",{id:"building-a-subtarget"},"Building a subtarget"),(0,r.mdx)("p",null,"You can use ",(0,r.mdx)("inlineCode",{parentName:"p"},"analysis()")," to get a specific subtarget from an analysis, or you can pass in the subtarget literal directly into ",(0,r.mdx)("inlineCode",{parentName:"p"},"ctx.build()"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'def _impl_example(ctx):\n    outputs = ctx.build("cell//path/to/my:target[my_subtarget]")\n    ctx.output.ensure_multiple(outputs)\n')),(0,r.mdx)("h2",{id:"getting-attributes-or-resolved-attributes-efficiently"},"Getting attributes or resolved attributes efficiently"),(0,r.mdx)("p",null,"If you need to use all of the attrs/resolved_attrs, then initializing the eager variant once would be best. If you only need a few of the attrs, then initializing the lazy variant is better. There\u2019s not really a hard line, it depends on the target node, and which attrs you are looking for. If performance is key to your BXL script, the best way to determine this is to use the BXL profiler."),(0,r.mdx)("p",null,"Regardless, if you use eager or lazy versions of getting attributes, you should cache the attrs object:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def _impl_example(ctx):\n    lazy = ctx.attrs_lazy() # call once and reuse wherever is necessary\n    eager = ctx.attrs_eager() # call once and reuse wherever is necessary\n")),(0,r.mdx)("h2",{id:"inspecting-a-struct"},"Inspecting a struct"),(0,r.mdx)("p",null,"You can use ",(0,r.mdx)("inlineCode",{parentName:"p"},"dir(my_struct)")," to inspect a struct. You can also use ",(0,r.mdx)("inlineCode",{parentName:"p"},"getattr(my_struct, \u201cmy_attr\u201d)")," to grab individual attributes, which is equivalent to ",(0,r.mdx)("inlineCode",{parentName:"p"},"my_struct.my_attr"),"."),(0,r.mdx)("p",null,"These are available as part of the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/google/skylark/blob/a0e5de7e63b47e716cca7226662a4c95d47bf873/doc/spec.md#dir"},"Starlark language spec"),"."),(0,r.mdx)("h2",{id:"set-additionsubtraction-on-a-target_set"},"Set addition/subtraction on a ",(0,r.mdx)("inlineCode",{parentName:"h2"},"target_set")),(0,r.mdx)("p",null,"There are a few BXL actions that return a ",(0,r.mdx)("inlineCode",{parentName:"p"},"target_set")," (such as a cquery ",(0,r.mdx)("inlineCode",{parentName:"p"},"eval()"),"). The ",(0,r.mdx)("inlineCode",{parentName:"p"},"target_set")," supports set subtraction and addition (you can use ",(0,r.mdx)("inlineCode",{parentName:"p"},"-")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"+")," directly in Starlark)."),(0,r.mdx)("h2",{id:"profiling-testing-and-debugging-a-bxl-script"},"Profiling, Testing, and Debugging a BXL script"),(0,r.mdx)("p",null,"You can use ",(0,r.mdx)("inlineCode",{parentName:"p"},"buck2 bxl profiler"),", with various measurements, to determine where the script is least efficient."),(0,r.mdx)("p",null,"To time individual pieces of the script, you can use BXL\u2019s timestamp methods:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def _impl_example(_ctx):\n    start = now() # call once and reuse wherever is necessary\n    # do something time intensive here\n    end1 = start.elapsed_millis()\n    # do something else time intensive here\n    end2 = start.elapsed_millis()\n")),(0,r.mdx)("p",null,"BXL does not have a debugger available nor a robust testing framework for mocking."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Debug")," - the main method to debug a BXL script is with print statements (",(0,r.mdx)("inlineCode",{parentName:"li"},"print()")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"ctx.output.print()"),")."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Test")," - the main method to test a BXL script is to actually invoke it with required inputs then verify the outputs.")))}c.isMDXComponent=!0}}]);