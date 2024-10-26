// Sidebar.js
import React from 'react';

const Sidebar = ({ setCategory }) => (
  <aside className="sidebar">
    <h2>Categories</h2>
    <ul>
      <li onClick={() => setCategory("popular")}>Popular</li>
      <li onClick={() => setCategory("trending")}>Trending</li>
      <li onClick={() => setCategory("top_rated")}>Top Rated</li>
      <li onClick={() => setCategory("upcoming")}>Upcoming</li>
    </ul>
  </aside>
);

export default Sidebar;
