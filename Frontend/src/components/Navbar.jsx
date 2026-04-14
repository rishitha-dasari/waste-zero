import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">

      {/* Logo */}
      <div className="logoSection">
        <span className="logoIcon">♻️</span>
        <div className="logoText">
          <h2 className="logo">WasteZero</h2>
          <p className="tagline">Smart Recycling Network</p>
        </div>
      </div>

      {/* Links */}
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/opportunities">Opportunities</Link>
        <Link to="/how-it-works">How It Works</Link>

        {/* Dropdown (CLICK based) */}
        <div className="dropdown">
          <span 
            className="dropdownTitle"
            onClick={() => setOpen(!open)}
          >
            More
          </span>

          {open && (
            <div className="dropdownMenu">
              <Link to="/about" onClick={() => setOpen(false)}>About</Link>
              <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
            </div>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div>
        <Link to="/login">
          <button className="btn">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn signup">Signup</button>
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;