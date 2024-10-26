// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import MovieCard from './components/MovieCard'; // Import MovieCard component
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("popular");
  const [page, setPage] = useState(1);
  const [trailerUrl, setTrailerUrl] = useState(null); // State to manage trailer URL

  useEffect(() => {
    const fetchMovies = async () => {
      let endpoint = '';
      const apiKey = 'ad20c722b72b7bd97f502b8d30b5a287';

      switch (category) {
        case 'trending':
          endpoint = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&page=${page}`;
          break;
        case 'favorites':
          endpoint = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${page}`;
          break;
        case 'popular':
        default:
          endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`;
      }

      const response = await axios.get(endpoint);
      setMovies(response.data.results);
    };

    fetchMovies();
  }, [category, page]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setPage(1);
  };

  const nextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  };

  const handleMovieClick = (url) => {
    setTrailerUrl(url);
  };

  const closeModal = () => {
    setTrailerUrl(null); // Close the modal by setting trailerUrl to null
  };

  return (
    <div className="App">
      <Header onCategoryChange={handleCategoryChange} />
      <div className="main-content">
        <Sidebar setCategory={setCategory} />
        <div className="movie-list">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} onMovieClick={handleMovieClick} />
          ))}
        </div>
      </div>
      <div className="pagination">
        <button onClick={prevPage} disabled={page === 1}>Previous</button>
        <span>Page {page}</span>
        <button onClick={nextPage}>Next</button>
      </div>
      <Footer />

      {/* Modal for playing trailer */}
      {trailerUrl && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}> {/* Prevents modal from closing when clicking inside */}
            <span onClick={closeModal} className="close">&times;</span>
            <iframe
              width="100%"
              height="400px"
              src={trailerUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Movie Trailer"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
