import React from "react";

//antd comps
import { Row, Col } from "antd";

//custom comps
import ExpenseList from "../ExpenseList/ExpenseList";
import ExpenseListDetails from "../ExpenseListDetails/ExpenseListDetails";

export default function Dashboard() {

  return (
    <Row>
      <Col span={6}>
        <ExpenseList />
      </Col>
      <Col span={18}>
        <ExpenseListDetails />
      </Col>
    </Row>
  )

}
