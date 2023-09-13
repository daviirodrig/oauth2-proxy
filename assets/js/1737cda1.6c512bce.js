"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5144],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,d=s["".concat(p,".").concat(m)]||s[m]||f[m]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3501:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"installation",title:"Installation",slug:"/"},p=void 0,u={unversionedId:"installation",id:"version-7.3.x/installation",title:"Installation",description:"1.  Choose how to deploy:",source:"@site/versioned_docs/version-7.3.x/installation.md",sourceDirName:".",slug:"/",permalink:"/oauth2-proxy/docs/7.3.x/",draft:!1,editUrl:"https://github.com/oauth2-proxy/oauth2-proxy/edit/master/docs/versioned_docs/version-7.3.x/installation.md",tags:[],version:"7.3.x",frontMatter:{id:"installation",title:"Installation",slug:"/"},sidebar:"docs",next:{title:"Behaviour",permalink:"/oauth2-proxy/docs/7.3.x/behaviour"}},c={},s=[],f={toc:s},m="wrapper";function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(m,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose how to deploy:"),(0,a.kt)("p",{parentName:"li"},"a. Download ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oauth2-proxy/oauth2-proxy/releases"},"Prebuilt Binary")," (current release is ",(0,a.kt)("inlineCode",{parentName:"p"},"v7.3.0"),")"),(0,a.kt)("p",{parentName:"li"},"b. Build with ",(0,a.kt)("inlineCode",{parentName:"p"},"$ go get github.com/oauth2-proxy/oauth2-proxy/v7")," which will put the binary in ",(0,a.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin")),(0,a.kt)("p",{parentName:"li"},"c. Using the prebuilt docker image ",(0,a.kt)("a",{parentName:"p",href:"https://quay.io/oauth2-proxy/oauth2-proxy"},"quay.io/oauth2-proxy/oauth2-proxy")," (AMD64, ARMv6 and ARM64 tags available)"),(0,a.kt)("p",{parentName:"li"},"d. Using a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oauth2-proxy/manifests"},"Kubernetes manifest")," (Helm)"))),(0,a.kt)("p",null,"Prebuilt binaries can be validated by extracting the file and verifying it against the ",(0,a.kt)("inlineCode",{parentName:"p"},"sha256sum.txt")," checksum file provided for each release starting with version ",(0,a.kt)("inlineCode",{parentName:"p"},"v3.0.0"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ sha256sum -c sha256sum.txt\noauth2-proxy-x.y.z.linux-amd64: OK\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/oauth2-proxy/docs/7.3.x/configuration/oauth_provider"},"Select a Provider and Register an OAuth Application with a Provider")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/oauth2-proxy/docs/7.3.x/configuration/overview"},"Configure OAuth2 Proxy using config file, command line options, or environment variables")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/oauth2-proxy/docs/7.3.x/configuration/tls"},"Configure SSL or Deploy behind a SSL endpoint")," (example provided for Nginx)")))}d.isMDXComponent=!0}}]);