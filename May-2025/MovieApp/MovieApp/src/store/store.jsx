import {configureStore} from '@reduxjs/toolkit';
import { userAuthApiSlice } from '../service/userAuthApi';
import { setupListeners } from '@reduxjs/toolkit/query';
 
const store = configureStore({
    reducer: {
        [userAuthApiSlice.reducerPath]: userAuthApiSlice.reducer,
        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAuthApiSlice.middleware),
});

setupListeners(store.dispatch);
export default store;