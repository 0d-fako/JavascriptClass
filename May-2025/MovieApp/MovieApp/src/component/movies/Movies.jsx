import React from "react";
import { useGetPopularMoviesQuery } from "../../service/movieAPI";
import MovieCard from "../../reuseable/MovieCard";

const Movies = () => {
  const { data: movies = [], isLoading, error } = useGetPopularMoviesQuery();

  if (isLoading) return <div>Loading movies...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="movies-container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
