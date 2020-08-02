import classNames from "./App.module.scss";

import React, { useEffect } from "react";
import firebase from "../auth/firebase";
import { useDispatch } from "react-redux";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { userLoginSuccess } from "../store/actionCreators/user";

import Dashboard from "./Dashboard/Dashboard";

import NotFound from "./404/404";
import Home from "./Home/Home";
import Signin from "./Signin/Signin";

export default function App() {
  const dispatch = useDispatch();

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
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route path='/' component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
