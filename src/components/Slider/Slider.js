import React from "react";
import styles from "./slider.module.scss";
import { NavLink } from "react-router-dom";

import { Layout, Menu, Icon } from "antd";

const { Header, Sider, Content } = Layout;

const Slider = ({ collapsed }) => {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className={styles.logo} />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Icon type="user" />
          <span>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="video-camera" />
          <span>nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload" />
          <span>
            <NavLink to="/profile">Profile</NavLink>
          </span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Slider;
