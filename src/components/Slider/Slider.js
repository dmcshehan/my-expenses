import React from "react";
import styles from "./slider.module.scss";

import { logoutAction } from "../../store/actionCreators/auth";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { Layout, Menu, Icon, Button } from "antd";
import { dispatch } from "rxjs/internal/observable/range";

const { Sider } = Layout;

class Slider extends React.Component {
  render() {
    const { collapsed, logout } = this.props;

    return (
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={styles.logo} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Icon type="dashboard" />
            <span>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </span>
          </Menu.Item>

          <Menu.Item key="3">
            <Icon type="user" />
            <span>
              <NavLink to="/profile">Profile</NavLink>
            </span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="poweroff" />
            <span>
              <NavLink to="/" onClick={() => logout()}>
                Logout
              </NavLink>
            </span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutAction())
});
export default connect(
  null,
  mapDispatchToProps
)(Slider);
