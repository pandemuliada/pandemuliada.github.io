_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),l=n("FYa8"),s=n("/0+H");function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var l=0,s=m.length;l<s;l++){var c=m[l];if(a.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?o=!1:n.add(c);else{var u=a.props[c],d=r[c]||new Set;d.has(u)?o=!1:(d.add(u),r[c]=d)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function p(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(l.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:f,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}p.rewind=function(){};var h=p;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},H0SL:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("cMU6")}])},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("q1tI"),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(a),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};function s(e){return function(t){return r.createElement(c,i({attr:i({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return r.createElement(t.tag,i({key:n},t.attr),e(t.child))}))}(e.child))}}function c(e){var t=function(t){var n,a=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var o=e.attr,s=e.title,c=l(e,["attr","title"]);return r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:n,style:i({color:e.color||t.color},t.style,e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),l=n("a1gu"),s=n("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return l(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),d=function(e){i(n,e);var t=c(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},YFqc:function(e,t,n){e.exports=n("cTJO")},cMU6:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("YFqc"),i=n.n(o);function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createElement,c=function(e){var t=e.children,n=l(e,["children"]);return s("div",{className:"container mx-auto px-6 sm:px-12 ".concat(n.className)},t)},u=n("Lnxd");function d(e){return Object(u.a)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}}]})(e)}function m(e){return Object(u.a)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}},{tag:"polyline",attr:{points:"22,6 12,13 2,6"}}]})(e)}var f=n("8Kt/"),p=n.n(f),h=a.a.createElement,g=function(){return h("nav",null,h(c,{className:"flex py-4"},h(i.a,{href:"/"},h("a",{style:{fontSize:22}},h("span",{className:"hidden sm:block"},"Pande Muliada"),h("span",{className:"block sm:hidden"},"PM"))),h("div",{className:"ml-auto flex items-center"},h("a",{href:"https://pandemuliada.netlify.app",target:"_blank",className:"ml-10 text-gray hover:text-primary cursor-pointer"},"Blog"),h(i.a,{href:"mailto:pandemuliada@gmail.com"},h("a",{className:"ml-10 text-gray hover:text-primary cursor-pointer"},"Contact")))))},v=n("ma3e"),y=a.a.createElement,b=[{link:"https://t.me/pandemuliada",icon:y(v.e,{fontSize:22})},{link:"https://www.instagram.com/pandemuliada/",icon:y(v.c,{fontSize:22})},{link:"https://twitter.com/pandemuliada/",icon:y(v.f,{fontSize:22})},{link:"https://dribbble.com/pandemuliada",icon:y(v.a,{fontSize:22})},{link:"https://github.com/pandemuliada",icon:y(v.b,{fontSize:22})},{link:"https://www.linkedin.com/in/pandemuliada/",icon:y(v.d,{fontSize:22})}],x=function(){return y("footer",{style:{backgroundColor:"#efefef"},className:"py-5"},y(c,{className:"flex flex-wrap items-center justify-center"},b.map((function(e,t){var n=e.link,r=e.icon;return y("a",{key:n,href:n,target:"_blank",className:"inline-block mx-4 my-2 text-gray"},r)}))))},w=a.a.createElement,k=function(e){var t=e.children;return w(a.a.Fragment,null,w(p.a,null,w("title",null,"Pande Muliada Front End Developer"),w("link",{rel:"icon",href:"/favicon.ico"}),w("link",{href:"https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap",rel:"stylesheet"})),w(g,null),t,w(x,null))},N=a.a.createElement,M=[{slug:"hartacreativedo",image:"hartacreativedo.png",link:"http://hartacreativedo.com"},{slug:"urfurniture",image:"urfurniture.png",link:"https://urfurniture.netlify.app"}],_=[{slug:"html",image:"html.png"},{slug:"css",image:"css.png"},{slug:"js",image:"js.png"},{slug:"react",image:"react.png"},{slug:"figma",image:"figma.png"}];t.default=function(){return N(a.a.Fragment,null,N(k,null,N("section",{style:{minHeight:"700px"},className:"flex sm:items-center mb-10 mt-5 md:mt-0"},N(c,{className:"relative grid grid-cols-1 md:grid-cols-2"},N("div",{className:"order-2 md:order-1"},N("img",{className:"absolute w-32 opacity-25 pointer-events-none",style:{top:"-30px",left:"-50px",zIndex:1},src:"/images/dots.svg"}),N("h1",{className:"text-lg"},N("span",{style:{color:"#444",fontSize:25},className:"font-light"},"Hi, I'm Pande Muliada"),N("br",null),N("span",{className:"text-primary text-title font-bold leading-snug"},"Front End Developer")),N("p",{className:"text-gray leading-relaxed mt-8 mb-10"},"I\u2019m from Indonesia and working as freelance Front End Developer. I have been learning to code since I was 15 years old. I do enjoy programming because I love to solve problem and it fells amazing when I solve problem with programming. I\u2019m looking forward to collaborate with you!"),N("div",{className:"flex items-center"},N(i.a,{href:"mailto:@pandemuliada@gmail.com"},N("a",{role:"button",className:"inline-flex items-center bg-primary py-4 px-6 rounded-md text-white hover:opacity-75"},N(m,{className:"mr-2",fontSize:20}),N("span",null,"Email Me"))),N("a",{href:"/#",className:"text-gray ml-10"},"Download CV"))),N("div",{className:"relative flex justify-center md:justify-end order-1 md:order-2"},N("div",{className:"relative md:mt-0 md:mr-20 mb-10 md:mb-0"},N("img",{src:"/images/rounded-rectangle.svg",className:"hidden md:block absolute w-48 opacity-25 pointer-events-none",style:{top:"-60px",right:"-60px",zIndex:-1}}),N("img",{className:"absolute md:w-32 opacity-50 pointer-events-none",style:{bottom:"-48px",left:"-48px",zIndex:1},src:"/images/dots.svg"}),N("img",{src:"/images/avatar.jpg",className:"hidden md:block mx-auto w-full rounded-md"}),N("img",{src:"/images/avatar-square.jpg",className:"block md:hidden mx-auto w-full rounded-md"}))))),N("section",{style:{backgroundColor:"rgba(251, 251, 251, 0.5)"},className:"py-16"},N(c,null,N("h2",{className:"text-title font-bold mb-10"},"Projects"),M.map((function(e,t){var n=e.image,r=e.link,a=e.slug;return N("div",{key:"".concat(a,"_").concat(t,"_").concat(r),className:"".concat(M.length-1!==t&&"mb-16"," rounded-md")},N("img",{src:"/images/projects/".concat(n),className:"rounded-md block mb-5 shadow"}),N("div",{className:"flex items-center"},N("a",{href:r,target:"_blank",className:"text-gray flex items-center hover:text-primary"},N(d,{className:"mr-2",fontSize:20}),"Visit Website")))})))),N("section",{className:"my-16"},N(c,null,N("h2",{className:"text-title font-bold mb-8 text-center"},"Skills"),N("div",{className:"flex justify-center flex-wrap"},_.map((function(e,t){var n=e.slug,r=e.image;return N("div",{key:"".concat(n,"_").concat(t),className:"shadow rounded-md mt-4 mx-3 md:mx-6"},N("img",{src:"/images/skills/".concat(r),className:"w-full block"}))}))))),N("section",{className:"mb-10"},N(c,null,N("div",{className:"flex items-center flex-wrap bg-primary rounded-md px-8 py-6 md:md:h-24"},N("p",{style:{fontSize:25},className:"text-white font-bold tracking-wide mb-5 md:mb-0 text-center md:text-left sm:mr-auto"},"Interested working with me?"),N(i.a,{href:"mailto:@pandemuliada@gmail.com"},N("div",{className:"mx-auto sm:m-0"},N("a",{role:"button",className:"inline-flex items-center bg-white py-4 px-6 rounded-md text-primary"},N(m,{className:"mr-2",fontSize:20}),N("span",null,"Email Me")))))))))}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o,i=a(n("q1tI")),l=n("elyg"),s=n("nOHt"),c=new Map,u=window.IntersectionObserver,d={};var m=function(e,t){var n=o||(u?o=new u((function(e){e.forEach((function(e){if(c.has(e.target)){var t=c.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),c.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),c.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}c.delete(e)}):function(){}};function f(e,t,n,r){(0,l.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),d[t+"%"+n]=!0)}var p=function(e){var t=!1!==e.prefetch,n=i.default.useState(),a=r(n,2),o=a[0],c=a[1],p=(0,s.useRouter)(),h=p&&p.pathname||"/",g=i.default.useMemo((function(){var t=(0,l.resolveHref)(h,e.href);return{href:t,as:e.as?(0,l.resolveHref)(h,e.as):t}}),[h,e.href,e.as]),v=g.href,y=g.as;i.default.useEffect((function(){if(t&&u&&o&&o.tagName&&(0,l.isLocalURL)(v)&&!d[v+"%"+y])return m(o,(function(){f(p,v,y)}))}),[t,o,v,y,p]);var b=e.children,x=e.replace,w=e.shallow,k=e.scroll;"string"===typeof b&&(b=i.default.createElement("a",null,b));var N=i.Children.only(b),M={ref:function(e){e&&c(e),N&&"object"===typeof N&&N.ref&&("function"===typeof N.ref?N.ref(e):"object"===typeof N.ref&&(N.ref.current=e))},onClick:function(e){N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,p,v,y,x,w,k)}};return t&&(M.onMouseEnter=function(e){(0,l.isLocalURL)(v)&&(N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),f(p,v,y,{priority:!0}))}),(e.passHref||"a"===N.type&&!("href"in N.props))&&(M.href=(0,l.addBasePath)(y)),i.default.cloneElement(N,M)};t.default=p},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a}},[["H0SL",0,2,3,1]]]);