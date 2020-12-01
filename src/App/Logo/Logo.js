import React from "react";

import { Typography } from "antd";
import { Link } from 'react-router-dom'

import { logo, title } from "./Logo.module.scss";

const { Title } = Typography;

export default function Logo() {
  return (
    <div className={logo}>
      <Title level={4} className={title}>
        <Link to='/dashboard'>
          My Expenses
        </Link>
      </Title>
    </div>
  );
}
