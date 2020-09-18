import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./Header/Header";
import AddExpenseForm from "./AddExpenseForm/AddExpenseForm";
import { useSelector } from "react-redux";

import { fetchExpenses } from "../../store/actionCreators/expenseListDetails";

import { expenseListDetails } from "./ExpenseListDetails.module.css";

export default function ExpenseListDetails() {
  const dispatch = useDispatch();
  const { selected } = useSelector((state) => state.expenseList);
  const { isAddExpenseFormOpen } = useSelector(
    (state) => state.expenseListDetails
  );

  useEffect(() => {
    // dispatch(fetchExpenses(selected._id));
  }, []);

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
