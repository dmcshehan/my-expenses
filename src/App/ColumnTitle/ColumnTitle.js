import React from "react";

import { Typography } from "antd";

//styles
import { title as titleStyles } from "./ColumnTitle.module.css";
import persistReducer from "./../../store/reducers/index";

const { Title } = Typography;

export default function ExpenseListTitle({ children }) {
  return (
    <Title level={4} className={titleStyles}>
      {children}
    </Title>
  );
}
