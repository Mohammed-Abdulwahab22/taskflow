import React, { useState } from "react";
import "../styles/Login.css"; // reuse styles
import { registerUser } from "../api/auth";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const data = await registerUser(email, password);
      localStorage.setItem("token", data.token);
      console.log("Registered and logged in ✅");

      // TODO: redirect to dashboard
    } catch (err: any) {
      console.error(err);
      setError("Failed to register. Email might already be used.");
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleRegister}>
        <h1>TaskFlow</h1>
        <h2>Create Your Account</h2>

        <label>Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};
