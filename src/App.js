import React from "react";
import "./App.css";

//Routing stuff
import { Switch, Route } from "react-router";
import { Redirect } from "react-router-dom";

//firebase
// import firebase from "firebase/app";
// import "firebase/auth";

//redux
import { connect } from "react-redux";
import { authUserAction } from "./store/actionCreators/auth";

//Custom Modules
import Dashboard from "./containers/Dashboard/Dashboard";
import Auth from "./containers/Auth/Auth";
import Layout from "./containers/Layout/Layout";
import Profile from "./containers/Profile/Profile";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };
  }

  componentDidMount() {
    // this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
    //   if (user) {
    //     this.props.onAuth(user);
    //   }
    // });
  }

  render() {
    let routes = (
      <Switch>
        <Route exact path="/login" component={Auth} />
        <Redirect to="/login" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      console.log("Authenticated");
      routes = (
        <Switch>
          <Route exact path="/login" component={Auth} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/profile" component={Profile} />
          <Redirect to="/dashboard" />
        </Switch>
      );
    }

    return <Layout auth={this.props.isAuthenticated}>{routes}</Layout>;
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.user !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: user => dispatch(authUserAction(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
