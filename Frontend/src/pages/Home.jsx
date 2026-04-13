import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />

      {/* Main Content */}
      <div style={styles.container}>
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

const styles = {
  container: {
    textAlign: "center",
    padding: "60px 20px",
  },
};

export default Home;