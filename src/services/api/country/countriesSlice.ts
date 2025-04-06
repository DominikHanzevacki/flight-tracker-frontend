import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {ICountry} from "@interfaces/countries/interface";
import {COUNTRIES_TAG} from "@constants/tags/tags";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;
export const countriesSlice = createApi({
  reducerPath: 'countriesSlice',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  tagTypes: [COUNTRIES_TAG],
  endpoints: (builder) => ({
    getCountries: builder.query<ICountry[], void>({
      query: () => 'countries',
      providesTags: [COUNTRIES_TAG],
    }),
  }),
});

export const {useGetCountriesQuery} = countriesSlice;
