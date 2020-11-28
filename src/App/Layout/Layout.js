import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout } from "antd";
import { Redirect } from "react-router-dom";

import Header from '../Header/Header'

import useIsLoggedIn from '../../hooks/useIsLoggedIn'

import { hideAddExpenseForm } from "../../store/actionCreators/expenseListDetails";
import { hideAddExpenseListForm } from "../../store/actionCreators/expenseList";


export default function LayoutComp({ children }) {
  const dispatch = useDispatch();
  const expenseListDetails = useSelector((state) => state.expenseListDetails);
  const expenseList = useSelector((state) => state.expenseList);

  const isLoggedIn = useIsLoggedIn();

  function closeAddExpenseForm(event) {
    if (expenseListDetails.isAddExpenseFormOpen) {
      dispatch(hideAddExpenseForm());
    }
    if (expenseList.isAddExpenseListFormOpen) {
      dispatch(hideAddExpenseListForm());
    }
  }

  return isLoggedIn ?
    <Layout onClick={closeAddExpenseForm}>
      <Header />
      <div>{children}</div>

    </Layout>
    : <Redirect to='/signin' />;
}
