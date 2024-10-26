// Movie.js
import React from 'react';

const Movie = ({ movie }) => (
  <div className="movie-card">
    <img
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt={movie.title}
    />
    <h3>{movie.title}</h3>
    <p>Rating: {movie.vote_average}</p>
  </div>
);

export default Movie;
