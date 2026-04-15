import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        {/* Branding */}
        <div className="branding">
          <div className="logoRow">
            <span className="logoIcon">♻️</span>
            <div className="logoText">
              <h2 className="logo">WasteZero</h2>
              <p className="tagline">Smart Recycling Network</p>
            </div>
          </div>

          <p className="desc">Smart waste management platform.</p>
          <p className="desc">Recycle today. Build a cleaner city tomorrow.</p>

          {/* Social Media */}
          <div className="social-icons">
            <a href="#" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="quick-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* User Links */}
        <div className="user-links">
          <h3>For Users</h3>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/profile">My Profile</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/pickups">My Pickups</Link>
        </div>

        {/* Contact */}
        <div className="contact">
          <h3>Contact Us</h3>
          <p>
            <FaMapMarkerAlt /> SVECW, Bhimavaram
          </p>
          <p>
            <FaPhone /> +91 9615256999
          </p>
          <p>
            <FaEnvelope /> 22b01a1228@svecw.edu.in
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2026 WasteZero. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
