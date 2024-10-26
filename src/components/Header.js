// Header.js
import React from 'react';

const Header = ({ onCategoryChange }) => {
  return (
    <header className="header">
      <h1>Movie App</h1>
      <nav>
        <ul>
          <li>
            <button onClick={() => onCategoryChange('popular')} className="nav-button">Home</button>
          </li>
          <li>
            <button onClick={() => onCategoryChange('trending')} className="nav-button">Trending</button>
          </li>
          <li>
            <button onClick={() => onCategoryChange('favorites')} className="nav-button">Favorites</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
