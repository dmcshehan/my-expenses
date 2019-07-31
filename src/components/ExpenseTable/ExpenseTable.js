import React, { Component } from "react";
import moment from "moment";

import { Table, Divider, Tag } from "antd";

class ExpenseList extends Component {
  render() {
    const columns = [
      {
        title: "Reason",
        dataIndex: "reason",
        key: "name"
      },
      {
        title: "Cost",
        dataIndex: "cost",
        key: "cost"
      },
      {
        title: "Date",
        dataIndex: "date",
        key: "date"
      },
      {
        title: "Actions",
        dataIndex: "actions",
        key: "actions"
      }
    ];

    //date is stored as an object
    const data = this.props.allExpenses
      ? this.props.allExpenses.map(item => ({
          ...item,
          date: moment(item.date).format("MMM Do YY")
        }))
      : [];

    console.log(data);

    return <Table columns={columns} dataSource={data} />;
  }
}

export default ExpenseList;
