// src/features/api/apiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ProfileType } from '@/features/showcase/profile/mocks/defaultProfile';

const BASE_URL =  'http://localhost:4000';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include', // to send cookies with requests
  }),
  tagTypes: ['User'], // adding the tag type
  endpoints: (builder) => ({
    // POST /api/login — sets a cookie, returns the profile
    signIn: builder.mutation<ProfileType, { email: string; password: string }>({
      query: (credentials) => ({
        url: '/api/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['User'], //  you can refresh the cache after login
    }),

    // GET /api/profile — retrieves profile from cookie
    getUser: builder.query<ProfileType, void>({
      query: () => '/api/profile',
      providesTags: ['User'], // indicates that the response is associated with a tag
    }),

    // POST /api/logout — delete cookie
    signOut: builder.mutation<void, void>({
      query: () => ({
        url: '/api/logout',
        method: 'POST',
      }),
      invalidatesTags: ['User'], // cache invalidation after release
    }),
  }),
});

export const { useSignInMutation, useGetUserQuery, useSignOutMutation } = apiSlice;
