import React, { Component } from "react";

//redux
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Auth extends Component {
  state = {
    isSignedIn: false
  };

  render() {
    let authComponent =
      this.props.user === null ? <h1>Hello</h1> : <Redirect to="/dashboard" />;

    return authComponent;
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(Auth);
