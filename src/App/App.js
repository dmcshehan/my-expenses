import classNames from "./App.module.scss";

import React, { useEffect } from "react";
import firebase from "../auth/firebase";
import { useDispatch } from "react-redux";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { userLoginSuccess } from "../store/actionCreators/user";

import Dashboard from "./Dashboard/Dashboard";

//custom components
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown";

// import NotFound from "./404/404";
// import Home from "./Home/Home";
import Signin from "./Signin/Signin";

//custom hooks
import useIsLoggedIn from "../hooks/useIsLoggedIn";

export default function App() {
  const dispatch = useDispatch();

  const isLoggedIn = useIsLoggedIn();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (loggedInUser) {
      if (loggedInUser) {
        dispatch(userLoginSuccess(loggedInUser));
      }
    });
  });

  return (
    <BrowserRouter>
      <div className={classNames.app}>
        {isLoggedIn ? <ProfileDropdown /> : null}

        <Switch>
          <Route exact path='/' component={Signin} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route path='/' component={Signin} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
