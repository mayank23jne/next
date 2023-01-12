(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 8510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(303);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2765);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4563);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9783);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_components_Helpers_Toaster__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(530);
/* harmony import */ var _src_components_Partials_DefaultLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6646);
/* harmony import */ var _src_store_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7245);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(808);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_components_Partials_Headers_MaintenanceWrapper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4574);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__, _src_components_Helpers_Toaster__WEBPACK_IMPORTED_MODULE_8__]);
([_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__, _src_components_Helpers_Toaster__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















/*page loader
 *package name:nProgress
 * github: https://github.com/rstacruz/nprogress */ 
 //nprogress module


//Binding events.
next_router__WEBPACK_IMPORTED_MODULE_11___default().events.on("routeChangeStart", ()=>nprogress__WEBPACK_IMPORTED_MODULE_12___default().start());
next_router__WEBPACK_IMPORTED_MODULE_11___default().events.on("routeChangeComplete", ()=>nprogress__WEBPACK_IMPORTED_MODULE_12___default().done());
next_router__WEBPACK_IMPORTED_MODULE_11___default().events.on("routeChangeError", ()=>nprogress__WEBPACK_IMPORTED_MODULE_12___default().done());
//page loader end
//font awesome
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__.library.add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.fas, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.fab, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__.far);
function MyApp({ Component , pageProps  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        aos__WEBPACK_IMPORTED_MODULE_5___default().init();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_7__.Provider, {
                store: _src_store_store__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Partials_DefaultLayout__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Partials_Headers_MaintenanceWrapper__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Helpers_Toaster__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 530:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Toaster)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_2__]);
react_toastify__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function Toaster() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {})
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ DefaultLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/store/Cart.js
var Cart = __webpack_require__(4178);
// EXTERNAL MODULE: ./src/store/compareProduct.js
var compareProduct = __webpack_require__(1839);
// EXTERNAL MODULE: ./src/store/websiteSetup.js
var store_websiteSetup = __webpack_require__(5824);
// EXTERNAL MODULE: ./src/store/wishlistData.js
var wishlistData = __webpack_require__(4994);
;// CONCATENATED MODULE: external "tawkto-react"
const external_tawkto_react_namespaceObject = require("tawkto-react");
var external_tawkto_react_default = /*#__PURE__*/__webpack_require__.n(external_tawkto_react_namespaceObject);
;// CONCATENATED MODULE: external "cookies-next"
const external_cookies_next_namespaceObject = require("cookies-next");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Helpers/ServeLangItem.js
var ServeLangItem = __webpack_require__(6681);
;// CONCATENATED MODULE: ./src/components/Helpers/Consent.jsx






function Consent() {
    var ref, ref1, ref2;
    const { websiteSetup  } = (0,external_react_redux_.useSelector)((state)=>state.websiteSetup);
    const { 0: consent , 1: setConsent  } = (0,external_react_.useState)(true);
    const { 0: consentData , 1: setConsentData  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        if (websiteSetup) {
            if (!consentData) {
                setConsentData(websiteSetup === null || websiteSetup === void 0 ? void 0 : websiteSetup.payload.cookie_consent);
            }
        }
    }, [
        consentData,
        websiteSetup
    ]);
    (0,external_react_.useEffect)(()=>{
        setConsent((0,external_cookies_next_namespaceObject.hasCookie)("localConsent"));
    }, []);
    const acceptCookie = ()=>{
        setConsent(true);
        (0,external_cookies_next_namespaceObject.setCookie)("localConsent", "true", {
            maxAge: 60 * 60 * 24 * 365
        });
        console.log("accepring cookies");
    };
    const closeP = ()=>{
        setConsent(true);
        console.log("closing");
    };
    const denyCookie = ()=>{
        setConsent(true);
        (0,external_cookies_next_namespaceObject.setCookie)("localConsent", "false", {
            maxAge: 60 * 60 * 24 * 365
        });
        console.log("denying cookie");
    };
    if (consent === true) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: consentData && /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "fixed md:w-[420px] w-full h-[260px] rounded bg-white shadow md:left-8 md:bottom-8 left-0 bottom-0 p-7",
            style: {
                boxShadow: "rgb(0 0 0 / 14%) 0px 15px 50px 0px",
                zIndex: "9999999999"
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full h-full flex flex-col justify-between relative",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "text-base text-qgray line-clamp-4",
                                children: consentData.message
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/privacy-policy",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: "text-sm text-blue-500 cursor-pointer",
                                    children: [
                                        (ref = (0,ServeLangItem/* default */.Z)()) === null || ref === void 0 ? void 0 : ref.Read_more,
                                        "..."
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex space-x-4 items-center h-[42px]",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: ()=>{
                                    acceptCookie();
                                },
                                type: "button",
                                className: "w-1/2 h-full rounded text-base font-bold bg-qyellow text-qblack antialiased tracking-wide",
                                children: (ref1 = (0,ServeLangItem/* default */.Z)()) === null || ref1 === void 0 ? void 0 : ref1.Accept_All
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: (e)=>denyCookie(),
                                type: "button",
                                className: "w-1/2 h-full rounded text-base font-bold bg-qyellowlow text-qblack antialiased tracking-wide",
                                children: (ref2 = (0,ServeLangItem/* default */.Z)()) === null || ref2 === void 0 ? void 0 : ref2.Deny
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: (e)=>{
                            closeP();
                        },
                        type: "button",
                        className: "text-qred absolute -right-16 -top-10",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: "1.5",
                            stroke: "currentColor",
                            className: "w-6 h-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M6 18L18 6M6 6l12 12"
                            })
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const Helpers_Consent = (Consent);

// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./utils/languageModel.js
var languageModel = __webpack_require__(9363);
;// CONCATENATED MODULE: ./src/components/Partials/DefaultLayout.jsx












// import Language from "../../data/Language.json"

function DefaultLayout({ children  }) {
    const router = (0,router_.useRouter)();
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { websiteSetup  } = (0,external_react_redux_.useSelector)((state)=>state.websiteSetup);
    const { 0: twkData , 1: setTwkData  } = (0,external_react_.useState)(null);
    const { 0: gtagId , 1: setgTagId  } = (0,external_react_.useState)(null);
    const { 0: fbPixexl , 1: setFbPixel  } = (0,external_react_.useState)(null);
    const { 0: load , 1: setLoad  } = (0,external_react_.useState)(true);
    const apiFetch = ()=>{
        external_axios_default().get(`${"https://colabyte.in/api"}api/website-setup`).then((res)=>{
            // handle success
            dispatch((0,store_websiteSetup/* setupAction */.T)(res.data));
            localStorage.setItem("settings", JSON.stringify(res.data && res.data.setting));
            if (res.data) {
                setgTagId(res.data.googleAnalytic.analytic_id);
                setTwkData({
                    widgetId: res.data.tawk_setting.widget_id,
                    propertyId: res.data.tawk_setting.property_id
                });
                setFbPixel(res.data.facebookPixel);
                localStorage.setItem("language", JSON.stringify(res.data.language));
                const checkLangExists = localStorage.getItem("language");
                if (checkLangExists) {
                    setLoad(false);
                }
            }
        }).catch((error)=>{
            // handle error
            console.log(error);
        });
        dispatch((0,wishlistData/* fetchWishlist */.BW)());
    };
    (0,external_react_.useEffect)(()=>{
        !websiteSetup ? apiFetch() : false;
        dispatch((0,Cart/* fetchCart */.x7)());
        dispatch((0,compareProduct/* fetchCompareProducts */.rh)());
        if ((0,languageModel/* default */.Z)()) {
            setLoad(false);
        }
    }, [
        websiteSetup,
        apiFetch,
        dispatch
    ]);
    (0,external_react_.useEffect)(()=>{
        if (twkData) {
            let tawk = new (external_tawkto_react_default())(`${twkData.widgetId}`, `${twkData.propertyId}`);
            tawk.onStatusChange((status)=>{
                console.log(status);
            });
        }
    }, [
        twkData
    ]);
    (0,external_react_.useEffect)(()=>{
        if (fbPixexl) {
            Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 9578, 23)).then((x)=>x.default).then((ReactPixel)=>{
                ReactPixel.init(`${fbPixexl.app_id}`); // facebookPixelId
                ReactPixel.pageView();
                router.events.on("routeChangeComplete", ()=>{
                    ReactPixel.pageView();
                });
            });
        }
    }, [
        fbPixexl,
        router.events
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            gtagId && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                        src: `https://www.googletagmanager.com/gtag/js?id=${gtagId}`,
                        strategy: "afterInteractive"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                        id: "google-analytics",
                        strategy: "afterInteractive",
                        children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gtagId}');
        `
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: !load && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Helpers_Consent, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: children && children
                        })
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 4574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Headers_MaintenanceWrapper)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/Maintain.jsx




// import settings from "../../utils/settings";
function Maintain() {
    const { websiteSetup  } = (0,external_react_redux_.useSelector)((state)=>state.websiteSetup);
    const { 0: maintain , 1: setMaintain  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        if (websiteSetup) {
            setMaintain(websiteSetup === null || websiteSetup === void 0 ? void 0 : websiteSetup.payload.maintainance_text);
        }
    }, [
        websiteSetup
    ]);
    // const { logo } = settings();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "w-full h-screen flex justify-center items-center",
            children: maintain && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: " text-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mb-5",
                        children: maintain && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            width: "153",
                            height: "44",
                            objectFit: "scale-down",
                            src: `${"https://colabyte.in/api" + maintain.image}`,
                            alt: "logo"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full flex justify-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-center text-3xl text-tblack w-4/5 font-bold",
                            children: maintain.description
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const components_Maintain = (Maintain);

;// CONCATENATED MODULE: ./Middleware/isMaintainance.js

/* eslint-disable react/display-name */ 



const isMaintainance = (WrappedComponent)=>{
    return (props)=>{
        const Router = (0,router_.useRouter)();
        const { websiteSetup  } = (0,external_react_redux_.useSelector)((state)=>state.websiteSetup);
        const { 0: mode , 1: setMode  } = (0,external_react_.useState)(null);
        (0,external_react_.useEffect)(()=>{
            if (websiteSetup) {
                if (websiteSetup.payload) {
                    if (websiteSetup.payload.maintainance) {
                        setMode(parseInt(websiteSetup.payload.maintainance.status));
                    }
                }
            }
        });
        // useEffect(() => {
        //   if (mode === 1) {
        //     Router.replace("/maintenance");
        //   } else {
        //     return;
        //   }
        // }, [Router, mode]);
        if (mode === 0) {
            return /*#__PURE__*/ jsx_runtime_.jsx(WrappedComponent, {
                ...props
            });
        } else if (mode === 1) {
            return /*#__PURE__*/ jsx_runtime_.jsx(components_Maintain, {});
        } else {
            return false;
        }
    };
};
/* harmony default export */ const Middleware_isMaintainance = (isMaintainance);

;// CONCATENATED MODULE: ./src/components/Partials/Headers/MaintenanceWrapper.jsx



function MaintenanceWrapper({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: children && children
    });
}
/* harmony default export */ const Headers_MaintenanceWrapper = (Middleware_isMaintainance(MaintenanceWrapper));


/***/ }),

/***/ 7245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _websiteSetup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5824);
/* harmony import */ var _wishlistData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4994);
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4178);
/* harmony import */ var _compareProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1839);





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: {
        websiteSetup: _websiteSetup__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP,
        wishlistData: _wishlistData__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP,
        cart: _Cart__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP,
        compareProducts: _compareProduct__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP
    }
}));


/***/ }),

/***/ 5824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ setupAction),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export websiteSetup */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    websiteSetup: null
};
const websiteSetup = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "website-setup",
    initialState,
    reducers: {
        setupAction: (state, payload)=>{
            state.websiteSetup = payload;
        }
    }
});
// Action creators are generated for each case reducer function
const { setupAction  } = websiteSetup.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (websiteSetup.reducer);


/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 4298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(699)


/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 9783:
/***/ ((module) => {

"use strict";
module.exports = require("aos");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 808:
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9578:
/***/ ((module) => {

"use strict";
module.exports = require("react-facebook-pixel");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 86:
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/fontawesome-svg-core");;

/***/ }),

/***/ 303:
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/free-brands-svg-icons");;

/***/ }),

/***/ 2765:
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/free-regular-svg-icons");;

/***/ }),

/***/ 4563:
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2952,3061,626,1839], () => (__webpack_exec__(8510)));
module.exports = __webpack_exports__;

})();