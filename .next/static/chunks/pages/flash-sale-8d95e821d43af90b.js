(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[300],{2816:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/flash-sale",function(){return c(8589)}])},8589:function(c,b,a){"use strict";a.r(b),a.d(b,{"__N_SSP":function(){return m},default:function(){return n}});var d=a(5893);a(7294);var e=a(5798),f=a(3402),g=a(8650),h=a(1077),i=a(6681),j=function(h){var b,c,e,g,j=h.endTime,a=(0,f.Z)("".concat(j)),k=a.showDate,l=a.showHour,m=a.showMinute,n=a.showSecound;return(0,d.jsx)("div",{className:"sm:mr-[75px]",children:(0,d.jsxs)("div",{className:"countdown-wrapper w-full flex sm:space-x-6 space-x-3 sm:justify-between justify-evenly",children:[(0,d.jsxs)("div",{className:"countdown-item",children:[(0,d.jsx)("div",{className:"countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center",children:(0,d.jsx)("span",{className:"font-700 sm:text-[30px] text-base text-[#EB5757]",children:k})}),(0,d.jsx)("p",{className:"sm:text-[18px] text-xs font-500 text-center leading-8 text-white",children:null===(b=(0,i.Z)())|| void 0===b?void 0:b.Days})]}),(0,d.jsxs)("div",{className:"countdown-item",children:[(0,d.jsx)("div",{className:"countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center",children:(0,d.jsx)("span",{className:"font-700 sm:text-[30px] text-base text-[#2F80ED]",children:l})}),(0,d.jsx)("p",{className:"sm:text-[18px] text-xs font-500 text-center leading-8 text-white",children:null===(c=(0,i.Z)())|| void 0===c?void 0:c.Hours})]}),(0,d.jsxs)("div",{className:"countdown-item",children:[(0,d.jsx)("div",{className:"countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center",children:(0,d.jsx)("span",{className:"font-700 sm:text-[30px] text-base text-[#219653]",children:m})}),(0,d.jsx)("p",{className:"sm:text-[18px] text-xs font-500 text-center leading-8 text-white",children:null===(e=(0,i.Z)())|| void 0===e?void 0:e.Minutes})]}),(0,d.jsxs)("div",{className:"countdown-item",children:[(0,d.jsx)("div",{className:"countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center",children:(0,d.jsx)("span",{className:"font-700 sm:text-[30px] text-base text-[#EF5DA8]",children:n})}),(0,d.jsx)("p",{className:"sm:text-[18px] text-xs font-500 text-center leading-8 text-white",children:null===(g=(0,i.Z)())|| void 0===g?void 0:g.Seconds})]})]})})};function k(c){var a=c.fetchData,b=a.products&&a.products.data.length>0&&a.products.data.map(function(a){return{id:a.id,category_id:a.category_id,title:a.name,slug:a.slug,image:"https://colabyte.in/api"+a.thumb_image,price:a.price,offer_price:a.offer_price,campaingn_product:null,review:parseInt(a.averageRating),variants:a.active_variants?a.active_variants:[]}});return(0,d.jsx)(h.Z,{children:(0,d.jsx)("div",{className:"flashsale-wrapper w-full",children:(0,d.jsx)("div",{className:"container-x mx-auto",children:(0,d.jsxs)("div",{className:"w-full",children:[(0,d.jsx)("div",{style:{backgroundImage:"url(".concat("https://colabyte.in/api"+a.flashSale.flashsale_page_image,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat"},"data-aos":"fade-right",className:"flash-ad w-full h-[400px] flex sm:justify-end justify-center items-center mb-10",children:(0,d.jsx)(j,{endTime:a.flashSale.end_time})}),(0,d.jsx)("div",{className:"products grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5",children:(0,d.jsx)(g.Z,{datas:b,startLength:0,endLength:b.length,children:function(b){var a=b.datas;return(0,d.jsx)("div",{"data-aos":"fade-up",className:"item",children:(0,d.jsx)(e.Z,{datas:a})},a.id)}})})]})})})})}var l=a(4987),m=!0;function n(a){var b=a.data.seoSetting;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.Z,{title:"".concat(b.seo_title),metaDes:b.seo_description}),(0,d.jsx)(k,{fetchData:a.data})]})}},3402:function(c,a,b){"use strict";var d=b(7294);a.Z=function(g){var b=(0,d.useState)(0),h=b[0],m=b[1],c=(0,d.useState)(0),i=c[0],n=c[1],e=(0,d.useState)(0),j=e[0],o=e[1],f=(0,d.useState)(0),k=f[0],p=f[1],a=new Date(g),q=a.getFullYear(),r=a.getMonth(),s=a.getDate(),t=a.getHours(),u=a.getMinutes(),v=a.getSeconds(),l=36e5,w=24*l,x=function(){var a=setInterval(function(){var c=new Date,b=new Date(q,r,s,t,u,v).getTime()-c.getTime();if(b<0){clearInterval(a);return}m(Math.floor(b/w)),o(Math.floor(b%l/6e4)),n(Math.floor(b%w/l)),p(Math.floor(b%6e4/1e3))},1e3)};return(0,d.useEffect)(function(){""!==g&&x()}),{showDate:h,showHour:i,showMinute:j,showSecound:k}}}},function(a){a.O(0,[235,77,995,774,888,179],function(){var b;return a(a.s=2816)}),_N_E=a.O()}])