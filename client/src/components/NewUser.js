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
    const data = JSON.stringify({ ...this.state });
    console.log(data);
    const form = e.target;
    fetch("http://localhost:7777/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...this.state })
    });
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
