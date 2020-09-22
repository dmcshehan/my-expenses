import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Space } from "antd";
import moment from "moment";

import { fetchExpenses } from "../../../store/actionCreators/expenseListDetails";

export default function ExpenseTable() {
  const dispatch = useDispatch();
  const { selected } = useSelector((state) => state.expenseList);
  const { expenses } = useSelector((state) => state.expenseListDetails);

  console.log(expenses);

  useEffect(() => {
    if (selected) {
      dispatch(fetchExpenses(selected._id));
    }
  }, []);

  const columns = [
    {
      title: "Date",
      dataIndex: "date",

      render: (date) =>
        moment(new Date(date.seconds * 1000)).format("MMMM DD, YYYY"),
    },
    {
      title: "Reason",
      dataIndex: "reason",
    },
    {
      title: "Currency",
      dataIndex: "currency",
    },
    {
      title: "Cost",
      dataIndex: "cost",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size='middle'>
          <a>Invite </a>
          <a>Delete</a>
        </Space>
      ),
      ellipsis: true,
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={expenses}
        rowKey={({ _id }) => _id}
      />
    </div>
  );
}
