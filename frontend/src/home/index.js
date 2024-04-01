import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../App";

const Home = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default Home;
