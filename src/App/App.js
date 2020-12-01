import classNames from "./App.module.scss";

import React, { useEffect } from "react";
import firebase from "../auth/firebase";
import { useDispatch } from "react-redux";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { userLoginSuccess } from "../store/actionCreators/user";

import Dashboard from "./Dashboard/Dashboard";
import Lists from "./Lists/Lists";
import Groups from './Groups/Groups'
import Layout from './Layout/Layout'


//custom components
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown";
import Notification from "./Notification/Notification";

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
        <Layout>
          {isLoggedIn ? <ProfileDropdown /> : null}
          <Notification />

          <Switch>
            <Route exact path='/' component={Signin} />
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/lists' component={Lists} />
            <Route exact path="/projects" component={Groups} />
            <Route path='/' component={Signin} />
          </Switch>
        </Layout>

      </div>
    </BrowserRouter>
  );
}
