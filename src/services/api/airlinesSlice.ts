import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {IAirlineCreatePayload, IAirlineEditPayload, IAirlines} from "@/interfaces/airlines/interface";

export const airlinesSlice = createApi({
  reducerPath: 'airlinesSlice',
  baseQuery: fetchBaseQuery({baseUrl: '/api'}),
  tagTypes: ['Airlines'],
  endpoints: (builder) => ({
    getAirlines: builder.query<IAirlines[], void>({
      query: () => 'airlines',
      providesTags: ['Airlines'],
    }),
    getAirlineById: builder.query<IAirlines, number>({
      query: (id) => `airlines/${id}`,
    }),
    createAirline: builder.mutation<IAirlines, IAirlineCreatePayload>({
      query: (body) => ({
        url: 'airlines',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Airlines'],
    }),
    editAirline: builder.mutation<IAirlines, IAirlineEditPayload>({
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
