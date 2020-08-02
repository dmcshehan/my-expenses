import React from "react";

import { Menu } from "antd";

const { Item } = Menu;

export default function NavBar() {
  return (
    <>
      <Menu theme='light' mode='horizontal'>
        <Item key='mail'>Navigation One</Item>
      </Menu>
    </>
  );
}
