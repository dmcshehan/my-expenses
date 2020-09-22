import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header/Header";
import AddExpenseForm from "./AddExpenseForm/AddExpenseForm";
import ExpenseTable from "./ExpenseTable/ExpenseTable";

import { Space } from "antd";

import { expenseListDetails, space } from "./ExpenseListDetails.module.css";

export default function ExpenseListDetails() {
  const { selected } = useSelector((state) => state.expenseList);
  const { isAddExpenseFormOpen } = useSelector(
    (state) => state.expenseListDetails
  );

  if (selected) {
    return (
      <div className={expenseListDetails}>
        <Space direction='vertical' size='middle' className={space}>
          <Header />
          {isAddExpenseFormOpen ? <AddExpenseForm /> : null}
          <ExpenseTable />
        </Space>
      </div>
    );
  }

  return <>{null}</>;
}
