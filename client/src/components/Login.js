import React, { useState } from "react";

const Login = props => {
  const initialFormState = {
    email: "",
    password: ""
  };

  const [user, setUser] = useState(initialFormState);

  const handleInput = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // TODO improve validation
    if (!user.email || !user.password) return;

    // build our request
    const fetchPromise = fetch("http://localhost:7777/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...user })
    });

    // fire our request off => get back user data
    fetchPromise
      .then(response => {
        return response.json();
      })
      .then(user => {
        console.log(user);
        props.loginUser({ ...user });
      });
    // redirect / reload page??
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={user.email}
          onChange={handleInput}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={user.password}
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
