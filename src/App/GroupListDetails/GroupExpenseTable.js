import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import currencyFormatter from "currency-formatter";

import { Table } from "antd";
import TableHeader from "./TableHeader/TableHeader";

export default function EditableTable({ expenses, listId }) {
  const [data, setData] = useState(expenses);
  const { expenseLists } = useSelector((state) => state.expenseList);
  const { title } = expenseLists.find((list) => list._id === listId);

  useEffect(() => {
    setData(expenses);
  }, [expenses]); //fire only when expenses array changes

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      width: "15%",
      render: (date) => moment(date).format("MMMM DD, YYYY"),
    },
    {
      title: "Reason",
      dataIndex: "reason",
      width: "55%",
      editable: true,
    },
    {
      title: "Cost",
      dataIndex: "cost",
      width: "10%",
      editable: true,
      render: (cost) => currencyFormatter.format(cost, { code: "LKR" }),
    },
  ];

  return (
    <>
      <TableHeader title={title} expenses={data} />
      <Table
        rowKey={({ _id }) => _id}
        bordered
        dataSource={data}
        columns={columns}
        rowClassName="editable-row"
        pagination={false}
        style={{ marginBottom: 20 }}
        // scroll={{ y: `calc(100vh - ${height}px)` }}
      />
    </>
  );
}
