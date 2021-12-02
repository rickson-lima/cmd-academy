import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Welcome from "./pages/Welcome";
import Students from "./pages/Students";
import Calendar from "./pages/Calendar";
import EditProfile from "./pages/EditProfile";
import UserProfile from "./pages/UserProfile";
import Instructors from "./pages/Instructors";
import Certificates from "./pages/Certificates";
import Notifications from "./pages/Notifications";

import { isAuthenticated } from "./services/auth";

import { GlobalStyle } from "./styles/global";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route
        exact
        path="/"
        render={() =>
          isAuthenticated() ? <Redirect to="/home" /> : <Welcome />
        }
      />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />

      <PrivateRoute path="/home" component={Home} />
      <PrivateRoute path="/calendar" component={Calendar} />
      <PrivateRoute path="/students" component={Students} />
      <PrivateRoute path="/certificates" component={Certificates} />
      <PrivateRoute path="/instructors" component={Instructors} />
      <PrivateRoute path="/notifications" component={Notifications} />
      <PrivateRoute path="/profile" component={EditProfile} />
      <PrivateRoute exact path="/users/:id" component={UserProfile} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
