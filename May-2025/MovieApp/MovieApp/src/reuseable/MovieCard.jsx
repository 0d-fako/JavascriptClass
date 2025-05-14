import React from "react";

const MovieCard = (props) => {
  return (
    <div className="movie-card">
      <img src={props.data.poster_path} alt={props.data.title} />
      <h2>{props.data.title}</h2>
      <p>{props.data.overview}</p>
      <p>Release Date: {props.data.release_date}</p>
      <p>Rating: {props.data.vote_average}</p>
    </div>
  );
};

export default MovieCard;
