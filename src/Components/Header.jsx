import { useState } from "react";
export default function Header({
  filterRestaurants,
  setSearchText,
  searchText,
}) {
  return (
    <header>
      <span className="logo">LOGO</span>

      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-button" onClick={() => filterRestaurants()}>
          Search
        </button>
      </div>

      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Blog</li>
          <li className="nav-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}
