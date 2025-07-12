import { Link } from "react-router-dom";
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
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/about" className="nav-item">
            About
          </Link>
          <Link to="/blog" className="nav-item">
            Blog
          </Link>
          <Link to="/contact" className="nav-item">
            Contact
          </Link>
        </ul>
      </nav>
    </header>
  );
}
