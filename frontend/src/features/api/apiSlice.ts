// src/features/api/apiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { env } from '@/config/env/env.service';
import { User } from '@/features/users/types/user.type';
import { ProfileType } from '@/features/showcase/profile/mocks/defaultProfile';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: env.VITE_API_URL,
    credentials: 'include',
  }),
  tagTypes: ['User'], // adding the tag type
  endpoints: (builder) => ({
    // POST /api/login — sets a cookie, returns the profile
    signIn: builder.mutation<ProfileType, { email: string; password: string }>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['User'],
    }),

    registerUser: builder.mutation<User, { email: string; username: string; password: string }>({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body,
      }),
    }),

    // GET /api/profile — retrieves profile from cookie
    getUser: builder.query<ProfileType, void>({
      query: () => '/auth/profile',
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

export const { useSignInMutation, useGetUserQuery, useSignOutMutation, useRegisterUserMutation } =
  apiSlice;
