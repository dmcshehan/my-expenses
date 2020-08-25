import React from "react";

import { Typography } from "antd";

//styles
import { title } from "./ExpenseListTitle.module.css";

const { Title } = Typography;

export default function ExpenseListTitle() {
  return (
    <Title level={4} className={title}>
      Expense List
    </Title>
  );
}
