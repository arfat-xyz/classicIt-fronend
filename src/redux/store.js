import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import { productApi } from "./product/productSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
