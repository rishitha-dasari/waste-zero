import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
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
            <p className="desc">
              Recycle today. Build a cleaner city tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div className="quick-links">
            <h3>Quick Links</h3>
            <p>Home</p>
            <p>How It Works</p>
            <p>About Us</p>
            <p>Contact</p>
          </div>

          {/* User Links */}
          <div className="user-links">
            <h3>For Users</h3>
            <p>Login</p>
            <p>Sign Up</p>
            <p>My Profile</p>
            <p>Dashboard</p>
            <p>My Pickups</p>
          </div>

          {/* Contact */}
          <div className="contact">
            <h3>Contact Us</h3>
            <p>SVECW, Bhimavaram</p>
            <p>+91 9615256999</p>
            <p>22b01a1228@svecw.edu.in</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2026 WasteZero. All rights reserved.</p>
        <div className="footer-bottom-links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}


export default Footer;
