import React from "react";
import { useSelector } from "react-redux";

import { Typography } from "antd";

//styles
import { title as titleStyles } from "./Title.module.css";

const { Title } = Typography;

export default function ExpenseListTitle() {
  const { title } = useSelector((state) => state.expenseList.selected);
  return (
    <Title level={4} className={titleStyles}>
      {title}
    </Title>
  );
}
