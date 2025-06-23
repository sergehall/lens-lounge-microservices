// src/features/api/apiSlice.ts
import { env } from '@/config/env/env.service';
import { ProfileType } from '@/features/showcase/profile/mocks/defaultProfile';
import { User } from '@/features/users/types/user.type';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: env.VITE_API_URL,
    credentials: 'include',
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    // POST /auth/login — sets a cookie, returns the profile
    signIn: builder.mutation<ProfileType, { loginOrEmail: string; password: string }>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['User'],
    }),

    registerUser: builder.mutation<User, { email: string; login: string; password: string }>({
      query: (body) => ({
        url: '/auth/registration',
        method: 'POST',
        body,
      }),
    }),

    // // GET /auth/profile — retrieves profile from cookie
    // getUser: builder.query<ProfileType, void>({
    //   query: () => '/auth/profile',
    //   providesTags: ['User'], // indicates that the response is associated with a tag
    // }),
    getUser: builder.query<ProfileType, void>({
      query: () => '/auth/profile',
      transformResponse: (response: ProfileType) => {
        console.log('getUser API response:', response); // <- Вывод объекта User
        return response;
      },
      providesTags: ['User'],
    }),

    // POST /api/logout — delete cookie
    signOut: builder.mutation<void, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
      invalidatesTags: ['User'], // cache invalidation after release
    }),
  }),
});

export const { useSignInMutation, useGetUserQuery, useSignOutMutation, useRegisterUserMutation } =
  apiSlice;
