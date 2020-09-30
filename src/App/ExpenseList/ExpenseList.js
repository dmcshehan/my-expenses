import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { List } from "antd";

//customc omps
import AddExpenseListForm from "./AddExpenseListForm/AddExpenseListForm";
import Header from "./Header/Header";
import Item from "./Item/Item";
import ListEmpty from "../ListEmpty/ListEmpty";

//styles
import { expenseList, list } from "./ExpenseList.module.css";

//action creators
import {
  fetchExpenseLists,
  selectExpenseList,
  updateExpenseList,
} from "../../store/actionCreators/expenseList";

export default function ExpenseList() {
  const [updating, setUpdating] = useState({});

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

  function selectList(_id) {
    dispatch(selectExpenseList(_id));
  }

  function makeUpdatable(event, _id) {
    event.stopPropagation();
    setUpdating(expenseLists.find((expenseList) => expenseList._id === _id));
  }

  function onUpdate(event) {
    setUpdating({ ...updating, title: event.target.value });
  }

  function cancelUpdate(event) {
    event.stopPropagation();
    setUpdating({});
  }

  function stopPropogation(event) {
    event.stopPropagation();
  }

  function deleteLIst(event) {
    event.stopPropagation();
  }

  function update(event) {
    event.stopPropagation();
    dispatch(updateExpenseList(updating)).then(function resetFormtoDefault() {
      setUpdating({});
    });
  }

  return (
    <div className={expenseList}>
      <Header />
      {isAddExpenseListFormOpen ? <AddExpenseListForm /> : null}
      {expenseLists.length === 0 ? (
        <ListEmpty text='No Lists' />
      ) : (
        <List
          className={list}
          dataSource={expenseLists}
          renderItem={(item) => (
            <Item
              {...item}
              {...{
                updating,
                update,
                deleteLIst,
                cancelUpdate,
                onUpdate,
                makeUpdatable,
                selectList,
                stopPropogation,
              }}
            />
          )}
        />
      )}
    </div>
  );
}
