import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {IAirline, IAirlineCreatePayload, IAirlineEditPayload} from "@interfaces/airlines/interface";
import {AIRLINES_TAG} from "@constants/tags/tags";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;
export const airlinesSlice = createApi({
  reducerPath: 'airlinesSlice',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  tagTypes: [AIRLINES_TAG],
  endpoints: (builder) => ({
    getAirlines: builder.query<IAirline[], void>({
      query: () => 'airlines',
      providesTags: [AIRLINES_TAG],
    }),
    getAirlineById: builder.query<IAirline, number>({
      query: (id) => `airlines/${id}`,
    }),
    createAirline: builder.mutation<IAirline, IAirlineCreatePayload>({
      query: (body) => ({
        url: 'airlines',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: [AIRLINES_TAG],
    }),
    editAirline: builder.mutation<IAirline, IAirlineEditPayload>({
      query: ({id, body}) => ({
        url: `airlines/${id}`,
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: [AIRLINES_TAG],
    }),
    deleteAirline: builder.mutation<void, number>({
      query: (id) => ({
        url: `airlines/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [AIRLINES_TAG],
    })
  }),
});

export const {
  useGetAirlinesQuery,
  useGetAirlineByIdQuery,
  useCreateAirlineMutation,
  useEditAirlineMutation,
  useDeleteAirlineMutation
} = airlinesSlice;
