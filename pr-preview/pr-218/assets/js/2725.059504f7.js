"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2725],{20830:function(e,t,n){n.d(t,{W:function(){return a}});var r=n(67294);function a(){return r.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},39960:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(63366),a=n(67294),o=n(73727),c=n(52263),l=n(13919),i=n(10412),u=(0,a.createContext)({collectLink:function(){}}),s=n(44996),m=n(18780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var f=function(e){var t,n,f=e.isNavLink,h=e.to,v=e.href,g=e.activeClassName,E=e.isActive,b=e["data-noBrokenLinkCheck"],k=e.autoAddBaseUrl,p=void 0===k||k,C=(0,r.Z)(e,d),y=(0,c.Z)().siteConfig,w=y.trailingSlash,Z=y.baseUrl,S=(0,s.C)().withBaseUrl,L=(0,a.useContext)(u),T=h||v,N=(0,l.Z)(T),_=null==T?void 0:T.replace("pathname://",""),I=void 0!==_?(n=_,p&&function(e){return e.startsWith("/")}(n)?S(n):n):void 0;I&&N&&(I=(0,m.applyTrailingSlash)(I,{trailingSlash:w,baseUrl:Z}));var O=(0,a.useRef)(!1),U=f?o.OL:o.rU,B=i.default.canUseIntersectionObserver,P=(0,a.useRef)();(0,a.useEffect)((function(){return!B&&N&&null!=I&&window.docusaurus.prefetch(I),function(){B&&P.current&&P.current.disconnect()}}),[P,I,B,N]);var M=null!==(t=null==I?void 0:I.startsWith("#"))&&void 0!==t&&t,x=!I||!N||M;return I&&N&&!M&&!b&&L.collectLink(I),x?a.createElement("a",Object.assign({href:I},T&&!N&&{target:"_blank",rel:"noopener noreferrer"},C)):a.createElement(U,Object.assign({},C,{onMouseEnter:function(){O.current||null==I||(window.docusaurus.preload(I),O.current=!0)},innerRef:function(e){var t,n;B&&e&&N&&(t=e,n=function(){null!=I&&window.docusaurus.prefetch(I)},P.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(P.current.unobserve(t),P.current.disconnect(),n())}))})),P.current.observe(t))},to:I||""},f&&{isActive:E,activeClassName:g}))}},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{Z:function(){return a},b:function(){return r}})},44996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return c}});var r=n(52263),a=n(13919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,c=o.forcePrependBaseUrl,l=void 0!==c&&c,i=o.absolute,u=void 0!==i&&i;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(l)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+s:s}(o,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},51588:function(e,t,n){n.d(t,{Z:function(){return I}});var r=n(87462),a=n(63366),o=n(67294),c=n(73935),l=n(52263),i=n(76775),u=n(44996),s=n(39960),m=n(12859),d=n(2644),f=n(32822);function h(){return o.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},o.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var v=n(20830),g=["translations"];function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var k="Ctrl";var p=o.forwardRef((function(e,t){var n=e.translations,r=void 0===n?{}:n,a=b(e,g),c=r.buttonText,l=void 0===c?"Search":c,i=r.buttonAriaLabel,u=void 0===i?"Search":i,s=(0,o.useMemo)((function(){return"undefined"!=typeof navigator?/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":k:null}),[]);return o.createElement("button",E({type:"button",className:"DocSearch DocSearch-Button","aria-label":u},a,{ref:t}),o.createElement("span",{className:"DocSearch-Button-Container"},o.createElement(v.W,null),o.createElement("span",{className:"DocSearch-Button-Placeholder"},l)),o.createElement("span",{className:"DocSearch-Button-Keys"},null!==s&&o.createElement(o.Fragment,null,o.createElement("kbd",{className:"DocSearch-Button-Key"},s===k?o.createElement(h,null):s),o.createElement("kbd",{className:"DocSearch-Button-Key"},"K"))))})),C=n(96730);function y(){var e=function(){var e=(0,l.Z)().i18n,t=(0,C._r)(),n=(0,C.WS)(),r=(0,f.Oh)(),a=[f.HX].concat(Object.keys(t).map((function(e){var a,o,c=(null==n||null==(a=n.activePlugin)?void 0:a.pluginId)===e?n.activeVersion:void 0,l=r[e],i=t[e].versions.find((function(e){return e.isLast})),u=null!=(o=null!=c?c:l)?o:i;return(0,f.os)(e,u.name)})));return{locale:e.currentLocale,tags:a}}();return["language:"+e.locale,e.tags.map((function(e){return"docusaurus_tag:"+e}))]}var w=n(95999),Z="searchBox_xXbB",S=["contextualSearch","externalUrlRegex"],L=null;function T(e){var t=e.hit,n=e.children;return o.createElement(s.Z,{to:t.url},n)}function N(e){var t=e.state,n=e.onClose,r=(0,d.Z)().generateSearchPageLink;return o.createElement(s.Z,{to:r(t.query),onClick:n},"See all ",t.context.nbHits," results")}function _(e){var t,s,d=e.contextualSearch,h=e.externalUrlRegex,v=(0,a.Z)(e,S),g=(0,l.Z)().siteMetadata,E=y(),b=null!=(t=null==(s=v.searchParameters)?void 0:s.facetFilters)?t:[],k=d?[].concat(E,b):b,C=Object.assign({},v.searchParameters,{facetFilters:k}),_=(0,u.C)().withBaseUrl,I=(0,i.k6)(),O=(0,o.useRef)(null),U=(0,o.useRef)(null),B=(0,o.useState)(!1),P=B[0],M=B[1],x=(0,o.useState)(null),R=x[0],A=x[1],D=(0,o.useCallback)((function(){return L?Promise.resolve():Promise.all([n.e(6780).then(n.bind(n,76780)),Promise.all([n.e(532),n.e(6945)]).then(n.bind(n,46945)),Promise.all([n.e(532),n.e(5040)]).then(n.bind(n,55040))]).then((function(e){var t=e[0].DocSearchModal;L=t}))}),[]),W=(0,o.useCallback)((function(){D().then((function(){O.current=document.createElement("div"),document.body.insertBefore(O.current,document.body.firstChild),M(!0)}))}),[D,M]),F=(0,o.useCallback)((function(){M(!1),O.current.remove()}),[M]),j=(0,o.useCallback)((function(e){D().then((function(){M(!0),A(e.key)}))}),[D,M,A]),q=(0,o.useRef)({navigate:function(e){var t=e.itemUrl;(0,f.Fx)(h,t)?window.location.href=t:I.push(t)}}).current,z=(0,o.useRef)((function(e){return e.map((function(e){if((0,f.Fx)(h,e.url))return e;var t=new URL(e.url);return Object.assign({},e,{url:_(""+t.pathname+t.hash)})}))})).current,H=(0,o.useMemo)((function(){return function(e){return o.createElement(N,(0,r.Z)({},e,{onClose:F}))}}),[F]),K=(0,o.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",g.docusaurusVersion),e}),[g.docusaurusVersion]);!function(e){var t=e.isOpen,n=e.onOpen,r=e.onClose,a=e.onInput,c=e.searchButtonRef;o.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?r():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),c&&c.current===document.activeElement&&a&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&a(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,r,a,c])}({isOpen:P,onOpen:W,onClose:F,onInput:j,searchButtonRef:U});var V=(0,w.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return o.createElement(o.Fragment,null,o.createElement(m.Z,null,o.createElement("link",{rel:"preconnect",href:"https://"+v.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),o.createElement("div",{className:Z},o.createElement(p,{onTouchStart:D,onFocus:D,onMouseOver:D,onClick:W,ref:U,translations:{buttonText:V,buttonAriaLabel:V}})),P&&(0,c.createPortal)(o.createElement(L,(0,r.Z)({onClose:F,initialScrollY:window.scrollY,initialQuery:R,navigator:q,transformItems:z,hitComponent:T,resultsFooterComponent:H,transformSearchClient:K},v,{searchParameters:C})),O.current))}var I=function(){var e=(0,l.Z)().siteConfig;return o.createElement(_,e.themeConfig.algolia)}},2644:function(e,t,n){var r=n(76775),a=n(52263),o=n(67294);t.Z=function(){var e=(0,r.k6)(),t=(0,a.Z)().siteConfig.baseUrl,n=(0,o.useState)(""),c=n[0],l=n[1];return(0,o.useEffect)((function(){var e,t=null!=(e=new URLSearchParams(window.location.search).get("q"))?e:"";l(t)}),[]),{searchQuery:c,setSearchQuery:(0,o.useCallback)((function(t){var n=new URLSearchParams(window.location.search);t?n.set("q",t):n.delete("q"),e.replace({search:n.toString()}),l(t)}),[e]),generateSearchPageLink:(0,o.useCallback)((function(e){return t+"search?q="+encodeURIComponent(e)}),[t])}}},23264:function(e,t,n){var r=n(87462),a=n(63366),o=n(67294),c=["width","height"];t.Z=function(e){var t=e.width,n=void 0===t?20:t,l=e.height,i=void 0===l?20:l,u=(0,a.Z)(e,c);return o.createElement("svg",(0,r.Z)({viewBox:"0 0 20 20",width:n,height:i,"aria-hidden":"true"},u),o.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))}},97518:function(e,t,n){n.d(t,{Z:function(){return H}});var r=n(67294),a=n(86010),o=n(76775),c=n(95999),l=n(32822),i="skipToContent_1oUP";function u(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var s=function(){var e=(0,r.useRef)(null),t=(0,o.k6)().action;return(0,l.SL)((function(n){var r=n.location;e.current&&!r.hash&&"PUSH"===t&&u(e.current)})),r.createElement("div",{ref:e},r.createElement("a",{href:"#",className:i,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&u(t)}},r.createElement(c.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m=n(87462),d=n(63366),f=["width","height","color","strokeWidth","className"];function h(e){var t=e.width,n=void 0===t?21:t,a=e.height,o=void 0===a?21:a,c=e.color,l=void 0===c?"currentColor":c,i=e.strokeWidth,u=void 0===i?1.2:i,s=(e.className,(0,d.Z)(e,f));return r.createElement("svg",(0,m.Z)({viewBox:"0 0 15 15",width:n,height:o},s),r.createElement("g",{stroke:l,strokeWidth:u},r.createElement("path",{d:"M.75.75l13.5 13.5M14.25.75L.75 14.25"})))}var v="announcementBar_3WsW",g="announcementBarPlaceholder_2m9F",E="announcementBarClose_38nx",b="announcementBarContent_3EUC";var k=function(){var e=(0,l.nT)(),t=e.isActive,n=e.close,o=(0,l.LU)().announcementBar;if(!t)return null;var i=o.content,u=o.backgroundColor,s=o.textColor,m=o.isCloseable;return r.createElement("div",{className:v,style:{backgroundColor:u,color:s},role:"banner"},m&&r.createElement("div",{className:g}),r.createElement("div",{className:b,dangerouslySetInnerHTML:{__html:i}}),m?r.createElement("button",{type:"button",className:(0,a.Z)("clean-btn close",E),onClick:n,"aria-label":(0,c.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.createElement(h,{width:14,height:14,strokeWidth:3.1})):null)},p=n(12172),C=n(82838),y=n(10412),w=(0,l.WA)("theme"),Z="light",S="dark",L=function(e){return e===S?S:Z},T=function(e){(0,l.WA)("theme").set(L(e))},N=function(){var e=(0,l.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,a=e.respectPrefersColorScheme,o=(0,r.useState)(function(e){return y.default.canUseDOM?L(document.documentElement.getAttribute("data-theme")):L(e)}(t)),c=o[0],i=o[1],u=(0,r.useCallback)((function(){i(Z),T(Z)}),[]),s=(0,r.useCallback)((function(){i(S),T(S)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",L(c))}),[c]),(0,r.useEffect)((function(){if(!n)try{var e=w.get();null!==e&&i(L(e))}catch(t){console.error(t)}}),[n,i]),(0,r.useEffect)((function(){n&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;i(t?S:Z)}))}),[n,a]),{isDarkTheme:c===S,setLightTheme:u,setDarkTheme:s}},_=n(82924);var I=function(e){var t=N(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return r.createElement(_.Z.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:o}},e.children)},O="docusaurus.tab.",U=function(){var e=(0,r.useState)({}),t=e[0],n=e[1],a=(0,r.useCallback)((function(e,t){(0,l.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{var e={};(0,l._f)().forEach((function(t){if(t.startsWith(O)){var n=t.substring(O.length);e[n]=(0,l.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),a(e,t)}}},B=n(79443);var P=function(e){var t=U(),n=t.tabGroupChoices,a=t.setTabGroupChoices;return r.createElement(B.Z.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a}},e.children)};function M(e){var t=e.children;return r.createElement(I,null,r.createElement(l.pl,null,r.createElement(P,null,r.createElement(l.OC,null,r.createElement(l.L5,null,r.createElement(l.Cn,null,t))))))}var x=n(12859),R=n(52263),A=n(44996);function D(e){var t=e.locale,n=e.version,a=e.tag,o=t;return r.createElement(x.Z,null,o&&r.createElement("meta",{name:"docsearch:language",content:o}),n&&r.createElement("meta",{name:"docsearch:version",content:n}),a&&r.createElement("meta",{name:"docsearch:docusaurus_tag",content:a}))}var W=n(41217);function F(){var e=(0,R.Z)().i18n,t=e.defaultLocale,n=e.locales,a=(0,l.l5)();return r.createElement(x.Z,null,n.map((function(e){return r.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.createElement("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function j(e){var t=e.permalink,n=(0,R.Z)().siteConfig.url,a=function(){var e=(0,R.Z)().siteConfig.url,t=(0,o.TH)().pathname;return e+(0,A.Z)(t)}(),c=t?""+n+t:a;return r.createElement(x.Z,null,r.createElement("meta",{property:"og:url",content:c}),r.createElement("link",{rel:"canonical",href:c}))}function q(e){var t=(0,R.Z)(),n=t.siteConfig.favicon,a=t.i18n,o=a.currentLocale,c=a.localeConfigs,i=(0,l.LU)(),u=i.metadatas,s=i.image,d=e.title,f=e.description,h=e.image,v=e.keywords,g=e.searchMetadatas,E=(0,A.Z)(n),b=(0,l.pe)(d),k=o,p=c[o].direction;return r.createElement(r.Fragment,null,r.createElement(x.Z,null,r.createElement("html",{lang:k,dir:p}),n&&r.createElement("link",{rel:"shortcut icon",href:E}),r.createElement("title",null,b),r.createElement("meta",{property:"og:title",content:b}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),s&&r.createElement(W.Z,{image:s}),h&&r.createElement(W.Z,{image:h}),r.createElement(W.Z,{description:f,keywords:v}),r.createElement(j,null),r.createElement(F,null),r.createElement(D,(0,m.Z)({tag:l.HX,locale:o},g)),r.createElement(x.Z,null,u.map((function(e,t){return r.createElement("meta",(0,m.Z)({key:"metadata_"+t},e))}))))}var z=function(){(0,r.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var H=function(e){var t=e.children,n=e.noFooter,o=e.wrapperClassName,c=e.pageClassName;return z(),r.createElement(M,null,r.createElement(q,e),r.createElement(s,null),r.createElement(k,null),r.createElement(p.Z,null),r.createElement("div",{className:(0,a.Z)(l.kM.wrapper.main,o,c)},t),!n&&r.createElement(C.Z,null))}},55537:function(e,t,n){var r=n(87462),a=n(63366),o=n(67294),c=n(39960),l=n(89750),i=n(44996),u=n(52263),s=n(32822),m=["imageClassName","titleClassName"];t.Z=function(e){var t=(0,u.Z)().siteConfig.title,n=(0,s.LU)().navbar,d=n.title,f=n.logo,h=void 0===f?{src:""}:f,v=e.imageClassName,g=e.titleClassName,E=(0,a.Z)(e,m),b=(0,i.Z)(h.href||"/"),k={light:(0,i.Z)(h.src),dark:(0,i.Z)(h.srcDark||h.src)},p=o.createElement(l.Z,{sources:k,height:h.height,width:h.width,alt:h.alt||d||t});return o.createElement(c.Z,(0,r.Z)({to:b},E,h.target&&{target:h.target}),h.src&&(v?o.createElement("div",{className:v},p):o.createElement(o.Fragment,null,p)),null!=d&&o.createElement("b",{className:g},d))}},41217:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(67294),a=n(12859),o=n(32822),c=n(44996);function l(e){var t=e.title,n=e.description,l=e.keywords,i=e.image,u=e.children,s=(0,o.pe)(t),m=(0,c.C)().withBaseUrl,d=i?m(i,{absolute:!0}):void 0;return r.createElement(a.Z,null,t&&r.createElement("title",null,s),t&&r.createElement("meta",{property:"og:title",content:s}),n&&r.createElement("meta",{name:"description",content:n}),n&&r.createElement("meta",{property:"og:description",content:n}),l&&r.createElement("meta",{name:"keywords",content:Array.isArray(l)?l.join(","):l}),d&&r.createElement("meta",{property:"og:image",content:d}),d&&r.createElement("meta",{name:"twitter:image",content:d}),u)}},82924:function(e,t,n){var r=n(67294).createContext(void 0);t.Z=r},89750:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(87462),a=n(63366),o=n(67294),c=n(86010),l=n(72389),i=n(85350),u={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},s=["sources","className","alt"],m=function(e){var t=(0,l.Z)(),n=(0,i.Z)().isDarkTheme,m=e.sources,d=e.className,f=e.alt,h=void 0===f?"":f,v=(0,a.Z)(e,s),g=t?n?["dark"]:["light"]:["light","dark"];return o.createElement(o.Fragment,null,g.map((function(e){return o.createElement("img",(0,r.Z)({key:e,src:m[e],alt:h,className:(0,c.Z)(u.themedImage,u["themedImage--"+e],d)},v))})))}},40232:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(87462),a=n(67294),o=n(32822),c=n(72389),l=n(86010),i={toggle:"toggle_71bT",toggleScreenReader:"toggleScreenReader_28Tw",toggleDisabled:"toggleDisabled_3cF-",toggleTrack:"toggleTrack_32Fl",toggleTrackCheck:"toggleTrackCheck_3lV7",toggleChecked:"toggleChecked_2FvV",toggleTrackX:"toggleTrackX_S2yS",toggleTrackThumb:"toggleTrackThumb_xI_Z",toggleFocused:"toggleFocused_my6j",toggleIcon:"toggleIcon_O4iE"},u=function(e){var t=e.icon,n=e.style;return a.createElement("span",{className:(0,l.Z)(i.toggleIcon,i.dark),style:n},t)},s=function(e){var t=e.icon,n=e.style;return a.createElement("span",{className:(0,l.Z)(i.toggleIcon,i.light),style:n},t)},m=(0,a.memo)((function(e){var t,n=e.className,r=e.icons,o=e.checked,c=e.disabled,u=e.onChange,s=(0,a.useState)(o),m=s[0],d=s[1],f=(0,a.useState)(!1),h=f[0],v=f[1],g=(0,a.useRef)(null);return a.createElement("div",{className:(0,l.Z)(i.toggle,n,(t={},t[i.toggleChecked]=m,t[i.toggleFocused]=h,t[i.toggleDisabled]=c,t))},a.createElement("div",{className:i.toggleTrack,role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=g.current)?void 0:e.click()}},a.createElement("div",{className:i.toggleTrackCheck},r.checked),a.createElement("div",{className:i.toggleTrackX},r.unchecked),a.createElement("div",{className:i.toggleTrackThumb})),a.createElement("input",{ref:g,checked:m,type:"checkbox",className:i.toggleScreenReader,"aria-label":"Switch between dark and light mode",onChange:u,onClick:function(){return d(!m)},onFocus:function(){return v(!0)},onBlur:function(){return v(!1)},onKeyDown:function(e){var t;"Enter"===e.key&&(null==(t=g.current)||t.click())}}))}));function d(e){var t=(0,o.LU)().colorMode.switchConfig,n=t.darkIcon,l=t.darkIconStyle,i=t.lightIcon,d=t.lightIconStyle,f=(0,c.Z)();return a.createElement(m,(0,r.Z)({disabled:!f,icons:{checked:a.createElement(u,{icon:n,style:l}),unchecked:a.createElement(s,{icon:i,style:d})}},e))}},55662:function(e,t,n){var r=n(67294),a=n(32822);t.Z=function(e){var t=(0,r.useState)(e),n=t[0],o=t[1],c=(0,r.useRef)(!1),l=(0,r.useRef)(0),i=(0,r.useCallback)((function(e){null!==e&&(l.current=e.getBoundingClientRect().height)}),[]);return(0,a.RF)((function(t,n){if(e){var r=t.scrollY;if(r<l.current)o(!0);else if(c.current)c.current=!1;else{var a=null==n?void 0:n.scrollY,i=document.documentElement.scrollHeight-l.current,u=window.innerHeight;a&&r>=a?o(!1):r+u<i&&o(!0)}}})),(0,a.SL)((function(t){if(e)return t.location.hash?(c.current=!0,void o(!1)):void o(!0)})),{navbarRef:i,isNavbarVisible:n}}},31839:function(e,t,n){var r=n(67294);t.Z=function(e){void 0===e&&(e=!0),(0,r.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},85350:function(e,t,n){var r=n(67294),a=n(82924);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},93783:function(e,t,n){var r=n(67294),a=n(10412),o="desktop",c="mobile",l="ssr";function i(){return a.default.canUseDOM?window.innerWidth>996?o:c:l}t.Z=function(){var e=(0,r.useState)((function(){return i()})),t=e[0],n=e[1];return(0,r.useEffect)((function(){function e(){n(i())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),t}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,o=e.split(/[#?]/)[0],c="/"===o||o===r?o:(a=o,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(o,c)}},18780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var o=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},29964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}}}]);