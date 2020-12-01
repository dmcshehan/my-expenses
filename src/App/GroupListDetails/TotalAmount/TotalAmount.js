import React from "react";
import { Tag } from "antd";
import currencyFormatter from "currency-formatter";

export default function TotalAmount({ expenses }) {
  const amounts = expenses.map((expense) => expense.cost);

  const total = amounts.reduce(function (a, b) {
    return a + b;
  }, 0);

  return (
    <Tag color="#108ee9">
      {currencyFormatter.format(total, { code: "LKR" })}
    </Tag>
  );
}
