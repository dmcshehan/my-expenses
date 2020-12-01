import React from "react";
import { useSelector } from "react-redux";

import GroupExpenseTable from "./GroupExpenseTable";

export default function AllTables() {
  const { expenses } = useSelector((state) => state.groupListDetails);
  const { selected } = useSelector((state) => state.groupList);

  const { lists } = selected;
  const expenseObject = {};

  lists.forEach((listId) => {
    const exps = expenses.filter((expense) => expense.listId === listId);
    expenseObject[listId] = exps;
  });

  const tables = Object.keys(expenseObject).map((listId) => (
    <GroupExpenseTable
      key={listId}
      listId={listId}
      expenses={expenseObject[listId]}
    />
  ));

  return <>{tables}</>;
}
