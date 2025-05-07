import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import SignUp from '../component/auth/signUp/signUp';

const url = "http://localhost:8080";

export const userAuthApiSlice = createApi({
    reducerPath: 'userAuthApi',
    baseQuery: fetchBaseQuery({ baseUrl: url }),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (data) => ({
                url: '/signup',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }),
        }),
    }),
});

export const { useSignupMutation } = userAuthApiSlice;