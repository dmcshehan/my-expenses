import React from "react";
import { useDispatch } from "react-redux";

import AddButton from "../../AddButton/AddButton";

import { showAddExpenseListForm } from "../../../store/actionCreators/expenseList";

export default function AddExpenseListButton() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(showAddExpenseListForm());
  }

  return <AddButton onClick={handleClick} />;
}
