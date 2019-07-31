import React, { Children } from "react";
import PropTypes from "prop-types";

//firebase
import firebase from "firebase/app";
import "firebase/auth";

//redux
import { connect } from "react-redux";
import * as actionCreators from "../../store/actionCreators/index";

import { Layout, Menu } from "antd";

const { Header } = Layout;

class MenuAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchorEl: null,
      drawerOpen: false
    };

    this.onLogout = this.onLogout.bind(this);
    this.profileIconClickHandler = this.profileIconClickHandler.bind(this);
    this.onLinkClick = this.onLinkClick.bind(this);
    this.onMenuIconClickHandler = this.onMenuIconClickHandler.bind(this);
  }

  componentDidMount() {
    // console.log("componentDidMount[Header.js]", this.props.isAuthenticated);
  }

  onLogout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.onLogout();
      });
  }

  profileIconClickHandler(e) {
    this.setState({
      ...this.state,
      open: !this.state.open,
      anchorEl: e.currentTarget
    });
  }

  onMenuIconClickHandler() {
    this.setState({
      ...this.state,
      drawerOpen: !this.state.drawerOpen
    });
  }

  onLinkClick() {
    this.setState({
      ...this.state,
      open: false
    });
  }

  render() {
    const { classes, children } = this.props;

    return (
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    authUser: state.auth.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actionCreators.logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuAppBar);
