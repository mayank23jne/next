(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[819],{7814:function(i,e,b){"use strict";b.d(e,{G:function(){return c}});var j=b(3636),f=b(5697),a=b.n(f),d=b(7294);function k(c,d){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(c);d&&(b=b.filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable})),a.push.apply(a,b)}return a}function l(c){for(var a=1;a<arguments.length;a++){var b=null!=arguments[a]?arguments[a]:{};a%2?k(Object(b),!0).forEach(function(a){n(c,a,b[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(b)):k(Object(b)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(b,a))})}return c}function m(a){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}function n(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function o(a){return p(a)||q(a)||r(a)||t()}function p(a){if(Array.isArray(a))return s(a)}function q(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}function r(a,c){if(a){if("string"==typeof a)return s(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(a);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return s(a,c)}}function s(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=Array(a);b<a;b++)d[b]=c[b];return d}function t(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(a){var b;return(b=a,(b-=0)==b)?a:(a=a.replace(/[\-_\s]+(.)?/g,function(b,a){return a?a.toUpperCase():""})).substr(0,1).toLowerCase()+a.substr(1)}var v=["style"];function g(e,a){var c=arguments.length>2&& void 0!==arguments[2]?arguments[2]:{};if("string"==typeof a)return a;var f=(a.children||[]).map(function(a){return g(e,a)}),b=Object.keys(a.attributes||{}).reduce(function(c,b){var e,d=a.attributes[b];switch(b){case"class":c.attrs.className=d,delete a.attributes.class;break;case"style":c.attrs.style=(e=d).split(";").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,b){var d,e=b.indexOf(":"),c=u(b.slice(0,e)),f=b.slice(e+1).trim();return c.startsWith("webkit")?a[(d=c).charAt(0).toUpperCase()+d.slice(1)]=f:a[c]=f,a},{});break;default:0===b.indexOf("aria-")||0===b.indexOf("data-")?c.attrs[b.toLowerCase()]=d:c.attrs[u(b)]=d}return c},{attrs:{}}),d=c.style,h=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(c,v);return b.attrs.style=l(l({},b.attrs.style),void 0===d?{}:d),e.apply(void 0,[a.tag,l(l({},b.attrs),h)].concat(o(f)))}var h=!1;try{h=!0}catch(w){}function x(a){return a&&"object"===m(a)&&a.prefix&&a.iconName&&a.icon?a:j.Qc.icon?j.Qc.icon(a):null===a?null:a&&"object"===m(a)&&a.prefix&&a.iconName?a:Array.isArray(a)&&2===a.length?{prefix:a[0],iconName:a[1]}:"string"==typeof a?{prefix:"fas",iconName:a}:void 0}function y(b,a){return Array.isArray(a)&&a.length>0|| !Array.isArray(a)&&a?n({},b,a):{}}var c=d.forwardRef(function(b,H){var a,d,k,m,p,q,r,s,t,u,v,w,A,B,C,D,e,g,f,i,E,I=b.icon,J=b.mask,K=b.symbol,L=b.className,M=b.title,N=b.titleId,O=b.maskId,F=x(I),P=y("classes",[].concat(o((k=(a=b).beat,m=a.fade,p=a.beatFade,q=a.bounce,r=a.shake,s=a.flash,t=a.spin,u=a.spinPulse,v=a.spinReverse,w=a.pulse,A=a.fixedWidth,B=a.inverse,C=a.border,D=a.listItem,e=a.flip,g=a.size,f=a.rotation,i=a.pull,E=(d={"fa-beat":k,"fa-fade":m,"fa-beat-fade":p,"fa-bounce":q,"fa-shake":r,"fa-flash":s,"fa-spin":t,"fa-spin-reverse":v,"fa-spin-pulse":u,"fa-pulse":w,"fa-fw":A,"fa-inverse":B,"fa-border":C,"fa-li":D,"fa-flip":!0===e,"fa-flip-horizontal":"horizontal"===e||"both"===e,"fa-flip-vertical":"vertical"===e||"both"===e},n(d,"fa-".concat(g),null!=g),n(d,"fa-rotate-".concat(f),null!=f&&0!==f),n(d,"fa-pull-".concat(i),null!=i),n(d,"fa-swap-opacity",a.swapOpacity),d),Object.keys(E).map(function(a){return E[a]?a:null}).filter(function(a){return a}))),o(L.split(" ")))),Q=y("transform","string"==typeof b.transform?j.Qc.transform(b.transform):b.transform),R=y("mask",x(J)),G=(0,j.qv)(F,l(l(l(l({},P),Q),R),{},{symbol:K,title:M,titleId:N,maskId:O}));if(!G)return!function(){if(!h&&console&&"function"==typeof console.error){var a;(a=console).error.apply(a,arguments)}}("Could not find icon",F),null;var S=G.abstract,T={ref:H};return Object.keys(b).forEach(function(a){c.defaultProps.hasOwnProperty(a)||(T[a]=b[a])}),z(S[0],T)});c.displayName="FontAwesomeIcon",c.propTypes={beat:a().bool,border:a().bool,beatFade:a().bool,bounce:a().bool,className:a().string,fade:a().bool,flash:a().bool,mask:a().oneOfType([a().object,a().array,a().string]),maskId:a().string,fixedWidth:a().bool,inverse:a().bool,flip:a().oneOf([!0,!1,"horizontal","vertical","both"]),icon:a().oneOfType([a().object,a().array,a().string]),listItem:a().bool,pull:a().oneOf(["right","left"]),pulse:a().bool,rotation:a().oneOf([0,90,180,270]),shake:a().bool,size:a().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a().bool,spinPulse:a().bool,spinReverse:a().bool,symbol:a().oneOfType([a().bool,a().string]),title:a().string,titleId:a().string,transform:a().oneOfType([a().string,a().object]),swapOpacity:a().bool},c.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var z=g.bind(null,d.createElement)},9696:function(f,b,a){"use strict";a.d(b,{Z:function(){return u}});var g=a(7568),c=a(4051),h=a.n(c),i=a(5893),d=a(1664),j=a.n(d),k=a(1163),l=a(7294),m=a(2920),n=a(9808),o=a(7528),p=a(1311),q=a(1077),e=a(5675),r=a.n(e),s=a(9473),t=a(6681);function u(){var b,c,d,e,f,u,v,w,x,y,z,A,B,C,D,E,ag=(0,k.useRouter)(),V=(0,s.v9)(function(a){return a.websiteSetup}).websiteSetup,F=(0,l.useState)(""),W=F[0],ah=F[1],G=(0,l.useState)(""),X=G[0],ai=G[1],H=(0,l.useState)(""),Y=H[0],aj=H[1],I=(0,l.useState)(""),Z=I[0],ak=I[1],J=(0,l.useState)(""),$=J[0],al=J[1],K=(0,l.useState)(!1),L=K[0],am=K[1],M=(0,l.useState)(""),N=M[0],an=M[1],O=(0,l.useState)(null),a=O[0],ao=O[1],P=(0,l.useState)(!1),Q=P[0],ap=P[1],R=(0,l.useState)(!1),_=R[0],aq=R[1],S=(0,l.useState)(!1),aa=S[0],ar=S[1],T=(0,l.useState)(null),U=T[0],as=T[1];(0,l.useEffect)(function(){V&&as(V.payload.image_content.login_image)},[V]);var ab,ac,ad=(ab=(0,g.Z)(h().mark(function a(){return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return ap(!0),a.next=3,n.Z.signup({name:W+" "+X,email:Y,password:Z,password_confirmation:$,agree:L?1:""}).then(function(a){ap(!1),m.Am.success(a.data.notification),ag.push("/verify-you?email=".concat(Y)),ah(""),ai(""),aj(""),ak(""),al(""),am(!1)}).catch(function(a){ap(!1),ao(a.response&&a.response.data.errors)});case 3:case"end":return a.stop()}},a)})),function(){return ab.apply(this,arguments)}),ae=(0,k.useRouter)();(0,l.useEffect)(function(){"/verify-you"===ae.route?aq(!0):ar(!0)},[ae]);var af=(ac=(0,g.Z)(h().mark(function a(){return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return ap(!0),a.next=3,n.Z.verification({email:ae.query.email},N).then(function(a){ap(!1),a&&(m.Am.success(a.data.notification),ag.push("/login"))}).catch(function(a){if(ap(!1),!a.response||!a.response.data.notification)return!1;m.Am.error(a.response.data.notification)});case 3:case"end":return a.stop()}},a)})),function(){return ac.apply(this,arguments)});return(0,i.jsx)(q.Z,{childrenClasses:"pt-0 pb-0",children:(0,i.jsx)("div",{className:"login-page-wrapper w-full py-10",children:(0,i.jsx)("div",{className:"container-x mx-auto",children:(0,i.jsxs)("div",{className:"lg:flex items-center relative w-full lg:min-h-[700px]",children:[_?(0,i.jsx)("div",{className:"lg:w-[572px] w-full lg:h-[700px] bg-white flex flex-col justify-center sm:p-10 p-5 border border-[#E0E0E0]",children:(0,i.jsxs)("div",{className:"w-full",children:[(0,i.jsxs)("div",{className:"title-area flex flex-col justify-center items-center relative text-center mb-7",children:[(0,i.jsx)("h1",{className:"text-[34px] font-bold leading-[74px] text-qblack",children:null===(b=(0,t.Z)())|| void 0===b?void 0:b.Verify_You}),(0,i.jsx)("div",{className:"shape -mt-6",children:(0,i.jsx)("svg",{width:"354",height:"30",viewBox:"0 0 354 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M1 28.8027C17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1",stroke:"#FFBB38",strokeWidth:"2",strokeLinecap:"round"})})})]}),(0,i.jsxs)("div",{className:"input-area",children:[(0,i.jsx)("div",{className:"input-item mb-5",children:(0,i.jsx)(o.Z,{placeholder:"* * * * * *",label:null===(c=(0,t.Z)())|| void 0===c?void 0:c.OTP,name:"otp",type:"text",inputClasses:"h-[50px]",value:N,error:a,inputHandler:function(a){return an(a.target.value.trim())}})}),(0,i.jsx)("div",{className:"signin-area mb-3",children:(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsxs)("button",{disabled:!N,onClick:af,type:"button",className:"black-btn disabled:bg-opacity-50 disabled:cursor-not-allowed w-full h-[50px] font-semibold flex justify-center bg-purple items-center",children:[(0,i.jsx)("span",{className:"text-sm text-white block",children:null===(d=(0,t.Z)())|| void 0===d?void 0:d.Verify}),Q&&(0,i.jsx)("span",{className:"w-5 ",style:{transform:"scale(0.3)"},children:(0,i.jsx)(p.Z,{})})]})})})]})]})}):aa?(0,i.jsx)("div",{className:"lg:w-[572px] w-full lg:h-auto bg-white flex flex-col justify-center sm:p-10 p-5 border border-[#E0E0E0]",children:(0,i.jsxs)("div",{className:"w-full",children:[(0,i.jsxs)("div",{className:"title-area flex flex-col justify-center items-center relative text-center mb-7",children:[(0,i.jsx)("h1",{className:"text-[34px] font-bold leading-[74px] text-qblack",children:null===(e=(0,t.Z)())|| void 0===e?void 0:e.Create_Account}),(0,i.jsx)("div",{className:"shape -mt-6",children:(0,i.jsx)("svg",{width:"354",height:"30",viewBox:"0 0 354 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M1 28.8027C17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1",stroke:"#FFBB38",strokeWidth:"2",strokeLinecap:"round"})})})]}),(0,i.jsxs)("div",{className:"input-area",children:[(0,i.jsxs)("div",{className:"flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5",children:[(0,i.jsxs)("div",{className:"h-full",children:[(0,i.jsx)(o.Z,{placeholder:null===(f=(0,t.Z)())|| void 0===f?void 0:f.Name,label:(null===(u=(0,t.Z)())|| void 0===u?void 0:u.First_Name)+"*",name:"fname",type:"text",inputClasses:"h-[50px]",value:W,inputHandler:function(a){return ah(a.target.value)}}),a&&Object.hasOwn(a,"name")?(0,i.jsx)("span",{className:"text-sm mt-1 text-qred",children:a.name[0]}):""]}),(0,i.jsxs)("div",{className:"h-full",children:[(0,i.jsx)(o.Z,{placeholder:null===(v=(0,t.Z)())|| void 0===v?void 0:v.Name,label:(null===(w=(0,t.Z)())|| void 0===w?void 0:w.Last_Name)+"*",name:"lname",type:"text",inputClasses:"h-[50px]",value:X,inputHandler:function(a){return ai(a.target.value)}}),a&&Object.hasOwn(a,"name")?(0,i.jsx)("span",{className:"text-sm mt-1 text-qred",children:a.name[0]}):""]})]}),(0,i.jsxs)("div",{className:"input-item mb-5",children:[(0,i.jsx)(o.Z,{placeholder:null===(x=(0,t.Z)())|| void 0===x?void 0:x.Email,label:(null===(y=(0,t.Z)())|| void 0===y?void 0:y.Email_Address)+"*",name:"email",type:"email",inputClasses:"h-[50px]",value:Y,error:!!(a&&Object.hasOwn(a,"email")),inputHandler:function(a){return aj(a.target.value)}}),a&&Object.hasOwn(a,"email")?(0,i.jsx)("span",{className:"text-sm mt-1 text-qred",children:a.email[0]}):""]}),(0,i.jsxs)("div",{className:"flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5",children:[(0,i.jsxs)("div",{className:"h-full",children:[(0,i.jsx)(o.Z,{placeholder:"* * * * * *",label:(null===(z=(0,t.Z)())|| void 0===z?void 0:z.Password)+"*",name:"password",type:"password",inputClasses:"h-[50px]",value:Z,inputHandler:function(a){return ak(a.target.value)}}),a&&Object.hasOwn(a,"password")?(0,i.jsx)("span",{className:"text-sm mt-1 text-qred",children:a.password[0]}):""]}),(0,i.jsxs)("div",{className:"h-full",children:[(0,i.jsx)(o.Z,{placeholder:"* * * * * *",label:(null===(A=(0,t.Z)())|| void 0===A?void 0:A.Confirm_Password)+"*",name:"confirm_password",type:"password",inputClasses:"h-[50px]",value:$,inputHandler:function(a){return al(a.target.value)}}),a&&Object.hasOwn(a,"password")?(0,i.jsx)("span",{className:"text-sm mt-1 text-qred",children:a.password[0]}):""]})]}),(0,i.jsx)("div",{className:"forgot-password-area mb-7",children:(0,i.jsxs)("div",{className:"remember-checkbox flex items-center space-x-2.5",children:[(0,i.jsx)("button",{onClick:function(){am(!L)},type:"button",className:"w-5 h-5 text-qblack flex justify-center items-center border border-light-gray",children:L&&(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),(0,i.jsx)(j(),{href:"/seller-terms-condition",children:(0,i.jsx)("span",{className:"text-base text-black cursor-pointer",children:null===(B=(0,t.Z)())|| void 0===B?void 0:B.I_agree_all_terms_and_condition_in_ecoShop})})]})}),(0,i.jsx)("div",{className:"signin-area mb-3",children:(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsxs)("button",{onClick:ad,type:"button",disabled:!L,className:"black-btn disabled:bg-opacity-50 disabled:cursor-not-allowed w-full h-[50px] font-semibold flex justify-center bg-purple items-center",children:[(0,i.jsx)("span",{className:"text-sm text-white block",children:null===(C=(0,t.Z)())|| void 0===C?void 0:C.Create_Account}),Q&&(0,i.jsx)("span",{className:"w-5 ",style:{transform:"scale(0.3)"},children:(0,i.jsx)(p.Z,{})})]})})}),(0,i.jsx)("div",{className:"signup-area flex justify-center",children:(0,i.jsxs)("p",{className:"text-base text-qgraytwo font-normal",children:[null===(D=(0,t.Z)())|| void 0===D?void 0:D.Already_have_an_Account,"?",(0,i.jsx)(j(),{href:"/login",children:(0,i.jsx)("span",{className:"ml-2 text-qblack cursor-pointer ml-1",children:null===(E=(0,t.Z)())|| void 0===E?void 0:E.Log_In})})]})})]})]})}):"",(0,i.jsx)("div",{className:"flex-1 lg:flex hidden transform scale-60 xl:scale-100 xl:justify-center",children:(0,i.jsx)("div",{className:"absolute xl:-right-20 -right-[138px]",style:{top:"calc(50% - 258px)"},children:U&&(0,i.jsx)(r(),{width:608,height:480,src:"".concat("https://colabyte.in/api"+U),alt:"login"})})})]})})})})}},7528:function(c,b,a){"use strict";a.d(b,{Z:function(){return e}});var d=a(5893);function e(a){var b=a.label,h=a.type,c=a.name,i=a.placeholder,e=a.children,j=a.inputHandler,k=a.value,l=a.inputClasses,f=a.error,g=a.labelClasses;return(0,d.jsxs)("div",{className:"input-com w-full h-full",children:[b&&(0,d.jsx)("label",{className:"input-label capitalize block  mb-2 ".concat((void 0===g?"text-qgray text-[13px] font-normal":g)||""),htmlFor:c,children:b}),(0,d.jsxs)("div",{className:"input-wrapper border  w-full h-full overflow-hidden relative ".concat(void 0!==f&&f?"border-qred":"border-qgray-border"),children:[(0,d.jsx)("input",{placeholder:i,value:k,onChange:j,className:"input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none ".concat(l||""),type:h,id:c}),e&&e]})]})}},1311:function(c,b,a){"use strict";a.d(b,{Z:function(){return e}});var d=a(5893);function e(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"lds-spinner",children:[(0,d.jsx)("div",{}),(0,d.jsx)("div",{}),(0,d.jsx)("div",{}),(0,d.jsx)("div",{}),(0,d.jsx)("div",{}),(0,d.jsx)("div",{}),(0,d.jsx)("div",{}),(0,d.jsx)("div",{}),(0,d.jsx)("div",{}),(0,d.jsx)("div",{}),(0,d.jsx)("div",{}),(0,d.jsx)("div",{})]})})}},4987:function(d,b,a){"use strict";var e=a(5893),c=a(9008),f=a.n(c);a(7294);var g=a(8522);b.Z=function(a){var c=a.title,b=(0,g.Z)().favicon,d=a.metaDes;return(0,e.jsxs)(f(),{children:[(0,e.jsx)("title",{children:c}),(0,e.jsx)("meta",{name:"description",content:d}),(0,e.jsx)("link",{rel:"icon",href:"".concat(b?"https://colabyte.in/api"+b:"/favico.svg")})]})}},9008:function(a,c,b){a.exports=b(5443)},2703:function(a,e,b){"use strict";var f=b(414);function c(){}function d(){}d.resetWarningCache=c,a.exports=function(){function a(c,d,e,g,h,b){if(b!==f){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function b(){return a}a.isRequired=a;var e={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:b,element:a,elementType:a,instanceOf:b,node:a,objectOf:b,oneOf:b,oneOfType:b,shape:b,exact:b,checkPropTypes:d,resetWarningCache:c};return e.PropTypes=e,e}},5697:function(a,c,b){a.exports=b(2703)()},414:function(a){"use strict";a.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}])