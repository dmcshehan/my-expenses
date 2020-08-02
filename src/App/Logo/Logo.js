import React from "react";

import { Typography } from "antd";

import { logo, title } from "./Logo.module.scss";

const { Title } = Typography;

export default function Logo() {
  return (
    <div className={logo}>
      <Title level={4} className={title}>
        My Expenses
      </Title>
    </div>
  );
}
