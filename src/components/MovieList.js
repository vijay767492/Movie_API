// MovieList.js
import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies }) => (
  <div className="movie-list">
    {movies.map((movie) => (
      <Movie key={movie.id} movie={movie} />
    ))}
  </div>
);

export default MovieList;
