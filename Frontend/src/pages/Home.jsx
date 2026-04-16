import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { User, Building2, Truck } from "lucide-react";
import {
  Target,
  Package,
  MessageCircle,
  Bell,
  BarChart3,
  ShieldCheck,
  MapPin,} from "lucide-react";
function Home() {
  return (
    <div className="page">
      <Navbar />

      {/* Main Content */}

      <div className="app">
        {/* HERO SECTION */}

        <div className="hero-container">
          <div className="hero-content">
            <p className="badge">⚡ Smart coordination for civic impact</p>

            <h1>
              Run cleaner city <br />
              operations with <span>one</span> <br />
              <span className="highlight">intelligent platform</span>
            </h1>

            <p className="description">
              WasteZero connects volunteers, NGOs, and collection agents through
              AI matching, realtime communication, and operational dashboards
              that keep every action visible and accountable.
            </p>

            <div className="buttons">
              <button className="primary-btn">Start Free →</button>
              <button className="secondary-btn">Explore Opportunities</button>
            </div>

            <div className="roles">
              <span>✔ Volunteers</span>
              <span>✔ NGOs</span>
              <span>✔ Collection Agents</span>
              <span>✔ Admins</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="card-header">
              <h3>Live Operations Feed</h3>
              <span className="realtime">● Realtime</span>
            </div>

            <div className="feed-item">
              3 new volunteer applications received
            </div>
            <div className="feed-item">Pickup route assigned to agent team</div>
            <div className="feed-item">
              Opportunity match score updated by AI
            </div>

            <div className="card-stats">
              <div>
                <h2>8+</h2>
                <p>Active Opportunities</p>
              </div>
              <div>
                <h2>4</h2>
                <p>Role-specific Workflows</p>
              </div>
            </div>
          </div>
        </div>

        {/* workspace section */}
        <div className="workspace-section">
          <div className="workspace-stats">
            <div className="workspace-stat-box">
              <h2>8+</h2>
              <p>Active Opportunities</p>
            </div>
            <div className="workspace-stat-box">
              <h2>4</h2>
              <p>Role-specific Workflows</p>
            </div>
            <div className="workspace-stat-box">
              <h2>24/7</h2>
              <p>Realtime Collaboration</p>
            </div>
            <div className="workspace-stat-box">
              <h2>&lt; 10s</h2>
              <p>Volunteer Matching Speed</p>
            </div>
          </div>
          <div className="workspace-heading">
            <p className="workspace-tag">BUILT FOR EVERY ROLE</p>
            <h1>Purpose-built workspaces for each team</h1>
          </div>

          <div className="workspace-cards">
            <div className="workspace-card workspace-green">
              <div className="workspace-icon">
                <User size={28} strokeWidth={2} />
              </div>
              <h3>Volunteers</h3>
              <p>
                Browse open opportunities, get AI-powered matches based on your
                skills, apply in one click, and track every application from
                your dashboard.
              </p>

              <div className="workspace-links">
                <Link to="/opportunities">Browse Opportunities →</Link>
                <Link to="/login">Volunteer Login →</Link>
                <Link to="/register">Sign Up Free →</Link>
              </div>
            </div>

            <div className="workspace-card workspace-teal">
              <div className="workspace-icon">
                <Building2 size={28} strokeWidth={2} />
              </div>
              <h3>NGOs</h3>
              <p>
                Post volunteer opportunities, review incoming applications,
                manage pickup requests, and communicate with your team – all in
                one place.
              </p>

              <div className="workspace-links">
                <Link to="/opportunities">Browse Opportunities →</Link>
                <Link to="/post-an-opportunity">Post an Opportunity →</Link>
                <Link to="/login">Sign In →</Link>
              </div>
            </div>

            <div className="workspace-card workspace-blue">
              <div className="workspace-icon">
                <Truck size={28} strokeWidth={2} />
              </div>
              <h3>Collection Agents</h3>
              <p>
                View assigned waste-pickup jobs, track locations, update
                statuses in real time, and stay connected with NGOs through the
                platform.
              </p>

              <div className="workspace-links">
                <Link to="/opportunities">Explore Opportunities →</Link>
                <Link to="/login">Agent Login →</Link>
              </div>
            </div>
          </div>
        </div>

        {/* process-section */}
        <div className="process-section">
          <p className="process-tag">SIMPLE PROCESS</p>
          <h1 className="process-title">From signup to measurable impact</h1>

          <div className="process-cards">
            <div className="process-card">
              <span className="process-step">STEP 01</span>
              <h3>Create your account</h3>
              <p>
                Sign up as a volunteer, NGO, or collection agent. Your
                personalized dashboard is ready immediately.
              </p>
            </div>

            <div className="process-card">
              <span className="process-step">STEP 02</span>
              <h3>Get matched instantly</h3>
              <p>
                Our AI reads your profile and surfaces the best-fit
                opportunities – or post your own as an NGO.
              </p>
            </div>

            <div className="process-card">
              <span className="process-step">STEP 03</span>
              <h3>Take action</h3>
              <p>
                Apply, schedule pickups, chat, and track everything from a
                single clean dashboard.
              </p>
            </div>
          </div>
        </div>
        {/* FEATURES SECTION */}
        <div className="feature-section">
          <p className="feature-tag">PLATFORM CAPABILITIES</p>
          <h1 className="feature-title">
            Professional tooling without complexity
          </h1>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Target size={26} strokeWidth={2} />
              </div>
              <h3>AI Match Suggestions</h3>
              <p>
                Smart algorithm scores your skills and availability against open
                NGO opportunities.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Package size={26} strokeWidth={2} />
              </div>
              <h3>Opportunity Board</h3>
              <p>
                Browse, filter and apply to verified opportunities across the
                city.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Truck size={26} strokeWidth={2} />
              </div>
              <h3>Pickup Scheduling</h3>
              <p>NGOs request pickups and agents are assigned automatically.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <MessageCircle size={26} strokeWidth={2} />
              </div>
              <h3>Real-time Chat</h3>
              <p>Message directly without leaving the platform.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Bell size={26} strokeWidth={2} />
              </div>
              <h3>Smart Notifications</h3>
              <p>Get instant alerts for matches, approvals and updates.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <BarChart3 size={26} strokeWidth={2} />
              </div>
              <h3>Analytics & Reports</h3>
              <p>Track engagement, performance and export reports.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <ShieldCheck size={26} strokeWidth={2} />
              </div>
              <h3>Role-based Access</h3>
              <p>Each role sees only what they need.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <MapPin size={26} strokeWidth={2} />
              </div>
              <h3>Location-aware</h3>
              <p>Connect volunteers to nearby cleanup events.</p>
            </div>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="cta-section">
          <div className="cta-box">
            <div className="cta-icon">♻️</div>

            <h1>Ready to elevate waste operations?</h1>

            <p>
              Join WasteZero and coordinate opportunities, volunteers, and
              pickups from one professional system designed for scale.
            </p>

            <div className="cta-buttons">
              <button className="cta-primary">Create Free Account →</button>
              <button className="cta-secondary">Sign In</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
