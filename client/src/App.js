import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Profile from "./pages/Profile";
import RegisterUser from "./components/RegisterUser";
import Login from "./components/Login";
import UserContext from "./hooks/UserContext";

class App extends Component {
  state = {
    exerciseList: [],
    user: null
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
    const { user } = this.state;
    return (
      <UserContext.Provider value={user}>
        <Switch>
          <Route path="/register" component={RegisterUser} />
          <Route path="/login" component={Login} />
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Home {...this.state} />
          </Route>
        </Switch>
      </UserContext.Provider>
    );
  }
}

export default App;
