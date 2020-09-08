import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { List, Avatar, Button, Skeleton } from "antd";

//customcomps
import AddExpenseListForm from "./AddExpenseListForm/AddExpenseListForm";
import Header from "./Header/Header";
import Item from "./Item/Item";
//styles
import { expenseList } from "./ExpenseList.module.css";

//action creators
import { fetchExpenseLists } from "../../store/actionCreators/expenseList";

export default function ExpenseList() {
  const dispatch = useDispatch();
  const { expenseLists } = useSelector((state) => state.expenseList);
  const { isAddExpenseFormOpen } = useSelector(
    (state) => state.addExpenseListForm
  );

  useEffect(() => {
    const unsubscribe = dispatch(fetchExpenseLists());

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className={expenseList}>
      <Header />
      {isAddExpenseFormOpen ? <AddExpenseListForm /> : null}
      <List
        dataSource={expenseLists}
        renderItem={(item) => <Item {...item} />}
      />
    </div>
  );
}
