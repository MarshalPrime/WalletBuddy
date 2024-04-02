import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../App";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const { isLoggedIn, login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic (e.g., API request)
    login();
    setRedirectToReferrer(true);
  };
  console.log(isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Login;
