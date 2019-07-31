import React, { Component } from "react";
import moment from "moment";

import { Table, Button } from "antd";
const ButtonGroup = Button.Group;

class ExpenseList extends Component {
  render() {
    const { onDelete, onUpdate, expenses } = this.props;
    const columns = [
      {
        title: "Reason",
        dataIndex: "reason",
        key: "name"
      },
      {
        title: "Amount",
        dataIndex: "amount",
        key: "amount"
      },
      {
        title: "Date",
        dataIndex: "date",
        key: "date"
      },
      {
        title: "Actions",
        dataIndex: "actions",
        key: "actions",
        render: (text, expense) => (
          <ButtonGroup>
            <Button
              icon="delete"
              type="danger"
              onClick={() => onDelete(expense.key)}
            />
            <Button icon="edit" type="primary" />
          </ButtonGroup>
        )
      }
    ];

    //date is stored as an object
    const data = expenses
      ? expenses.map(expense => ({
          ...expense,
          date: moment(expense.date).format("MMM Do YY")
        }))
      : [];

    console.log(data);

    return <Table columns={columns} dataSource={data} />;
  }
}

export default ExpenseList;
