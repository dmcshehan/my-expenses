import React from "react";
import "./App.css";

//Material UI
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

//Routing stuff
import { Switch, Route } from "react-router";
import { Redirect } from "react-router-dom";

//firebase
import firebase from "firebase/app";
import "firebase/auth";

//redux
import { connect } from "react-redux";
import * as actionCreators from "./store/actionCreators/index";

//Custom Modules
import Dashboard from "./containers/Dashboard/Dashboard";
import Auth from "./containers/Auth/Auth";
import Layout from "./containers/Layout/Layout";
import Profile from "./containers/Profile/Profile";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#86f0ff",
      main: "#339CE5",
      dark: "#008da3"
    },
    secondary: {
      light: "#bdf479",
      main: "#4FA954",
      dark: "#599015"
    }
  },
  typography: { useNextVariants: true }
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };
  }

  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.onAuth(user);
      }
    });
  }

  render() {
    let routes = (
      <Switch>
        <Route exact path="/login" component={Auth} />
        <Redirect to="/login" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/profile" component={Profile} />
          <Redirect to="/dashboard" />
        </Switch>
      );
    }

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <MuiThemeProvider theme={theme}>
          <Layout auth={this.props.isAuthenticated}>{routes}</Layout>
        </MuiThemeProvider>
      </MuiPickersUtilsProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.user !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: user => dispatch(actionCreators.auth(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
