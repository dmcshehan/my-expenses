import React from "react";
import { Redirect } from "react-router-dom";

//antd comps
import { Row, Col } from "antd";

//custom comps
import Layout from "../Layout/Layout";

//hooks
import useIsLoggedIn from "../../hooks/useIsLoggedIn";

//custom comps
import ExpenseLists from "../ExpenseList/ExpenseList";

export default function Dashboard() {
  const isLoggedIn = useIsLoggedIn();

  return isLoggedIn ? (
    <Layout>
      <Row gutter={16}>
        <Col span={4}>
          <ExpenseLists />
        </Col>
        <Col span={20}>
          <ExpenseLists />
        </Col>
      </Row>
      <div></div>
    </Layout>
  ) : (
    <Redirect to='/signin' />
  );
}
