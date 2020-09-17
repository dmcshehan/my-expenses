import React from "react";
import Header from "./Header/Header";
import AddExpenseForm from "./AddExpenseForm/AddExpenseForm";
import { useSelector } from "react-redux";

import { expenseListDetails } from "./ExpenseListDetails.module.css";

export default function ExpenseListDetails() {
  const { selected } = useSelector((state) => state.expenseList);
  const { isAddExpenseFormOpen } = useSelector(
    (state) => state.expenseListDetails
  );

  if (selected) {
    return (
      <div className={expenseListDetails}>
        <Header />
        {isAddExpenseFormOpen ? <AddExpenseForm /> : null}
      </div>
    );
  }

  return <>{null}</>;
}
