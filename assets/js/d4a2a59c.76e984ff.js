"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2260],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),h=o,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2033:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"endpoints",title:"Endpoints"},l=void 0,u={unversionedId:"features/endpoints",id:"version-7.3.x/features/endpoints",title:"Endpoints",description:"OAuth2 Proxy responds directly to the following endpoints. All other endpoints will be proxied upstream when authenticated. The /oauth2 prefix can be changed with the --proxy-prefix config variable.",source:"@site/versioned_docs/version-7.3.x/features/endpoints.md",sourceDirName:"features",slug:"/features/endpoints",permalink:"/oauth2-proxy/docs/7.3.x/features/endpoints",draft:!1,editUrl:"https://github.com/oauth2-proxy/oauth2-proxy/edit/master/docs/versioned_docs/version-7.3.x/features/endpoints.md",tags:[],version:"7.3.x",frontMatter:{id:"endpoints",title:"Endpoints"},sidebar:"docs",previous:{title:"Alpha Configuration",permalink:"/oauth2-proxy/docs/7.3.x/configuration/alpha-config"},next:{title:"Security",permalink:"/oauth2-proxy/docs/7.3.x/community/security"}},p={},c=[{value:"Sign out",id:"sign-out",level:3},{value:"Auth",id:"auth",level:3}],d={toc:c},h="wrapper";function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)(h,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"OAuth2 Proxy responds directly to the following endpoints. All other endpoints will be proxied upstream when authenticated. The ",(0,i.kt)("inlineCode",{parentName:"p"},"/oauth2")," prefix can be changed with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--proxy-prefix")," config variable."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"/robots.txt - returns a 200 OK response that disallows all User-agents from all paths; see ",(0,i.kt)("a",{parentName:"li",href:"http://www.robotstxt.org/"},"robotstxt.org")," for more info"),(0,i.kt)("li",{parentName:"ul"},"/ping - returns a 200 OK response, which is intended for use with health checks"),(0,i.kt)("li",{parentName:"ul"},"/metrics - Metrics endpoint for Prometheus to scrape, serve on the address specified by ",(0,i.kt)("inlineCode",{parentName:"li"},"--metrics-address"),", disabled by default"),(0,i.kt)("li",{parentName:"ul"},"/oauth2/sign_in - the login page, which also doubles as a sign out page (it clears cookies)"),(0,i.kt)("li",{parentName:"ul"},"/oauth2/sign_out - this URL is used to clear the session cookie"),(0,i.kt)("li",{parentName:"ul"},"/oauth2/start - a URL that will redirect to start the OAuth cycle"),(0,i.kt)("li",{parentName:"ul"},"/oauth2/callback - the URL used at the end of the OAuth cycle. The oauth app will be configured with this as the callback url."),(0,i.kt)("li",{parentName:"ul"},"/oauth2/userinfo - the URL is used to return user's email from the session in JSON format."),(0,i.kt)("li",{parentName:"ul"},"/oauth2/auth - only returns a 202 Accepted response or a 401 Unauthorized response; for use with the ",(0,i.kt)("a",{parentName:"li",href:"/oauth2-proxy/docs/7.3.x/configuration/overview#configuring-for-use-with-the-nginx-auth_request-directive"},"Nginx ",(0,i.kt)("inlineCode",{parentName:"a"},"auth_request")," directive"))),(0,i.kt)("h3",{id:"sign-out"},"Sign out"),(0,i.kt)("p",null,"To sign the user out, redirect them to ",(0,i.kt)("inlineCode",{parentName:"p"},"/oauth2/sign_out"),". This endpoint only removes oauth2-proxy's own cookies, i.e. the user is still logged in with the authentication provider and may automatically re-login when accessing the application again. You will also need to redirect the user to the authentication provider's sign out page afterwards using the ",(0,i.kt)("inlineCode",{parentName:"p"},"rd")," query parameter, i.e. redirect the user to something like (notice the url-encoding!):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/oauth2/sign_out?rd=https%3A%2F%2Fmy-oidc-provider.example.com%2Fsign_out_page\n")),(0,i.kt)("p",null,"Alternatively, include the redirect URL in the ",(0,i.kt)("inlineCode",{parentName:"p"},"X-Auth-Request-Redirect")," header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GET /oauth2/sign_out HTTP/1.1\nX-Auth-Request-Redirect: https://my-oidc-provider/sign_out_page\n...\n")),(0,i.kt)("p",null,'(The "sign_out_page" should be the ',(0,i.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-session-1_0.html#rfc.section.2.1"},(0,i.kt)("inlineCode",{parentName:"a"},"end_session_endpoint"))," from ",(0,i.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfig"},"the metadata")," if your OIDC provider supports Session Management and Discovery.)"),(0,i.kt)("p",null,"BEWARE that the domain you want to redirect to (",(0,i.kt)("inlineCode",{parentName:"p"},"my-oidc-provider.example.com")," in the example) must be added to the ",(0,i.kt)("a",{parentName:"p",href:"../configuration/overview"},(0,i.kt)("inlineCode",{parentName:"a"},"--whitelist-domain"))," configuration option otherwise the redirect will be ignored."),(0,i.kt)("h3",{id:"auth"},"Auth"),(0,i.kt)("p",null,"This endpoint returns 202 Accepted response or a 401 Unauthorized response."),(0,i.kt)("p",null,"It can be configured using the following query parameters query parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"allowed_groups"),": comma separated list of allowed groups"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"allowed_email_domains"),": comma separated list of allowed email domains"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"allowed_emails"),": comma separated list of allowed emails")))}m.isMDXComponent=!0}}]);