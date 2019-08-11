import React from "react";
import "./App.css";

//Routing stuff
import { Switch, Route } from "react-router";
import { Redirect } from "react-router-dom";

//redux
import { connect } from "react-redux";
import { getCurrentUserAction } from "./store/actionCreators/auth";
import { fetchExpensesAction } from "./store/actionCreators/fetchExpenses";

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
    const { getCurrentUser, fetchExpenses } = this.props;
    getCurrentUser();
    fetchExpenses();
  }

  render() {
    const isAuthenticated = this.props.authedUser !== null;
    let routes = (
      <Switch>
        <Route exact path="/login" component={Auth} />
        <Redirect to="/login" />
      </Switch>
    );

    if (isAuthenticated) {
      routes = (
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/profile" component={Profile} />
          <Redirect to="/dashboard" />
        </Switch>
      );
    }

    return <Layout>{routes}</Layout>;
  }
}

const mapStateToProps = state => {
  return {
    authedUser: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCurrentUser: () => dispatch(getCurrentUserAction()),
    fetchExpenses: () => dispatch(fetchExpensesAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
