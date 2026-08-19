import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Moon,
  Sun,
} from "lucide-react";

import { useTheme } from "../context/ThemeContext";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="navbar">
      <div className="container nav-container">

        <NavLink to="/" className="logo">
          Divyesh<span>.</span>
        </NavLink>

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">

          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

        </div>

      </div>
    </header>
  );
}