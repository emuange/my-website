import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <Link to="/">Manu</Link>
            <Link to="/about">About</Link>
            <Link to="/photography">Photography</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
}