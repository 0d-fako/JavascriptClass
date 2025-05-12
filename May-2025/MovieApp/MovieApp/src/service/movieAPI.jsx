import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const movieAPIKey = import.meta.env.VITE_MOVIE_API_KEY;
if (!movieAPIKey) {
  throw new Error("VITE_MOVIE_API_KEY is not defined");
}

const movieAPI = createApi({
  reducerPath: "movieAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${process.env.VITE_MOVIE_API_KEY}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => "/movie/popular",
    }),
    getMovieDetails: builder.query({
      query: (id) => `/movie/${id}`,
    }),
    getMovieReviews: builder.query({
      query: (id) => `/movie/${id}/reviews`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMovieDetailsQuery,
  useGetMovieReviewsQuery,
} = movieAPI;
