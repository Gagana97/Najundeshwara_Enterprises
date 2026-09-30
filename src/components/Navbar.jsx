
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import logo from "../assets/logo.jpg";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* LOGO + COMPANY NAME */}
        <Link
          to="/"
          className="navbar-brand"
          onClick={closeMenu}
        >
          <div className="navbar-logo">
            <img
              src={logo}
              alt="Nanjundeshwara Enterprises"
            />
          </div>

          <div className="company-name">
            <span>Nanjundeshwara</span>
            <span>Enterprises</span>
          </div>
        </Link>

        {/* MOBILE MENU */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* NAVIGATION */}
        <nav
          className={`navbar-menu ${menuOpen ? "open" : ""}`}
        >
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>

          <NavLink to="/projects" onClick={closeMenu}>
            Projects
          </NavLink>

          {/* <NavLink to="/blogs" onClick={closeMenu}>
            Blogs
          </NavLink> */}

          <NavLink to="/faq" onClick={closeMenu}>
            FAQ
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

          <Link
            to="/enquire"
            className="navbar-enquire"
            onClick={closeMenu}
          >
            Enquire Now
          </Link>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;