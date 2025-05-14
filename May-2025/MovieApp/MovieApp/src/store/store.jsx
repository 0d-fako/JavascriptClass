import { configureStore } from "@reduxjs/toolkit";
import { userAuthApiSlice } from "../service/userAuthApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { movieAPI } from "../service/movieAPI";

const store = configureStore({
  reducer: {
    [userAuthApiSlice.reducerPath]: userAuthApiSlice.reducer,
    [movieAPI.reducerPath]: movieAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userAuthApiSlice.middleware,
      movieAPI.middleware
    ),
});

setupListeners(store.dispatch);
export default store;
