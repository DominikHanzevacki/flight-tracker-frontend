import {configureStore} from '@reduxjs/toolkit';
import {airlinesSlice} from '../api/airlinesSlice';
import {countriesSlice} from "@services/api/country/countriesSlice";

export const store = configureStore({
  reducer: {
    [airlinesSlice.reducerPath]: airlinesSlice.reducer,
    [countriesSlice.reducerPath]: countriesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(airlinesSlice.middleware, countriesSlice.middleware),
});
