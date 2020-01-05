import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import User from "./pages/User";
import RegisterUser from "./components/RegisterUser";
import Login from "./components/Login";

class App extends Component {
  state = {
    exerciseList: [],
    users: []
  };

  componentDidMount() {
    // move to hooks later
    // const exerciseList = fetch("http://localhost:7777/exercises")
    //   .then(data => data.json())
    //   .then(exerciseList => this.setState({ exerciseList }))
    //   .catch(error => console.error(error));
    // const users = fetch("http://localhost:7777/users")
    //   .then(data => data.json())
    //   .then(users => this.setState({ users }))
    //   .catch(error => console.error(error));
  }

  render() {
    const { exerciseList, users } = this.state;
    return (
      <div>
        <Switch>
          <Route path="/user/:username" component={User} />
          <Route path="/register" component={RegisterUser} />
          <Route path="/login" component={Login} />
          <Route path="/users">
            <Users {...this.state} />
          </Route>
          <Route path="/">
            <Home {...this.state} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
