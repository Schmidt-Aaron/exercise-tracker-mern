import React, { Component } from "react";
import Layout from "../layouts/Layout";

class RegisterUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const fetchPromise = fetch("http://localhost:7777/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...this.state })
    });

    fetchPromise
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          username: "",
          email: "",
          password: ""
        });
      });
    // redirect / reload page??
  }

  render() {
    return (
      <Layout>
        <div>
          <h2>Create a New User</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="username"
              id="name"
              value={this.state.username}
              onChange={this.handleInput}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handleInput}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleInput}
              required
            />
            <button type="submit" onClick={this.handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </Layout>
    );
  }
}

export default RegisterUser;
