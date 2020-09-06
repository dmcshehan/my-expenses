import React from "react";
import Header from "./Header/Header";
import { useSelector, useDispatch } from "react-redux";

import { selectDailyExpensesList } from "../../store/actionCreators/expenseList";

export default function ExpenseListDetails() {
  const dispatch = useDispatch();
  const { selected } = useSelector((state) => state.expenseList);

  function selectDailyList() {
    dispatch(selectDailyExpensesList());
  }

  if (selected) {
    return (
      <div>
        <Header></Header>
      </div>
    );
  }

  return <>{selectDailyList()}</>;
}
