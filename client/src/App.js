import React, { Component } from "react";
import logo from "./logo.svg";
import ExerciseList from "./components/ExerciseList";
import UserList from "./components/UserList";
import Header from "./components/Header";
import NewUser from "./components/NewUser";

class App extends Component {
  state = {
    exerciseList: [],
    users: []
  };

  componentDidMount() {
    // const exerciseList = fetch("http://localhost:7777/exercises")
    //   .then(data => data.json())
    //   .then(exerciseList => this.setState({ exerciseList }))

    //   .catch(error => console.error(error));

    const users = fetch("http://localhost:7777/users")
      .then(data => data.json())
      .then(users => this.setState({ users }))

      .catch(error => console.error(error));
  }

  render() {
    const { exerciseList, users } = this.state;
    return (
      <div className="App">
        <main>
          <Header />
          <NewUser />
          <UserList users={[...users]} />
          <ExerciseList exerciseList={[...exerciseList]} />
          <footer>footer</footer>
        </main>
      </div>
    );
  }
}

export default App;
