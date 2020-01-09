import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

const RegisterUser = () => {
  const initialFormState = {
    username: "",
    email: "",
    password: "",
    redirect: false,
    error: null
  };

  const [user, setUser] = useState(initialFormState);

  const handleInput = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const fetchPromise = fetch("http://localhost:7777/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...user })
    });

    fetchPromise
      .then(response => {
        // handle error for duplicate entry
        //TODO refactor response error handling into seperate file
        if (!response.ok) {
          response.json().then(error => {
            console.error(error);
            const responseObj = JSON.parse(error);
            if (responseObj.errorCode === 11000) {
              const msg = "That email is already taken. Please try another.";
              setUser({ ...user, error: msg });
            }
          });
        } else {
          return response.json();
        }
      })
      .then(data => {
        // redirect if response is ok
        if (data) {
          console.log(data);
          setUser({ ...user, redirect: true });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const { username, email, password, redirect } = user;

  // redirect after creating a new user
  // TODO: create a flash message after logging in
  if (redirect) {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { newUser: true, newUserName: username }
        }}
      />
    );
  }

  return (
    <div>
      <h2>Create a New User</h2>
      {user.error ? <ErrorMessage error={user.error} /> : null}
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="username"
          id="name"
          value={username}
          onChange={handleInput}
          required
        />
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

export default RegisterUser;
