import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const movieAPIKey = import.meta.env.VITE_MOVIE_API_KEY;

if (!movieAPIKey) {
  throw new Error("VITE_MOVIE_API_KEY is not defined");
}

export const movieAPI = createApi({
  reducerPath: "movieAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
  }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: () => "/movie/popular?api_key=" + movieAPIKey,
      transformResponse: (response) => response.results,
    }),
  }),
});

export const { useGetPopularMoviesQuery } = movieAPI;
