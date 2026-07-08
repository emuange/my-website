import "./Navbar.css";
import { site } from "../../data/site";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-content">

        <a href="/" className="logo">
          {site.name}
        </a>

        <nav>
          <ul className="nav-links">
            {site.nav.map((item) => (
              <li key={item.label}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </header>
  );
}