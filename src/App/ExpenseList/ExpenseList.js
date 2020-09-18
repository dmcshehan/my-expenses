import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { List } from "antd";

//customc omps
import AddExpenseListForm from "./AddExpenseListForm/AddExpenseListForm";
import Header from "./Header/Header";
import Item from "./Item/Item";
import ListEmpty from "../ListEmpty/ListEmpty";

//styles
import { expenseList } from "./ExpenseList.module.css";

//action creators
import { fetchExpenseLists } from "../../store/actionCreators/expenseList";

export default function ExpenseList() {
  const dispatch = useDispatch();
  const { expenseLists } = useSelector((state) => state.expenseList);
  const { isAddExpenseListFormOpen } = useSelector(
    (state) => state.expenseList
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
      {isAddExpenseListFormOpen ? <AddExpenseListForm /> : null}
      {expenseLists.length === 0 ? (
        <ListEmpty text='No Lists' />
      ) : (
        <List
          dataSource={expenseLists}
          renderItem={(item) => <Item {...item} />}
        />
      )}
    </div>
  );
}
