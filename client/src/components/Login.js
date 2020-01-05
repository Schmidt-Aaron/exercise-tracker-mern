import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
    const fetchPromise = fetch("http://localhost:7777/auth/login", {
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
          email: "",
          password: ""
        });
      });
    // redirect / reload page??
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form>
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
    );
  }
}

export default Login;