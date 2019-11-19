import React, { Component } from "react";
import ExerciseList from "./components/ExerciseList";
import UserList from "./components/UserList";
import Header from "./components/Header";
import NewUser from "./components/NewUser";
import NewExercise from "./components/NewExercise";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    exerciseList: [],
    users: []
  };

  componentDidMount() {
    // move to hooks later
    const exerciseList = fetch("http://localhost:7777/exercises")
      .then(data => data.json())
      .then(exerciseList => this.setState({ exerciseList }))

      .catch(error => console.error(error));

    const users = fetch("http://localhost:7777/users")
      .then(data => data.json())
      .then(users => this.setState({ users }))

      .catch(error => console.error(error));
  }

  render() {
    const { exerciseList, users } = this.state;
    return (
      <div className="App">
        <Header />
        <main>
          <NewExercise />
          {/* <NewUser /> */}
          {/* <UserList users={[...users]} /> */}
          <ExerciseList exerciseList={[...exerciseList]} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
