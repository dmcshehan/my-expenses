import React from "react";
import { useSelector, useDispatch } from "react-redux";

import AddEntryForm from "../../AddEntryForm/AddEntryForm";

import { addExpenseList } from "../../../store/actionCreators/expenseList";

export default function AddExpenseList() {
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.user.user);

  function onFinish(values) {
    dispatch(addExpenseList({ ...values, uid }));
  }

  return (
    <div>
      <AddEntryForm onSubmit={(values) => onFinish(values)} />
    </div>
  );
}
