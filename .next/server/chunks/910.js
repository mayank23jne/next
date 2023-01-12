"use strict";
exports.id = 910;
exports.ids = [910];
exports.modules = {

/***/ 6763:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductCardRowStyleOne)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3590);
/* harmony import */ var _utils_apiRequest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9808);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5564);
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(8522);
/* harmony import */ var _store_Cart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4178);
/* harmony import */ var _store_compareProduct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1839);
/* harmony import */ var _store_wishlistData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4994);
/* harmony import */ var _Shared_CheckProductIsExistsInFlashSale__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4339);
/* harmony import */ var _SingleProductPage_ProductView__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5827);
/* harmony import */ var _icons_Compair__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8263);
/* harmony import */ var _icons_QuickViewIco__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1880);
/* harmony import */ var _icons_Star__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(990);
/* harmony import */ var _icons_ThinLove__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2189);
/* harmony import */ var _ServeLangItem__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6681);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_7__, _SingleProductPage_ProductView__WEBPACK_IMPORTED_MODULE_13__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_7__, _SingleProductPage_ProductView__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















const Redirect = ()=>{
    var ref, ref1;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex space-x-2 items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "text-sm text-gray-500",
                children: (ref = (0,_ServeLangItem__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)()) === null || ref === void 0 ? void 0 : ref.Item_added
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: "/cart",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-xs border-b border-blue-600 text-blue-600 mr-2 cursor-pointer",
                    children: (ref1 = (0,_ServeLangItem__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)()) === null || ref1 === void 0 ? void 0 : ref1.Go_To_Cart
                })
            })
        ]
    });
};
function ProductCardRowStyleOne({ className , datas  }) {
    var ref;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
    const { wishlistData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.wishlistData);
    const wishlist = wishlistData && wishlistData.wishlists;
    const wishlisted = wishlist && wishlist.data.find((id)=>id.product.id === datas.id);
    const { 0: arWishlist , 1: setArWishlist  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (wishlisted) {
            setArWishlist(true);
        } else {
            setArWishlist(false);
        }
    }, [
        wishlisted
    ]);
    const addToWishlist = (id)=>{
        if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)()) {
            setArWishlist(true);
            _utils_apiRequest__WEBPACK_IMPORTED_MODULE_8__/* ["default"].addToWishlist */ .Z.addToWishlist({
                id: id,
                token: (0,_utils_auth__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)().access_token
            });
            dispatch((0,_store_wishlistData__WEBPACK_IMPORTED_MODULE_11__/* .fetchWishlist */ .BW)());
        } else {
            router.push("/login");
        }
    };
    const removeToWishlist = (id)=>{
        if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)()) {
            setArWishlist(false);
            _utils_apiRequest__WEBPACK_IMPORTED_MODULE_8__/* ["default"].removeToWishlist */ .Z.removeToWishlist({
                id: id,
                token: (0,_utils_auth__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)().access_token
            });
            dispatch((0,_store_wishlistData__WEBPACK_IMPORTED_MODULE_11__/* .fetchWishlist */ .BW)());
        } else {
            router.push("/login");
        }
    };
    //cart
    const varients = datas && datas.variants.length > 0 && datas.variants;
    const { 0: getFirstVarients , 1: setFirstVarients  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(varients && varients.map((v)=>v.active_variant_items[0]));
    const { 0: price , 1: setPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    const { 0: offerPrice , 1: setOffer  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    const addToCart = (id)=>{
        if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)()) {
            const data = {
                id: id,
                token: (0,_utils_auth__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)() && (0,_utils_auth__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)().access_token,
                quantity: 1,
                variants: getFirstVarients && getFirstVarients.length > 0 && getFirstVarients.map((v)=>v ? parseInt(v.product_variant_id) : null),
                variantItems: getFirstVarients && getFirstVarients.length > 0 && getFirstVarients.map((v)=>v ? v.id : null)
            };
            if (varients) {
                const variantQuery = data.variants.map((value, index)=>{
                    return value ? `variants[]=${value}` : `variants[]=-1`;
                });
                const variantString = variantQuery.map((value)=>value + "&").join("");
                const itemsQuery = data.variantItems.map((value, index)=>{
                    return value ? `items[]=${value}` : `items[]=-1`;
                });
                const itemQueryStr = itemsQuery.map((value)=>value + "&").join("");
                const uri = `token=${data.token}&product_id=${data.id}&${variantString}${itemQueryStr}quantity=${data.quantity}`;
                _utils_apiRequest__WEBPACK_IMPORTED_MODULE_8__/* ["default"].addToCard */ .Z.addToCard(uri).then((res)=>react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Redirect, {}), {
                        autoClose: 5000
                    })).catch((err)=>{
                    react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(err.response && err.response.data.message && err.response.data.message);
                });
                dispatch((0,_store_Cart__WEBPACK_IMPORTED_MODULE_9__/* .fetchCart */ .x7)());
            } else {
                const uri1 = `token=${data.token}&product_id=${data.id}&quantity=${data.quantity}`;
                _utils_apiRequest__WEBPACK_IMPORTED_MODULE_8__/* ["default"].addToCard */ .Z.addToCard(uri1).then((res)=>react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Redirect, {}), {
                        autoClose: 5000
                    })).catch((err)=>{
                    react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(err.response && err.response.data.message && err.response.data.message);
                });
                dispatch((0,_store_Cart__WEBPACK_IMPORTED_MODULE_9__/* .fetchCart */ .x7)());
            }
        } else {
            router.push("/login");
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (varients) {
            const prices = varients.map((v)=>v.active_variant_items.length > 0 && v.active_variant_items[0].price ? v.active_variant_items[0].price : 0);
            if (datas.offer_price) {
                const sumOfferPrice = parseFloat(prices.reduce((prev, curr)=>parseInt(prev) + parseInt(curr), 0) + parseFloat(datas.offer_price));
                setPrice(datas.price);
                setOffer(sumOfferPrice);
            } else {
                const sumPrice = parseFloat(prices.reduce((prev, curr)=>parseInt(prev) + parseInt(curr), 0) + parseFloat(datas.price));
                setPrice(sumPrice);
            }
        } else {
            setPrice(datas && datas.price);
            setOffer(datas && datas.offer_price);
        }
    }, [
        datas,
        varients
    ]);
    const { currency_icon  } = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)();
    /*compare product feature
   * add product for compare method
   * @params (id,token)
   * request method is (apiRequest)
   * */ const productCompare = (id)=>{
        if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)()) {
            _utils_apiRequest__WEBPACK_IMPORTED_MODULE_8__/* ["default"].addProductForCompare */ .Z.addProductForCompare(id, (0,_utils_auth__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)().access_token).then((res)=>{
                react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success(res.data && res.data.notification);
                dispatch((0,_store_compareProduct__WEBPACK_IMPORTED_MODULE_10__/* .fetchCompareProducts */ .rh)());
            }).catch((err)=>{
                react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(err.response && err.response.data.notification);
                console.log(err);
            });
        } else {
            router.push("/login");
        }
    };
    //quick view feature
    const { 0: quickViewModal , 1: setQuickView  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { 0: quickViewData , 1: setQuickViewData  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    const quickViewHandler = (slug)=>{
        setQuickView(!quickViewModal);
        if (!quickViewData) {
            axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${"https://colabyte.in/api"}api/product/${slug}`).then((res)=>{
                setQuickViewData(res.data ? res.data : null);
            }).catch((err)=>{
                console.log(err);
            });
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (quickViewModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return ()=>{
            document.body.style.overflow = "unset";
        };
    }, [
        quickViewModal
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "main-wrapper-card relative",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                "data-aos": "fade-left",
                className: `product-row-card-style-one  w-full lg:h-[250px] h-[200px] bg-white group relative overflow-hidden ${className || ""}`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex space-x-5 items-center w-full h-full lg:p-[30px] sm:p-5 p-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "lg:w-1/2 w-1/3 h-full relative transform scale-100 group-hover:scale-110 transition duration-300 ease-in-ou",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    layout: "fill",
                                    objectFit: "scale-down",
                                    src: `${datas.image}`,
                                    alt: "",
                                    className: "w-full h-full object-contain"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex-1 flex flex-col justify-center h-full",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex space-x-1 mb-3",
                                            children: [
                                                Array.from(Array(datas.review), ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_Star__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {})
                                                    }, datas.review + Math.random())),
                                                datas.review < 5 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: Array.from(Array(5 - datas.review), ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-gray-500",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_Star__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                                                defaultValue: false
                                                            })
                                                        }, datas.review + Math.random()))
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: {
                                                pathname: "/single-product",
                                                query: {
                                                    slug: datas.slug
                                                }
                                            },
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "title mb-2 sm:text-[15px] text-[13px] font-600 text-qblack leading-[24px] line-clamp-2 hover:text-blue-600 cursor-pointer",
                                                    children: datas.title
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "price mb-[26px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    suppressHydrationWarning: true,
                                                    className: `main-price  font-600 text-[18px] ${offerPrice ? "line-through text-qgray" : "text-qred"}`,
                                                    children: offerPrice ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: currency_icon && currency_icon + price
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shared_CheckProductIsExistsInFlashSale__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                        id: datas.id,
                                                        price: price
                                                    })
                                                }),
                                                offerPrice && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    suppressHydrationWarning: true,
                                                    className: "offer-price text-qred font-600 text-[18px] ml-2",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shared_CheckProductIsExistsInFlashSale__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                        id: datas.id,
                                                        price: offerPrice
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>addToCart(datas.id),
                                            type: "button",
                                            className: "w-[110px] h-[30px]",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "yellow-btn",
                                                children: (ref = (0,_ServeLangItem__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)()) === null || ref === void 0 ? void 0 : ref.Add_To_Cart
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "quick-access-btns flex flex-col space-y-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: " absolute group-hover:left-4 -left-10 top-5 transition-all ease-in-out",
                                type: "button",
                                onClick: ()=>quickViewHandler(datas.slug),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "w-10 h-10 flex justify-center text-black hover:text-white items-center transition-all duration-300 ease-in-out hover:bg-qyellow bg-primarygray rounded",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_QuickViewIco__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                        className: "fill-current"
                                    })
                                })
                            }),
                            !arWishlist ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: " absolute group-hover:left-4 -left-10 top-[60px] duration-300 transition-all ease-in-out",
                                type: "button",
                                onClick: ()=>addToWishlist(datas.id),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "w-10 h-10 flex text-black hover:text-white justify-center items-center transition-all duration-300 ease-in-out hover:bg-qyellow bg-primarygray rounded",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ThinLove__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                        className: "fill-current"
                                    })
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: " absolute group-hover:left-4 -left-10 top-[60px] duration-300 transition-all ease-in-out",
                                type: "button",
                                onClick: ()=>removeToWishlist(wishlisted && wishlisted.id),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "w-10 h-10 flex justify-center items-center bg-primarygray rounded",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ThinLove__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                        fill: true
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: " absolute group-hover:left-4 -left-10 top-[107px] transition-all duration-500 ease-in-out",
                                type: "button",
                                onClick: ()=>productCompare(datas.id),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "w-10 h-10 flex justify-center text-black hover:text-white transition-all duration-300 ease-in-out items-center hover:bg-qyellow bg-primarygray rounded",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_Compair__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})
                                })
                            })
                        ]
                    }),
                    quickViewModal && quickViewData && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "quicke-view-wrapper w-full h-full flex fixed left-0 top-0 justify-center z-50 items-center ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: ()=>setQuickView(!quickViewModal),
                                className: "w-full h-full fixed left-0 right-0 bg-black bg-opacity-25"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                "data-aos": "fade-up",
                                className: "md:mx-10 xl:mt-[100px] rounded w-full bg-white relative lg:py-[40px] pt-[80px] pb-[40px] sm:px-[38px] px-3 md:mt-12 h-full overflow-y-scroll xl:overflow-hidden xl:mt-0 ",
                                style: {
                                    zIndex: "999"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-full h-full overflow-y-scroll overflow-style-none",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SingleProductPage_ProductView__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                            images: quickViewData.gellery.length > 0 ? quickViewData.gellery : [],
                                            product: quickViewData.product
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>setQuickView(!quickViewModal),
                                        type: "button",
                                        className: "absolute right-3 top-3",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-red-500 w-12 h-12 flex justify-center items-center rounded border border-qred",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                strokeWidth: "1.5",
                                                stroke: "currentColor",
                                                className: "w-10 h-10",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M6 18L18 6M6 6l12 12"
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "anim bottom"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "anim right"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "anim top"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "anim left"
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8418);
/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6681);




function OneColumnAdsTwo({ data  }) {
    var ref;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `one-column-ads-one sm:h-[166px] h-[100px] w-full`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            "data-aos": "fade-right",
            style: {
                backgroundImage: `url(${"https://colabyte.in/api" + data.image})`,
                backgroundSize: `cover`,
                backgroundRepeat: `no-repeat`
            },
            className: "w-full h-full flex justify-center items-center md:pl-[80px] pl-3 md:py-[40px] py-4 group",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full h-full flex flex-col justify-evenly",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "md:text-[30px] text-[20px] md:leading-[40px] font-semibold",
                                children: data.title_one
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-[90px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_client_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: {
                                pathname: "/products",
                                query: {
                                    category: data.product_slug
                                }
                            },
                            passHref: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "cursor-pointer w-full relative ",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "inline-flex text-qred space-x-1.5 items-center relative z-20",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-sm font-semibold leading-[30px]",
                                                    children: (ref = (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)()) === null || ref === void 0 ? void 0 : ref.Shop_Now
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "leading-[30px]",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                        width: "7",
                                                        height: "11",
                                                        viewBox: "0 0 7 11",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "fill-current",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                x: "2.08984",
                                                                y: "0.636719",
                                                                width: "6.94219",
                                                                height: "1.54271",
                                                                transform: "rotate(45 2.08984 0.636719)"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                x: "7",
                                                                y: "5.54492",
                                                                width: "6.94219",
                                                                height: "1.54271",
                                                                transform: "rotate(135 7 5.54492)"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-[82px] transition-all duration-300 ease-in-out group-hover:h-4 h-[0px] bg-qyellow absolute left-0 bottom-0 z-10"
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OneColumnAdsTwo);


/***/ })

};
;