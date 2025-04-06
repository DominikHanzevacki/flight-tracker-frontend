import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {IAirport, IAirportCreatePayload, IAirportEditPayload} from '@/interfaces/airports/interface';

const BASE_URL = import.meta.env.VITE_BACKEND_URL;
const VITE_AIRPORTS_TAG = import.meta.env.VITE_AIRPORTS_TAG;
export const airportsSlice = createApi({
  reducerPath: 'airportsSlice',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  tagTypes: [VITE_AIRPORTS_TAG],
  endpoints: (builder) => ({
    getAirports: builder.query<IAirport[], void>({
      query: () => 'airports',
      providesTags: [VITE_AIRPORTS_TAG],
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
      invalidatesTags: [VITE_AIRPORTS_TAG],
    }),
    editAirport: builder.mutation<IAirport, IAirportEditPayload>({
      query: ({id, body}) => ({
        url: `airports/${id}`,
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: [VITE_AIRPORTS_TAG],
    }),
    deleteAirport: builder.mutation<void, number>({
      query: (id) => ({
        url: `airports/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [VITE_AIRPORTS_TAG],
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
