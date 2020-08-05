import React from "react";

//Antd Components
import { Menu } from "antd";

const { Item } = Menu;

export default function NavBar() {
  return (
    <Menu theme='light' mode='horizontal'>
      <Item>Example Item</Item>
    </Menu>
  );
}
