import React, { useEffect } from "react";
import { useSelector } from "react-redux";

//customcomps
import AddExpenseList from "../AddExpenseList/AddExpenseList";

export default function ExpenseList() {
  const expenseLists = useSelector((state) => state.expenseList);

  useEffect(() => {
    console.log("hi");
  }, []);

  return (
    <div>
      <AddExpenseList />
    </div>
  );
}
