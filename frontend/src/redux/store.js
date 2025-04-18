import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./slice/authSlice"
import productReducer from "./slice/productSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer,
    }
})

export default store;
