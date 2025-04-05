import {configureStore} from '@reduxjs/toolkit';
import {airlinesSlice} from '../api/airlines/airlinesSlice';
import {countriesSlice} from "@services/api/country/countriesSlice";
import {airportsSlice} from "@services/api/airports/airportsSlice";

export const store = configureStore({
  reducer: {
    [airlinesSlice.reducerPath]: airlinesSlice.reducer,
    [airportsSlice.reducerPath]: airportsSlice.reducer,
    [countriesSlice.reducerPath]: countriesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(airlinesSlice.middleware, countriesSlice.middleware, airportsSlice.middleware),
});
