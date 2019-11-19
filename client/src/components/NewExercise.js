import React, { Component } from "react";

class NewExercise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      duration: 0,
      description: "",
      date: new Date()
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
    const fetchPromise = fetch("http://localhost:7777/exercises/add", {
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
          duration: 0,
          description: "",
          date: new Date()
        });
      });
    // redirect / reload page??
  }

  render() {
    return (
      <div>
        <h2>Add a New Exercise</h2>
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
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              value={this.state.description}
              onChange={this.handleInput}
              required
            />
            <label htmlFor="duration">Duration</label>
            <input
              type="text"
              name="duration"
              id="duration"
              value={this.state.duration}
              onChange={this.handleInput}
              required
            />
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              value={this.state.date}
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

export default NewExercise;
