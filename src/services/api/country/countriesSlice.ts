import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {ICountry} from "@/interfaces/countries/interface";

export const countriesSlice = createApi({
  reducerPath: 'countriesSlice',
  baseQuery: fetchBaseQuery({baseUrl: '/api'}),
  tagTypes: ['Countries'],
  endpoints: (builder) => ({
    getCountries: builder.query<ICountry[], void>({
      query: () => 'countries',
      providesTags: ['Countries'],
    }),
  }),
});

export const {useGetCountriesQuery} = countriesSlice;
