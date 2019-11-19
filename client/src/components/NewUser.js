import React, { Component } from "react";

class NewUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
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
    const fetchPromise = fetch("http://localhost:7777/users/add", {
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
          username: ""
        });
      });
    // redirect / reload page??
  }

  render() {
    return (
      <div>
        <h2>Create a New User</h2>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="username"
              id="name"
              value={this.state.username}
              onChange={this.handleInput}
              required
            />
          </div>
          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default NewUser;
