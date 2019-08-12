import React from "react";

import { Row, Col } from "antd";

//custom modules
import ExpenseTable from "../../components/ExpenseTable/ExpenseTable";
import TotalSpent from "../../components/TotalSpent/TotalSpent";
import AddExpenseForm from "../../components/AddExpenseForm/AddExpenseForm";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <Row gutter={32}>
          <Col span={18}>
            <p>Space </p>
          </Col>
          <Col span={6} style={{ marginBottom: 32 }}>
            <TotalSpent />
          </Col>
        </Row>
        <Row gutter={32}>
          <Col span={18}>
            <ExpenseTable />
          </Col>
          <Col span={6}>
            <AddExpenseForm />
          </Col>
        </Row>
      </>
    );
  }
}

export default Dashboard;
