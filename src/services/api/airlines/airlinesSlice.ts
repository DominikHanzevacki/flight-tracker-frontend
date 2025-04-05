import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {IAirline, IAirlineCreatePayload, IAirlineEditPayload} from "@/interfaces/airlines/interface";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const airlinesSlice = createApi({
  reducerPath: 'airlinesSlice',
  baseQuery: fetchBaseQuery({baseUrl: backendUrl}),
  tagTypes: ['Airlines'],
  endpoints: (builder) => ({
    getAirlines: builder.query<IAirline[], void>({
      query: () => 'airlines',
      providesTags: ['Airlines'],
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
      invalidatesTags: ['Airlines'],
    }),
    editAirline: builder.mutation<IAirline, IAirlineEditPayload>({
      query: ({id, body}) => ({
        url: `airlines/${id}`,
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: ['Airlines'],
    }),
    deleteAirline: builder.mutation<void, number>({
      query: (id) => ({
        url: `airlines/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Airlines'],
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
