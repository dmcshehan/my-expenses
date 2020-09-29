import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout } from "antd";
import RightLayout from "../RightLayout/RightLayout";

import { hideAddExpenseForm } from "../../store/actionCreators/expenseListDetails";
import { hideAddExpenseListForm } from "../../store/actionCreators/expenseList";

//import Sider from "../Sider/Sider";

export default function LayoutComp({ children }) {
  const dispatch = useDispatch();
  const expenseListDetails = useSelector((state) => state.expenseListDetails);
  const expenseList = useSelector((state) => state.expenseList);

  function closeAddExpenseForm(event) {
    if (expenseListDetails.isAddExpenseFormOpen) {
      dispatch(hideAddExpenseForm());
    }
    if (expenseList.isAddExpenseListFormOpen) {
      dispatch(hideAddExpenseListForm());
    }
  }

  return (
    <Layout onClick={closeAddExpenseForm}>
      <RightLayout>{children}</RightLayout>
    </Layout>
  );
}
