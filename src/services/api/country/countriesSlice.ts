import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {ICountry} from "@/interfaces/countries/interface";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const countriesSlice = createApi({
  reducerPath: 'countriesSlice',
  baseQuery: fetchBaseQuery({baseUrl: backendUrl}),
  tagTypes: ['Countries'],
  endpoints: (builder) => ({
    getCountries: builder.query<ICountry[], void>({
      query: () => 'countries',
      providesTags: ['Countries'],
    }),
  }),
});

export const {useGetCountriesQuery} = countriesSlice;
