import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './CartSlice';
import productslice from './ProductSlice';


const Store = configureStore({
    reducer:{
        cart: cartSlice,
        product: productslice
    }
})

export default Store;