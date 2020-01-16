import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./components/Profile";
import RegisterUser from "./components/RegisterUser";
import Login from "./components/Login";
import { UserProvider } from "./hooks/UserContext";
import Layout from "./layouts/Layout";

const App = () => {
  const initialUserState = {
    user: null
  };

  const [user, setUser] = useState(initialUserState);

  const loginUser = user => {
    setUser({ ...user });
  };

  return (
    <UserProvider value={user}>
      <Layout logout={loginUser}>
        <Switch>
          <Route path="/register" component={RegisterUser} />
          <Route
            path="/login"
            render={props => <Login {...props} loginUser={loginUser} />}
          />
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </UserProvider>
  );
};

export default App;
