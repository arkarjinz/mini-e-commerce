import {configureStore} from "@reduxjs/toolkit";
import ProductsReducer from "./productsSlice";
import CartReducer from "./cartSlice";

export const store = configureStore({
    reducer : {
        products: ProductsReducer,
        cart: CartReducer
    }
})