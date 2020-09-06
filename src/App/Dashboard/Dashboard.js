import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

//antd comps
import { Row, Col } from "antd";

//custom comps
import Layout from "../Layout/Layout";

//hooks
import useIsLoggedIn from "../../hooks/useIsLoggedIn";

//custom comps
import ExpenseList from "../ExpenseList/ExpenseList";
import ExpenseListDetails from "../ExpenseListDetails/ExpenseListDetails";
import ExpenseListDetailsSkeleton from "../ExpenseListDetailsSkeleton/ExpenseListDetailsSkeleton";

export default function Dashboard() {
  const isLoggedIn = useIsLoggedIn();
  const { selected } = useSelector((state) => state.expenseList);

  return isLoggedIn ? (
    <Layout>
      <Row>
        <Col span={6}>
          <ExpenseList />
        </Col>
        <Col span={18}>
          <ExpenseListDetails />
        </Col>
      </Row>
    </Layout>
  ) : (
    <Redirect to='/signin' />
  );
}
