import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {IAirport, IAirportCreatePayload, IAirportEditPayload} from '@/interfaces/airports/interface';

const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const airportsSlice = createApi({
  reducerPath: 'airportsSlice',
  baseQuery: fetchBaseQuery({baseUrl: backendUrl}),
  tagTypes: ['Airports'],
  endpoints: (builder) => ({
    getAirports: builder.query<IAirport[], void>({
      query: () => 'airports',
      providesTags: ['Airports'],
    }),
    getAirportById: builder.query<IAirport, number>({
      query: (id) => `airports/${id}`,
    }),
    createAirport: builder.mutation<IAirport, IAirportCreatePayload>({
      query: (body) => ({
        url: 'airports',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Airports'],
    }),
    editAirport: builder.mutation<IAirport, IAirportEditPayload>({
      query: ({id, body}) => ({
        url: `airports/${id}`,
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: ['Airports'],
    }),
    deleteAirport: builder.mutation<void, number>({
      query: (id) => ({
        url: `airports/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Airports'],
    })
  }),
});

export const {
  useGetAirportsQuery,
  useGetAirportByIdQuery,
  useCreateAirportMutation,
  useEditAirportMutation,
  useDeleteAirportMutation
} = airportsSlice;
