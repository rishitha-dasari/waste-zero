import { useState } from "react";
import API from "../services/api";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/users/register", user);
      alert("Signup Successful");
    } catch (err) {
      alert("Error occurred");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Signup</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        /><br /><br />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        /><br /><br />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        /><br /><br />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;