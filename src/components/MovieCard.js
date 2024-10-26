// MovieCard.js
import React, { useState } from 'react';
import axios from 'axios';

const MovieCard = ({ movie, onMovieClick }) => {
  const handleMovieClick = async () => {
    const apiKey = 'ad20c722b72b7bd97f502b8d30b5a287';
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${apiKey}`
    );

    const trailer = response.data.results.find(
      (vid) => vid.type === 'Trailer' && vid.site === 'YouTube'
    );

    if (trailer) {
      onMovieClick(`https://www.youtube.com/embed/${trailer.key}`);
    }
  };

  return (
    <div className="movie-card" onClick={handleMovieClick}>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title}</h3>
    </div>
  );
};

export default MovieCard;
