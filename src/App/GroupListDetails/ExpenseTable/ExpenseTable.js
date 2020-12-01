import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import {
  Table
} from "antd";


const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {

  return (
    <td {...restProps}>
      { children}
    </td>
  );
};

export default function EditableTable({ height }) {
  const { expenses } = useSelector((state) => state.expenseListDetails);

  const [data, setData] = useState(expenses);

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
    },
  ];


  return (
    <Table
      rowKey={({ _id }) => _id}
      components={{
        body: {
          cell: EditableCell,
        },
      }}
      bordered
      dataSource={data}
      columns={columns}
      rowClassName='editable-row'
      pagination={false}
      scroll={{ y: `calc(100vh - ${height}px)` }}
    />
  );
}
