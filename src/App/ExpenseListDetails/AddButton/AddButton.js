import React from "react";
import { useDispatch } from "react-redux";

import { showAddExpenseForm } from "../../../store/actionCreators/expenseListDetails";

import AddButton from "../../AddButton/AddButton";

export default function AddExpenseListButton() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(showAddExpenseForm());
  }

  return <AddButton onClick={handleClick} />;
}
