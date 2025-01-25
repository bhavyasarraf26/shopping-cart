import {configureStore} from "@reduxjs/toolkit";
import {CartSlice} from "./slices/CartSlice.js";
import cartReducer from "./slices/CartSlice.js";

export const Store = configureStore({
	reducer: {
		cart: CartSlice.reducer
	}
});