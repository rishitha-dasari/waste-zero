import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Home.css"; // 👈 import CSS file

function Home() {
  return (
    <div className="page">
      <Navbar />

      {/* Main Content */}
      <div className="container">
        <h1>Welcome to WasteZero ♻️</h1>
        <p>
          WasteZero is a smart waste management platform that helps users
          schedule pickups, categorize recyclable waste, and contribute
          to a cleaner environment.
        </p>

        <p>
          Track your waste, reduce pollution, and make a positive impact
          on the planet 🌍
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default Home;