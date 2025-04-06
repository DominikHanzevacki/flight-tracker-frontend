import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {ICountry} from "@/interfaces/countries/interface";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;
const VITE_COUNTRIES_TAG = import.meta.env.VITE_COUNTRIES_TAG;
export const countriesSlice = createApi({
  reducerPath: 'countriesSlice',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  tagTypes: [VITE_COUNTRIES_TAG],
  endpoints: (builder) => ({
    getCountries: builder.query<ICountry[], void>({
      query: () => 'countries',
      providesTags: [VITE_COUNTRIES_TAG],
    }),
  }),
});

export const {useGetCountriesQuery} = countriesSlice;
