import React from "react";

import { useGetMovies } from "../../service/movieAPI";

const Movies = () => {
  const data = useGetMovies();
  const { data: movies, isLoading, isError } = data;
  console.log(movies);

  return (
    <div>
      <h1>Movies</h1>
      <p>List of movies will be displayed here.</p>
    </div>
  );
};

export default Movies;
