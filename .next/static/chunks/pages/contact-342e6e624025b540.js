(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{7814:function(i,e,b){"use strict";b.d(e,{G:function(){return c}});var j=b(3636),f=b(5697),a=b.n(f),d=b(7294);function k(c,d){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(c);d&&(b=b.filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable})),a.push.apply(a,b)}return a}function l(c){for(var a=1;a<arguments.length;a++){var b=null!=arguments[a]?arguments[a]:{};a%2?k(Object(b),!0).forEach(function(a){n(c,a,b[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(b)):k(Object(b)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(b,a))})}return c}function m(a){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}function n(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function o(a){return p(a)||q(a)||r(a)||t()}function p(a){if(Array.isArray(a))return s(a)}function q(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}function r(a,c){if(a){if("string"==typeof a)return s(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(a);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return s(a,c)}}function s(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=Array(a);b<a;b++)d[b]=c[b];return d}function t(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(a){var b;return(b=a,(b-=0)==b)?a:(a=a.replace(/[\-_\s]+(.)?/g,function(b,a){return a?a.toUpperCase():""})).substr(0,1).toLowerCase()+a.substr(1)}var v=["style"];function g(e,a){var c=arguments.length>2&& void 0!==arguments[2]?arguments[2]:{};if("string"==typeof a)return a;var f=(a.children||[]).map(function(a){return g(e,a)}),b=Object.keys(a.attributes||{}).reduce(function(c,b){var e,d=a.attributes[b];switch(b){case"class":c.attrs.className=d,delete a.attributes.class;break;case"style":c.attrs.style=(e=d).split(";").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,b){var d,e=b.indexOf(":"),c=u(b.slice(0,e)),f=b.slice(e+1).trim();return c.startsWith("webkit")?a[(d=c).charAt(0).toUpperCase()+d.slice(1)]=f:a[c]=f,a},{});break;default:0===b.indexOf("aria-")||0===b.indexOf("data-")?c.attrs[b.toLowerCase()]=d:c.attrs[u(b)]=d}return c},{attrs:{}}),d=c.style,h=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(c,v);return b.attrs.style=l(l({},b.attrs.style),void 0===d?{}:d),e.apply(void 0,[a.tag,l(l({},b.attrs),h)].concat(o(f)))}var h=!1;try{h=!0}catch(w){}function x(a){return a&&"object"===m(a)&&a.prefix&&a.iconName&&a.icon?a:j.Qc.icon?j.Qc.icon(a):null===a?null:a&&"object"===m(a)&&a.prefix&&a.iconName?a:Array.isArray(a)&&2===a.length?{prefix:a[0],iconName:a[1]}:"string"==typeof a?{prefix:"fas",iconName:a}:void 0}function y(b,a){return Array.isArray(a)&&a.length>0|| !Array.isArray(a)&&a?n({},b,a):{}}var c=d.forwardRef(function(b,H){var a,d,k,m,p,q,r,s,t,u,v,w,A,B,C,D,e,g,f,i,E,I=b.icon,J=b.mask,K=b.symbol,L=b.className,M=b.title,N=b.titleId,O=b.maskId,F=x(I),P=y("classes",[].concat(o((k=(a=b).beat,m=a.fade,p=a.beatFade,q=a.bounce,r=a.shake,s=a.flash,t=a.spin,u=a.spinPulse,v=a.spinReverse,w=a.pulse,A=a.fixedWidth,B=a.inverse,C=a.border,D=a.listItem,e=a.flip,g=a.size,f=a.rotation,i=a.pull,E=(d={"fa-beat":k,"fa-fade":m,"fa-beat-fade":p,"fa-bounce":q,"fa-shake":r,"fa-flash":s,"fa-spin":t,"fa-spin-reverse":v,"fa-spin-pulse":u,"fa-pulse":w,"fa-fw":A,"fa-inverse":B,"fa-border":C,"fa-li":D,"fa-flip":!0===e,"fa-flip-horizontal":"horizontal"===e||"both"===e,"fa-flip-vertical":"vertical"===e||"both"===e},n(d,"fa-".concat(g),null!=g),n(d,"fa-rotate-".concat(f),null!=f&&0!==f),n(d,"fa-pull-".concat(i),null!=i),n(d,"fa-swap-opacity",a.swapOpacity),d),Object.keys(E).map(function(a){return E[a]?a:null}).filter(function(a){return a}))),o(L.split(" ")))),Q=y("transform","string"==typeof b.transform?j.Qc.transform(b.transform):b.transform),R=y("mask",x(J)),G=(0,j.qv)(F,l(l(l(l({},P),Q),R),{},{symbol:K,title:M,titleId:N,maskId:O}));if(!G)return!function(){if(!h&&console&&"function"==typeof console.error){var a;(a=console).error.apply(a,arguments)}}("Could not find icon",F),null;var S=G.abstract,T={ref:H};return Object.keys(b).forEach(function(a){c.defaultProps.hasOwnProperty(a)||(T[a]=b[a])}),z(S[0],T)});c.displayName="FontAwesomeIcon",c.propTypes={beat:a().bool,border:a().bool,beatFade:a().bool,bounce:a().bool,className:a().string,fade:a().bool,flash:a().bool,mask:a().oneOfType([a().object,a().array,a().string]),maskId:a().string,fixedWidth:a().bool,inverse:a().bool,flip:a().oneOf([!0,!1,"horizontal","vertical","both"]),icon:a().oneOfType([a().object,a().array,a().string]),listItem:a().bool,pull:a().oneOf(["right","left"]),pulse:a().bool,rotation:a().oneOf([0,90,180,270]),shake:a().bool,size:a().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a().bool,spinPulse:a().bool,spinReverse:a().bool,symbol:a().oneOfType([a().bool,a().string]),title:a().string,titleId:a().string,transform:a().oneOfType([a().string,a().object]),swapOpacity:a().bool},c.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var z=g.bind(null,d.createElement)},8105:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return c(5755)}])},5755:function(c,b,a){"use strict";a.r(b),a.d(b,{"__N_SSP":function(){return o},default:function(){return p}});var d=a(5893),e=a(7294),f=a(7528),g=a(8146),h=a(1077),i=a(9808),j=a(2920),k=a(1311),l=a(6681);function m(F){var c,m,n,o,p,q,r,s,t,u,b=F.datas,v=(0,e.useState)(""),w=v[0],H=v[1],x=(0,e.useState)(""),y=x[0],I=x[1],z=(0,e.useState)(""),A=z[0],J=z[1],B=(0,e.useState)(""),C=B[0],K=B[1],D=(0,e.useState)(null),a=D[0],L=D[1],E=(0,e.useState)(!1),G=E[0],M=E[1];return(0,d.jsxs)(h.Z,{childrenClasses:"pt-0 pb-0",children:[(0,d.jsx)("div",{className:"page-title mb-10",children:(0,d.jsx)(g.Z,{title:"Contact",breadcrumb:[{name:"home",path:"/"},{name:"contact",path:"/contact"},]})}),(0,d.jsx)("div",{className:"contact-wrapper w-full mb-10",children:(0,d.jsx)("div",{className:"container-x mx-auto",children:(0,d.jsxs)("div",{className:"main-wrapper w-full lg:flex lg:space-x-[30px]",children:[(0,d.jsx)("div",{className:"lg:w-1/2 w-full",children:b.contact&&(0,d.jsxs)("div",{children:[(0,d.jsx)("h1",{className:"text-[22px] font-semibold text-qblack leading-[30px] mb-1",children:b.contact.title}),(0,d.jsx)("p",{className:"text-[15px] text-qgraytwo leading-[30px] mb-5",children:b.contact.description}),(0,d.jsxs)("div",{className:"xl:flex xl:space-x-[30px] mb-[30px]",children:[(0,d.jsxs)("div",{className:"xl:w-1/2 w-full h-[196px] flex flex-col item justify-center bg-[#FFEAE5] p-5",children:[(0,d.jsx)("div",{className:"flex justify-center mb-3 ",children:(0,d.jsxs)("svg",{width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("circle",{cx:"22",cy:"22",r:"21.5",stroke:"#FFBB38"}),(0,d.jsx)("path",{d:"M10.4708 17.7624L10.4708 17.7624C10.4976 19.0577 10.9088 20.276 11.473 21.4906C13.5525 25.9672 16.7815 29.3804 21.081 31.7969C22.5665 32.6319 24.0756 33.2848 25.7334 33.4698L25.7335 33.4698C26.8399 33.5935 27.7241 33.3528 28.4392 32.5473L28.4392 32.5473C28.724 32.2265 29.0458 31.9115 29.3517 31.612C29.514 31.4532 29.6717 31.2987 29.8172 31.15L29.8174 31.1498C30.2031 30.7562 30.3337 30.4343 30.336 30.1731C30.3383 29.9141 30.2153 29.5973 29.8364 29.2104L29.8363 29.2104C28.988 28.3441 28.1276 27.4873 27.2602 26.637L27.2601 26.6369C26.8659 26.2503 26.5505 26.126 26.2959 26.1268C26.0403 26.1277 25.7225 26.2552 25.3251 26.6438L25.325 26.6439C24.8114 27.1458 24.3044 27.6511 23.8109 28.166L23.8108 28.1661C23.6684 28.3146 23.4735 28.4645 23.2169 28.5099C22.9464 28.5578 22.7021 28.4739 22.5009 28.341C22.2427 28.1708 21.9677 28.0004 21.686 27.8258C21.0293 27.4187 20.3358 26.9889 19.7325 26.4866C18.0622 25.0969 16.5823 23.48 15.5981 21.4476C15.4993 21.2439 15.4281 21.0037 15.4728 20.7408C15.5179 20.4753 15.6665 20.2715 15.8341 20.112L15.8342 20.1119C16.3521 19.6191 16.86 19.1182 17.3507 18.6035L17.3508 18.6034C17.7203 18.2159 17.84 17.9093 17.8397 17.663C17.8395 17.4176 17.7199 17.1127 17.3474 16.7286L17.3474 16.7286C16.4823 15.8366 15.605 14.9566 14.7136 14.0922C14.3582 13.7475 14.053 13.6318 13.7983 13.6338C13.5412 13.6359 13.2305 13.7585 12.8676 14.1078L10.4708 17.7624ZM10.4708 17.7624L10.4706 17.757M10.4708 17.7624L10.4706 17.757M10.4706 17.757C10.4433 16.8876 10.7133 16.1864 11.3505 15.6062M10.4706 17.757L11.3505 15.6062M11.3505 15.6062C11.6606 15.3245 11.9774 15.0025 12.2815 14.6935C12.4844 14.4873 12.6817 14.2868 12.8675 14.1079L11.3505 15.6062Z",fill:"#FFBB38",stroke:"#FFBB38"}),(0,d.jsx)("path",{d:"M32.2315 21.3816C32.0539 21.4122 31.876 21.4429 31.6979 21.4737C31.0372 19.0025 29.9235 16.9878 28.3306 15.4436C26.7374 13.8992 24.6913 12.8511 22.2058 12.2728C22.239 12.0279 22.2727 11.7796 22.3066 11.53C26.7277 12.1754 31.3242 15.906 32.4497 21.344C32.377 21.3565 32.3043 21.369 32.2315 21.3816Z",fill:"#FFBB38",stroke:"#FFBB38"}),(0,d.jsx)("path",{d:"M25.1799 18.6377C24.3285 17.812 23.2491 17.2404 21.9585 16.9053C21.9807 16.7507 22.0026 16.5975 22.0243 16.4457C22.0391 16.3421 22.0538 16.2392 22.0685 16.1369C24.6502 16.5866 27.1312 18.8191 27.7615 21.6523C27.6473 21.6723 27.5333 21.6922 27.419 21.7121C27.2786 21.7366 27.1375 21.7612 26.9946 21.7861C26.6295 20.5174 26.0301 19.4623 25.1799 18.6377Z",fill:"#FFBB38",stroke:"#FFBB38"})]})}),(0,d.jsx)("p",{className:"text-[22px] text-black leading-[30px] text-center font-semibold",children:null===(c=(0,l.Z)())|| void 0===c?void 0:c.phone}),(0,d.jsx)("p",{className:"text-[15px] text-black leading-[30px] text-center",children:b.contact.phone})]}),(0,d.jsxs)("div",{className:"xl:w-1/2 w-full h-[196px] flex flex-col item justify-center bg-[#D3EFFF] p-5",children:[(0,d.jsx)("div",{className:"flex justify-center mb-3 ",children:(0,d.jsxs)("svg",{width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22 43C33.598 43 43 33.598 43 22C43 10.402 33.598 1 22 1C10.402 1 1 10.402 1 22C1 33.598 10.402 43 22 43ZM22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z",fill:"#FFBB38"}),(0,d.jsx)("path",{d:"M11.0183 18.6455C11.2024 18.761 11.3464 18.8458 11.4851 18.9382C14.2825 20.8029 17.0792 22.6676 19.8759 24.5331C21.3894 25.5429 22.6125 25.5413 24.1329 24.5277C26.9304 22.663 29.7271 20.7975 32.5237 18.9328C32.6539 18.8465 32.7856 18.7634 32.9659 18.6478C32.9782 18.8042 32.9959 18.9212 32.9959 19.0391C32.9974 22.1169 32.9997 25.1939 32.9959 28.2718C32.9944 29.6582 32.1625 30.4854 30.773 30.4862C24.9186 30.4877 19.0641 30.4877 13.2096 30.4862C11.8456 30.4854 11.0037 29.6543 11.0022 28.3003C10.9983 25.2086 11.0006 22.1169 11.0014 19.0245C11.0022 18.9151 11.0114 18.8065 11.0183 18.6455Z",fill:"#FFBB38"}),(0,d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.001 19.8174C11.001 19.7663 11.001 19.7152 11.001 19.6641C11.001 19.6641 11.001 19.664 11.001 19.664C11.0011 19.4508 11.0011 19.2376 11.0012 19.0245C11.0017 18.9566 11.0054 18.889 11.0098 18.8091C11.0126 18.7601 11.0155 18.7066 11.0181 18.6455C11.0841 18.6869 11.1449 18.7243 11.2021 18.7596C11.3047 18.8227 11.3959 18.8789 11.4849 18.9382M11.6145 19.0246C11.6167 19.026 11.6188 19.0274 11.6209 19.0288C11.7476 19.1133 11.8744 19.1978 12.0011 19.2823C12.001 19.6829 12.0009 20.0834 12.0008 20.4839C11.6675 20.2617 11.3342 20.0396 11.001 19.8174M19.3208 25.365C16.881 23.7376 14.4411 22.1107 12.0008 20.4839C12.0007 20.616 12.0007 20.7482 12.0006 20.8803C11.9998 23.3541 11.9989 25.8265 12.002 28.299L12.002 28.2991C12.0025 28.7664 12.1435 29.0368 12.2981 29.1898C12.4539 29.344 12.7318 29.4858 13.2097 29.4862L13.2094 30.4862L13.21 29.4862C13.2099 29.4862 13.2098 29.4862 13.2097 29.4862C19.064 29.4877 24.9183 29.4877 30.7726 29.4862L30.7728 30.4829L30.7723 29.4862C30.7724 29.4862 30.7725 29.4862 30.7726 29.4862C31.2688 29.4858 31.5467 29.3418 31.6992 29.1899C31.8512 29.0386 31.9952 28.7634 31.9957 28.2707L31.9957 28.2705C31.999 25.6758 31.9978 23.0816 31.9965 20.4862C32.3297 20.264 32.6629 20.0418 32.9961 19.8196C32.9961 19.7617 32.996 19.7037 32.996 19.6457C32.996 19.6443 32.996 19.6428 32.996 19.6414C32.9959 19.4406 32.9958 19.2399 32.9957 19.0391C32.9957 18.9617 32.9881 18.8846 32.9793 18.7965C32.9748 18.7505 32.9699 18.7014 32.9657 18.6478C32.9212 18.6763 32.8797 18.7029 32.8404 18.728C32.7205 18.8046 32.6216 18.8678 32.5236 18.9328C32.4704 18.9682 32.4173 19.0037 32.3641 19.0391C32.364 19.0392 32.3638 19.0393 32.3637 19.0394C32.2411 19.1212 32.1184 19.2029 31.9958 19.2847C31.996 19.545 31.9961 19.8053 31.9962 20.0655C31.9963 20.2057 31.9964 20.346 31.9965 20.4862C31.3081 20.9452 30.6197 21.4042 29.9313 21.8633C28.1836 23.0288 26.4356 24.1945 24.6874 25.3598L24.1327 24.5277L24.6874 25.3598C24.6874 25.3598 24.6874 25.3598 24.6874 25.3598C23.8278 25.9329 22.9502 26.288 22.0029 26.2892C21.055 26.2904 20.1783 25.9371 19.3208 25.365ZM19.3208 25.365L19.8742 24.5353L19.3207 25.365C19.3207 25.365 19.3208 25.365 19.3208 25.365ZM11.4849 18.9382C11.5281 18.967 11.5713 18.9958 11.6145 19.0246L11.4849 18.9382Z",fill:"#FFBB38"}),(0,d.jsx)("path",{d:"M22.0007 14.0029C24.963 14.0029 27.9261 13.9983 30.8883 14.0052C32.1292 14.0083 33.0427 14.9295 32.9934 16.1149C32.9633 16.8296 32.5944 17.3418 32.0082 17.7308C29.4226 19.4476 26.8424 21.1722 24.2598 22.8944C23.8793 23.1485 23.5042 23.4112 23.1145 23.6515C22.3766 24.1075 21.6133 24.1275 20.8901 23.6492C17.8839 21.6605 14.8862 19.6594 11.8915 17.6538C11.1213 17.1377 10.8333 16.2889 11.0936 15.4378C11.3547 14.5837 12.1288 14.0068 13.07 14.0045C15.889 13.9968 18.7088 14.0014 21.5278 14.0014C21.6857 14.0029 21.8436 14.0029 22.0007 14.0029Z",fill:"#FFBB38"}),(0,d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M32.0082 17.7308C32.5944 17.3418 32.9633 16.8296 32.9934 16.1149C33.0427 14.9295 32.1292 14.0083 30.8883 14.0052C28.7724 14.0003 26.6561 14.0012 24.5399 14.0022C23.6935 14.0025 22.8471 14.0029 22.0007 14.0029C21.8436 14.0029 21.6857 14.0029 21.5278 14.0014C20.759 14.0014 19.9902 14.001 19.2213 14.0007C17.1709 13.9998 15.1202 13.9989 13.07 14.0045C12.1288 14.0068 11.3547 14.5837 11.0936 15.4378C10.8333 16.2889 11.1213 17.1377 11.8915 17.6538C14.8862 19.6594 17.8839 21.6605 20.8901 23.6492C21.6133 24.1275 22.3766 24.1075 23.1145 23.6515C23.3977 23.4769 23.6732 23.2904 23.9487 23.104C24.0523 23.0339 24.1558 22.9638 24.2598 22.8944C24.9163 22.4566 25.5726 22.0186 26.229 21.5807C28.1545 20.2959 30.0799 19.0112 32.0082 17.7308ZM21.4417 22.8151C21.6574 22.9577 21.8376 23.0016 21.9909 23.0007C22.1486 22.9998 22.3464 22.9506 22.5888 22.8008L22.5896 22.8003C22.8536 22.6375 23.1029 22.4688 23.3716 22.287C23.4787 22.2145 23.5889 22.1399 23.7043 22.0628L23.705 22.0624C24.3607 21.6251 25.0165 21.1875 25.6725 20.7499C27.5985 19.4647 29.5255 18.179 31.4551 16.8977L31.4553 16.8976C31.8444 16.6394 31.9808 16.3923 31.9942 16.0729C32.0181 15.4929 31.5978 15.0071 30.886 15.0052M21.4417 22.8151C18.4378 20.8279 15.4419 18.8281 12.4482 16.823L21.4417 22.8151ZM12.0499 15.7302L12.0499 15.7303C11.9179 16.1618 12.0459 16.5534 12.448 16.8229M13.0727 15.0045L13.0724 15.0045C12.5581 15.0057 12.1793 15.3069 12.0499 15.7302M24.5417 15.0022C23.695 15.0025 22.848 15.0029 22.0007 15.0029H21.9984C21.8444 15.0029 21.6841 15.0029 21.523 15.0014C20.7548 15.0014 19.987 15.001 19.2194 15.0007C17.1695 14.9998 15.1212 14.9989 13.0727 15.0045M24.5417 15.0022C26.6573 15.0012 28.7714 15.0003 30.8859 15.0052L24.5417 15.0022Z",fill:"#FFBB38"})]})}),(0,d.jsx)("p",{className:"text-[22px] text-black leading-[30px] text-center font-semibold",children:null===(m=(0,l.Z)())|| void 0===m?void 0:m.Email}),(0,d.jsx)("p",{className:"text-[15px] text-black leading-[30px] text-center",children:b.contact.email})]})]}),(0,d.jsxs)("div",{className:"p-5 flex flex-col justify-between w-full bg-[#E7F2EC]",children:[(0,d.jsxs)("div",{className:"flex space-x-5",children:[(0,d.jsx)("span",{children:(0,d.jsxs)("svg",{width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("path",{d:"M13.836 18.3183L13.836 18.3193C13.8307 18.9893 14.1161 20.2514 14.7605 21.4272C16.8558 25.2502 18.9688 29.0636 21.0823 32.8778C21.3445 33.3511 21.6068 33.8244 21.869 34.2977L21.869 34.2978C21.9201 34.39 21.9645 34.4453 21.9956 34.4762C22.0272 34.4449 22.0724 34.3887 22.1244 34.2948L22.1245 34.2946C22.6706 33.3089 23.2174 32.3239 23.7641 31.339C25.5963 28.0383 27.4274 24.7399 29.2268 21.4241L13.836 18.3183ZM13.836 18.3183C13.8642 13.6208 16.7919 10.206 20.6315 9.6048C24.7202 8.96493 28.5519 11.3061 29.7792 15.2223L29.7792 15.2224M13.836 18.3183L29.7792 15.2224M29.7792 15.2224C30.451 17.3646 30.2918 19.4599 29.2268 21.4239L29.7792 15.2224ZM26.8314 17.6289L26.8314 17.629C26.8518 20.2773 24.6735 22.4741 22.0205 22.4843C19.3627 22.4945 17.185 20.3434 17.1611 17.6823L26.8314 17.6289ZM26.8314 17.6289C26.8098 14.9632 24.6389 12.824 21.9718 12.8353C19.3106 12.8466 17.1362 15.0295 17.1611 17.6821L26.8314 17.6289Z",fill:"#FFBB38",stroke:"#FFBB38"}),(0,d.jsx)("circle",{cx:"22",cy:"22",r:"21.5",stroke:"#FFBB38"})]})}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h1",{className:"text-[22px] font-semibold text-qblack leading-[30px] mb-2",children:null===(n=(0,l.Z)())|| void 0===n?void 0:n.Address}),(0,d.jsx)("p",{className:"text-[15px] text-qblack leading-[30px]",children:b.contact.address})]})]}),(0,d.jsx)("div",{className:"w-full h-[206px] mt-5",children:(0,d.jsx)("iframe",{title:"newWork",src:"".concat(b.contact.map),style:{border:"0",width:"100%",height:"100%"},allowFullScreen:"",loading:"lazy"})})]})]})}),(0,d.jsxs)("div",{className:"flex-1 bg-white sm:p-10 p-3",children:[(0,d.jsxs)("div",{className:"title flex flex-col items-center",children:[(0,d.jsx)("h1",{className:"text-[34px] font-bold text-qblack",children:null===(o=(0,l.Z)())|| void 0===o?void 0:o.Get_In_Touch}),(0,d.jsx)("span",{className:"-mt-5 block",children:(0,d.jsx)("svg",{width:"354",height:"30",viewBox:"0 0 354 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:"M1 28.8027C17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1",stroke:"#FFBB38",strokeWidth:"2",strokeLinecap:"round"})})})]}),(0,d.jsxs)("div",{className:"inputs mt-5",children:[(0,d.jsxs)("div",{className:"mb-4",children:[(0,d.jsx)(f.Z,{label:(null===(p=(0,l.Z)())|| void 0===p?void 0:p.Name)+"*",placeholder:null===(q=(0,l.Z)())|| void 0===q?void 0:q.Name,name:"name",inputClasses:"h-[50px]",value:w,inputHandler:function(a){return H(a.target.value)},error:!!(a&&Object.hasOwn(a,"name"))}),a&&Object.hasOwn(a,"name")?(0,d.jsx)("span",{className:"text-sm mt-1 text-qred",children:a.name[0]}):""]}),(0,d.jsxs)("div",{className:"mb-4",children:[(0,d.jsx)(f.Z,{label:(null===(r=(0,l.Z)())|| void 0===r?void 0:r.Email_Address)+"*",placeholder:null===(s=(0,l.Z)())|| void 0===s?void 0:s.Email,name:"email",inputClasses:"h-[50px]",value:y,error:!!(a&&Object.hasOwn(a,"email")),inputHandler:function(a){return I(a.target.value)}}),a&&Object.hasOwn(a,"email")?(0,d.jsx)("span",{className:"text-sm mt-1 text-qred",children:a.email[0]}):""]}),(0,d.jsxs)("div",{className:"mb-4",children:[(0,d.jsx)(f.Z,{label:"Subject*",placeholder:"Your Subject here",name:"subject",inputClasses:"h-[50px]",value:A,error:!!(a&&Object.hasOwn(a,"subject")),inputHandler:function(a){return J(a.target.value)}}),a&&Object.hasOwn(a,"subject")?(0,d.jsx)("span",{className:"text-sm mt-1 text-qred",children:a.subject[0]}):""]}),(0,d.jsxs)("div",{className:"mb-5",children:[(0,d.jsxs)("h6",{className:"input-label text-qgray capitalize text-[13px] font-normal block mb-2 ",children:[null===(t=(0,l.Z)())|| void 0===t?void 0:t.Message,"*"]}),(0,d.jsx)("textarea",{value:C,onChange:function(a){return K(a.target.value)},placeholder:"Type your message here",className:" w-full h-[105px] focus:ring-0 focus:outline-none p-3 border placeholder:text-sm ".concat(a&&Object.hasOwn(a,"message")?"border-qred":"border-qgray-border")}),a&&Object.hasOwn(a,"message")?(0,d.jsx)("span",{className:"text-sm mt-1 text-qred",children:a.message[0]}):""]}),(0,d.jsx)("div",{children:(0,d.jsxs)("button",{disabled:!w||!y||!A||!C,onClick:function(){M(!0),i.Z.contact({name:w,email:y,subject:A,message:C}).then(function(a){M(!1),H(""),I(""),J(""),K(""),j.Am.success(a&&a.data.notification)}).catch(function(a){M(!1),console.error(a),L(a.response.data.errors)})},type:"button",className:"disabled:bg-gray-400 disabled:cursor-not-allowed bg-qblack text-white text-sm font-semibold w-full h-[50px] flex justify-center items-center",children:[(0,d.jsx)("span",{children:null===(u=(0,l.Z)())|| void 0===u?void 0:u.Send_Now}),G&&(0,d.jsx)("span",{className:"w-5",style:{transform:"scale(0.3)"},children:(0,d.jsx)(k.Z,{})})]})})]})]})]})})})]})}var n=a(4987),o=!0;function p(c){var a=c.data,b=a.seoSetting;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.Z,{title:"".concat(b.seo_title),metaDes:b.seo_description}),(0,d.jsx)(m,{datas:a})]})}},1546:function(c,b,a){"use strict";a.d(b,{Z:function(){return e}});var d=a(5893);function e(c){var b=c.paths,a=void 0===b?[{name:"home",path:"/"}]:b;return(0,d.jsx)(d.Fragment,{children:a&&a.length>0&&(0,d.jsx)("div",{children:(0,d.jsx)("div",{className:"breadcrumb-wrapper font-400 text-[13px] text-qblack mb-[23px] print:hidden",children:a.map(function(a){return(0,d.jsxs)("span",{children:[(0,d.jsx)("a",{href:a.path,children:(0,d.jsx)("span",{className:"mx-1 capitalize",children:a.name})}),(0,d.jsx)("span",{className:"sperator",children:"/"})]},Math.random())})})},Math.random())})}},7528:function(c,b,a){"use strict";a.d(b,{Z:function(){return e}});var d=a(5893);function e(a){var b=a.label,h=a.type,c=a.name,i=a.placeholder,e=a.children,j=a.inputHandler,k=a.value,l=a.inputClasses,f=a.error,g=a.labelClasses;return(0,d.jsxs)("div",{className:"input-com w-full h-full",children:[b&&(0,d.jsx)("label",{className:"input-label capitalize block  mb-2 ".concat((void 0===g?"text-qgray text-[13px] font-normal":g)||""),htmlFor:c,children:b}),(0,d.jsxs)("div",{className:"input-wrapper border  w-full h-full overflow-hidden relative ".concat(void 0!==f&&f?"border-qred":"border-qgray-border"),children:[(0,d.jsx)("input",{placeholder:i,value:k,onChange:j,className:"input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none ".concat(l||""),type:h,id:c}),e&&e]})]})}},1311:function(c,b,a){"use strict";a.d(b,{Z:function(){return e}});var d=a(5893);function e(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"lds-spinner",children:[(0,d.jsx)("div",{}),(0,d.jsx)("div",{}),(0,d.jsx)("div",{}),(0,d.jsx)("div",{}),(0,d.jsx)("div",{}),(0,d.jsx)("div",{}),(0,d.jsx)("div",{}),(0,d.jsx)("div",{}),(0,d.jsx)("div",{}),(0,d.jsx)("div",{}),(0,d.jsx)("div",{}),(0,d.jsx)("div",{})]})})}},4987:function(d,b,a){"use strict";var e=a(5893),c=a(9008),f=a.n(c);a(7294);var g=a(8522);b.Z=function(a){var c=a.title,b=(0,g.Z)().favicon,d=a.metaDes;return(0,e.jsxs)(f(),{children:[(0,e.jsx)("title",{children:c}),(0,e.jsx)("meta",{name:"description",content:d}),(0,e.jsx)("link",{rel:"icon",href:"".concat(b?"https://colabyte.in/api"+b:"/favico.svg")})]})}},8146:function(c,b,a){"use strict";a.d(b,{Z:function(){return f}});var d=a(5893),e=a(1546);function f(a){var c=a.title,b=a.breadcrumb;return(0,d.jsx)("div",{className:"page-title-wrapper bg-[#FFFAEF] w-full h-[173px] py-10",children:(0,d.jsxs)("div",{className:"container-x mx-auto",children:[(0,d.jsx)("div",{className:"mb-5",children:(0,d.jsx)(e.Z,{paths:void 0===b?[]:b})}),(0,d.jsx)("div",{className:"flex justify-center",children:(0,d.jsx)("h1",{className:"text-3xl font-semibold text-qblack",children:c})})]})})}},9008:function(a,c,b){a.exports=b(5443)},2703:function(a,e,b){"use strict";var f=b(414);function c(){}function d(){}d.resetWarningCache=c,a.exports=function(){function a(c,d,e,g,h,b){if(b!==f){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function b(){return a}a.isRequired=a;var e={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:b,element:a,elementType:a,instanceOf:b,node:a,objectOf:b,oneOf:b,oneOfType:b,shape:b,exact:b,checkPropTypes:d,resetWarningCache:c};return e.PropTypes=e,e}},5697:function(a,c,b){a.exports=b(2703)()},414:function(a){"use strict";a.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(a){a.O(0,[77,774,888,179],function(){var b;return a(a.s=8105)}),_N_E=a.O()}])