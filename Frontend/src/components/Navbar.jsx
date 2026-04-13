import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      {/* Left: Logo + Name */}
      <div style={styles.logoSection}>
        <h2 style={{ margin: 0 }}>♻️ WasteZero</h2>
      </div>

      {/* Center: Navigation Links */}
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/opportunities" style={styles.link}>Opportunities</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>

      {/* Right: Auth Buttons */}
      <div>
        <Link to="/login">
          <button style={styles.btn}>Login</button>
        </Link>
        <Link to="/signup">
          <button style={{ ...styles.btn, marginLeft: "10px" }}>Signup</button>
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "#2c3e50",
    color: "white",
  },
  logoSection: {
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
  },
  btn: {
    padding: "6px 12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Navbar;