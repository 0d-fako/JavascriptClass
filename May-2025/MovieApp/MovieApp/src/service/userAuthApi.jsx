import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import SignUp from '../component/auth/signUp/signUp';

const url = "http://localhost:5000";

export const userAuthApiSlice = createApi({
    reducerPath: 'userAuthApi',
    baseQuery: fetchBaseQuery({ baseUrl: url }),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (data) => ({
                url: '/api/auth/register',
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