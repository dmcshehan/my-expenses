import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header/Header";
import GroupExpenseTable from "./GroupExpenseTable";
import AllTables from "./AllTables";

import { Space } from "antd";

import { expenseListDetails, space } from "./GroupListDetails.module.css";
import ColumnInnerWraper from "../ColumnInnerWrapper/ColumnInnerWraper";

export default function ExpenseListDetails() {
  const { selected } = useSelector((state) => state.groupList);

  if (selected) {
    return (
      <ColumnInnerWraper className={expenseListDetails}>
        <Space direction="vertical" size="middle" className={space}>
          <Header />
          <AllTables />
        </Space>
      </ColumnInnerWraper>
    );
  }

  return <>{null}</>;
}
