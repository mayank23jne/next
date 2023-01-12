"use strict";
exports.id = 7533;
exports.ids = [7533];
exports.modules = {

/***/ 9696:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Signup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3590);
/* harmony import */ var _utils_apiRequest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9808);
/* harmony import */ var _Helpers_InputCom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7528);
/* harmony import */ var _Helpers_Loaders_LoaderStyleOne__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1311);
/* harmony import */ var _Partials_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4790);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6681);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_4__, _Partials_Layout__WEBPACK_IMPORTED_MODULE_8__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_4__, _Partials_Layout__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function Signup() {
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12, ref13, ref14, ref15;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { websiteSetup  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)((state)=>state.websiteSetup);
    const { 0: fname , 1: setFname  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: lname , 1: setLname  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: confirmPassword , 1: setConfirmPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: checked , 1: setCheck  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: otp , 1: setOtp  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: errors , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: verify , 1: setVerify  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: signupView , 1: setSignupView  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: imgThumb , 1: setImgThumb  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (websiteSetup) {
            setImgThumb(websiteSetup.payload.image_content.login_image);
        }
    }, [
        websiteSetup
    ]);
    const rememberMe = ()=>{
        setCheck(!checked);
    };
    const doSignup = async ()=>{
        setLoading(true);
        await _utils_apiRequest__WEBPACK_IMPORTED_MODULE_5__/* ["default"].signup */ .Z.signup({
            name: fname + " " + lname,
            email: email,
            password: password,
            password_confirmation: confirmPassword,
            agree: checked ? 1 : ""
        }).then((res)=>{
            setLoading(false);
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(res.data.notification);
            router.push(`/verify-you?email=${email}`);
            setFname("");
            setLname("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setCheck(false);
        }).catch((err)=>{
            setLoading(false);
            setErrors(err.response && err.response.data.errors);
        });
    };
    const location = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (location.route === "/verify-you") {
            setVerify(true);
        } else {
            setSignupView(true);
        }
    }, [
        location
    ]);
    const doVerify = async ()=>{
        setLoading(true);
        await _utils_apiRequest__WEBPACK_IMPORTED_MODULE_5__/* ["default"].verification */ .Z.verification({
            email: location.query.email
        }, otp).then((res)=>{
            setLoading(false);
            if (res) {
                react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(res.data.notification);
                router.push("/login");
            }
        }).catch((err)=>{
            setLoading(false);
            if (err.response) {
                if (err.response.data.notification) {
                    react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(err.response.data.notification);
                } else {
                    return false;
                }
            } else {
                return false;
            }
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Partials_Layout__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        childrenClasses: "pt-0 pb-0",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "login-page-wrapper w-full py-10",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container-x mx-auto",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "lg:flex items-center relative w-full lg:min-h-[700px]",
                    children: [
                        verify ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "lg:w-[572px] w-full lg:h-[700px] bg-white flex flex-col justify-center sm:p-10 p-5 border border-[#E0E0E0]",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "title-area flex flex-col justify-center items-center relative text-center mb-7",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "text-[34px] font-bold leading-[74px] text-qblack",
                                                children: (ref = (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)()) === null || ref === void 0 ? void 0 : ref.Verify_You
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "shape -mt-6",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    width: "354",
                                                    height: "30",
                                                    viewBox: "0 0 354 30",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M1 28.8027C17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1",
                                                        stroke: "#FFBB38",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round"
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "input-area",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "input-item mb-5",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_InputCom__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                    placeholder: "* * * * * *",
                                                    label: (ref1 = (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)()) === null || ref1 === void 0 ? void 0 : ref1.OTP,
                                                    name: "otp",
                                                    type: "text",
                                                    inputClasses: "h-[50px]",
                                                    value: otp,
                                                    error: errors,
                                                    inputHandler: (e)=>setOtp(e.target.value.trim())
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "signin-area mb-3",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex justify-center",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                        disabled: otp ? false : true,
                                                        onClick: doVerify,
                                                        type: "button",
                                                        className: "black-btn disabled:bg-opacity-50 disabled:cursor-not-allowed w-full h-[50px] font-semibold flex justify-center bg-purple items-center",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-sm text-white block",
                                                                children: (ref2 = (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)()) === null || ref2 === void 0 ? void 0 : ref2.Verify
                                                            }),
                                                            loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "w-5 ",
                                                                style: {
                                                                    transform: "scale(0.3)"
                                                                },
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_Loaders_LoaderStyleOne__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }) : signupView ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "lg:w-[572px] w-full lg:h-auto bg-white flex flex-col justify-center sm:p-10 p-5 border border-[#E0E0E0]",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "title-area flex flex-col justify-center items-center relative text-center mb-7",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "text-[34px] font-bold leading-[74px] text-qblack",
                                                children: (ref3 = (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)()) === null || ref3 === void 0 ? void 0 : ref3.Create_Account
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "shape -mt-6",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    width: "354",
                                                    height: "30",
                                                    viewBox: "0 0 354 30",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M1 28.8027C17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1",
                                                        stroke: "#FFBB38",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round"
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "input-area",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "h-full",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_InputCom__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                                placeholder: (ref4 = (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)()) === null || ref4 === void 0 ? void 0 : ref4.Name,
                                                                label: ((ref5 = (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)()) === null || ref5 === void 0 ? void 0 : ref5.First_Name) + "*",
                                                                name: "fname",
                                                                type: "text",
                                                                inputClasses: "h-[50px]",
                                                                value: fname,
                                                                inputHandler: (e)=>setFname(e.target.value)
                                                            }),
                                                            errors && Object.hasOwn(errors, "name") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-sm mt-1 text-qred",
                                                                children: errors.name[0]
                                                            }) : ""
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "h-full",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_InputCom__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                                placeholder: (ref6 = (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)()) === null || ref6 === void 0 ? void 0 : ref6.Name,
                                                                label: ((ref7 = (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)()) === null || ref7 === void 0 ? void 0 : ref7.Last_Name) + "*",
                                                                name: "lname",
                                                                type: "text",
                                                                inputClasses: "h-[50px]",
                                                                value: lname,
                                                                inputHandler: (e)=>setLname(e.target.value)
                                                            }),
                                                            errors && Object.hasOwn(errors, "name") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-sm mt-1 text-qred",
                                                                children: errors.name[0]
                                                            }) : ""
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "input-item mb-5",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_InputCom__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                        placeholder: (ref8 = (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)()) === null || ref8 === void 0 ? void 0 : ref8.Email,
                                                        label: ((ref9 = (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)()) === null || ref9 === void 0 ? void 0 : ref9.Email_Address) + "*",
                                                        name: "email",
                                                        type: "email",
                                                        inputClasses: "h-[50px]",
                                                        value: email,
                                                        error: !!(errors && Object.hasOwn(errors, "email")),
                                                        inputHandler: (e)=>setEmail(e.target.value)
                                                    }),
                                                    errors && Object.hasOwn(errors, "email") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-sm mt-1 text-qred",
                                                        children: errors.email[0]
                                                    }) : ""
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "h-full",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_InputCom__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                                placeholder: "* * * * * *",
                                                                label: ((ref10 = (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)()) === null || ref10 === void 0 ? void 0 : ref10.Password) + "*",
                                                                name: "password",
                                                                type: "password",
                                                                inputClasses: "h-[50px]",
                                                                value: password,
                                                                inputHandler: (e)=>setPassword(e.target.value)
                                                            }),
                                                            errors && Object.hasOwn(errors, "password") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-sm mt-1 text-qred",
                                                                children: errors.password[0]
                                                            }) : ""
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "h-full",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_InputCom__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                                placeholder: "* * * * * *",
                                                                label: ((ref11 = (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)()) === null || ref11 === void 0 ? void 0 : ref11.Confirm_Password) + "*",
                                                                name: "confirm_password",
                                                                type: "password",
                                                                inputClasses: "h-[50px]",
                                                                value: confirmPassword,
                                                                inputHandler: (e)=>setConfirmPassword(e.target.value)
                                                            }),
                                                            errors && Object.hasOwn(errors, "password") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-sm mt-1 text-qred",
                                                                children: errors.password[0]
                                                            }) : ""
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "forgot-password-area mb-7",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "remember-checkbox flex items-center space-x-2.5",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            onClick: rememberMe,
                                                            type: "button",
                                                            className: "w-5 h-5 text-qblack flex justify-center items-center border border-light-gray",
                                                            children: checked && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                className: "h-5 w-5",
                                                                viewBox: "0 0 20 20",
                                                                fill: "currentColor",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    fillRule: "evenodd",
                                                                    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                                    clipRule: "evenodd"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "/seller-terms-condition",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-base text-black cursor-pointer",
                                                                children: (ref12 = (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)()) === null || ref12 === void 0 ? void 0 : ref12.I_agree_all_terms_and_condition_in_ecoShop
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "signin-area mb-3",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex justify-center",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                        onClick: doSignup,
                                                        type: "button",
                                                        disabled: checked ? false : true,
                                                        className: "black-btn disabled:bg-opacity-50 disabled:cursor-not-allowed w-full h-[50px] font-semibold flex justify-center bg-purple items-center",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-sm text-white block",
                                                                children: (ref13 = (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)()) === null || ref13 === void 0 ? void 0 : ref13.Create_Account
                                                            }),
                                                            loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "w-5 ",
                                                                style: {
                                                                    transform: "scale(0.3)"
                                                                },
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_Loaders_LoaderStyleOne__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "signup-area flex justify-center",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: "text-base text-qgraytwo font-normal",
                                                    children: [
                                                        (ref14 = (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)()) === null || ref14 === void 0 ? void 0 : ref14.Already_have_an_Account,
                                                        "?",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "/login",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "ml-2 text-qblack cursor-pointer ml-1",
                                                                children: (ref15 = (0,_Helpers_ServeLangItem__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)()) === null || ref15 === void 0 ? void 0 : ref15.Log_In
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }) : "",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex-1 lg:flex hidden transform scale-60 xl:scale-100 xl:justify-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute xl:-right-20 -right-[138px]",
                                style: {
                                    top: "calc(50% - 258px)"
                                },
                                children: imgThumb && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    width: 608,
                                    height: 480,
                                    src: `${"https://colabyte.in/api" + imgThumb}`,
                                    alt: "login"
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LoaderStyleOne)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function LoaderStyleOne() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "lds-spinner",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
            ]
        })
    });
};


/***/ }),

/***/ 4987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8522);




function PageHead(props) {
    const { title  } = props;
    const { favicon  } = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { metaDes  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: metaDes
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                href: `${favicon ? "https://colabyte.in/api" + favicon : "/favico.svg"}`
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHead);


/***/ })

};
;