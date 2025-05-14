import React from "react";

import { useGetMovies } from "../../service/movieAPI";
import MovieCard from "../../reuseable/MovieCar";

const Movies = () => {
  const data = useGetMovies();
  const { data: movies, isLoading, isError } = data;
  console.log(movies);

  return (
    <div>
      <h1>Movies</h1>
      <MovieCard data={data} />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading movies</p>}
    </div>
  );
};

export default Movies;
