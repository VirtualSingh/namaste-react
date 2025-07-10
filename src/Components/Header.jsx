export default function Header() {
  return (
    <header>
      <span className="logo">LOGO</span>

      <div className="search-bar">
        <input type="text" className="search-input" />
        <button className="search-button">Search</button>
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
