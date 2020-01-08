import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

const Login = props => {
  const initialFormState = {
    email: "",
    password: "",
    redirect: false
  };

  const [user, setUser] = useState(initialFormState);

  const { email, password, redirect } = user;

  const handleInput = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // TODO improve validation
    if (!email || !password) return;

    // build our request
    const fetchPromise = fetch("http://localhost:7777/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    // fire our request off => get back user data
    fetchPromise
      .then(response => {
        return response.json();
      })
      .then(user => {
        console.log(user);
        props.loginUser({ ...user });
      })
      .then(() => {
        // trigger redirect via react router
        setUser({ ...user, redirect: true });
      });
  };

  // redirect if true
  if (redirect) {
    return <Redirect to="/" />;
  }

  // if a new user registered => redirect to login page
  let newUser = false;
  if (props.location.state.newUser) {
    newUser = true;
  }
  const Welcome = props => {
    if (props.newUser) {
      return (
        <p>Thanks for registering! Please login to access your account.</p>
      );
    }
    return null;
  };

  return (
    <div>
      <h2>Login</h2>
      <Welcome newUser={newUser} />
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleInput}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handleInput}
          required
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
