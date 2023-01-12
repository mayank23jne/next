"use strict";
exports.id = 626;
exports.ids = [626];
exports.modules = {

/***/ 6681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_languageModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9363);

function ServeLangItem() {
    const langCntnt = (0,_utils_languageModel__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    return langCntnt && langCntnt;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServeLangItem);


/***/ }),

/***/ 4178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "x7": () => (/* binding */ fetchCart)
/* harmony export */ });
/* unused harmony export cart */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5564);


//constant
const CART = "CART";
//intialState
const initialState = {
    cart: null,
    status: null
};
//fetch data from api
const fetchCart = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("CART/fetchCart", async ()=>{
    if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)()) {
        const res = await fetch(`${"https://colabyte.in/api"}api/cart?token=${(0,_utils_auth__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().access_token}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        return data;
    }
    return false;
});
//create action and reducer
const cart = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: CART,
    initialState,
    extraReducers: {
        [fetchCart.pending]: (state, action)=>{
            state.status = "loading";
        },
        [fetchCart.fulfilled]: (state, { payload  })=>{
            state.cart = payload;
            state.status = "success";
        },
        [fetchCart.rejected]: (state, action)=>{
            state.status = "failed";
        }
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart.reducer);


/***/ }),

/***/ 4994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BW": () => (/* binding */ fetchWishlist),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export wishlistAction */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5564);


const initialState = {
    wishlistData: null,
    status: null
};
const fetchWishlist = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("WISHLIST/fetchWishlist", async ()=>{
    if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)()) {
        const res = await fetch(`${"https://colabyte.in/api"}api/user/wishlist?token=${(0,_utils_auth__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().access_token}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        return data;
    }
    return false;
});
const wishlistAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "WISHLIST",
    initialState,
    extraReducers: {
        [fetchWishlist.pending]: (state, action)=>{
            state.status = "loading";
        },
        [fetchWishlist.fulfilled]: (state, { payload  })=>{
            state.wishlistData = payload, state.status = "success";
        },
        [fetchWishlist.rejected]: (state, action)=>{
            state.status = "failed";
        }
    }
});
// Action creators are generated for each case reducer function
// export const { SET_WISHLIST_ACTION } = wishlistAction.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wishlistAction.reducer);


/***/ }),

/***/ 5564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ auth)
/* harmony export */ });
function auth() {
    if (false) {}
    return false;
};


/***/ }),

/***/ 9363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ languageModel)
/* harmony export */ });
function languageModel() {
    if (false) {}
    return false;
};


/***/ })

};
;