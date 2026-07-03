import "./Navbar.css";
import { site } from "../../data/site";

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
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </header>
  );
}