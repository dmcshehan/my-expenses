import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Table,
  Space,
  Input,
  InputNumber,
  Popconfirm,
  Form,
  DatePicker,
  Button,
} from "antd";

import {
  DeleteOutlined,
  EditOutlined,
  CloseOutlined,
  SaveOutlined,
} from "@ant-design/icons";

import { updateExpense } from "../../../store/actionCreators/expenseListDetails";

import moment from "moment";

import { fetchExpenses } from "../../../store/actionCreators/expenseListDetails";

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
  const inputNode =
    inputType === "number" ? (
      <InputNumber />
    ) : inputType === "date" ? (
      <DatePicker />
    ) : (
      <Input />
    );

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

export default function EditableTable() {
  const { expenses } = useSelector((state) => state.expenseListDetails);
  const { selected } = useSelector((state) => state.expenseList);

  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [data, setData] = useState(expenses);
  const [editingId, setEditingId] = useState("");

  useEffect(() => {
    setData(expenses);
  }, [expenses]); //fire only when expenses array changes

  const isEditing = (record) => record._id === editingId;

  const edit = (record) => {
    form.setFieldsValue({
      date: "",
      reason: "",
      currency: "",
      cost: "",
      ...record,
    });
    setEditingId(record._id);
  };

  const cancel = () => {
    setEditingId("");
  };

  const save = async (_id) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => _id === item._id);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });

        dispatch(updateExpense(_id, row)).then(() => {
          setData(newData);
          setEditingId("");
        });
      } else {
        newData.push(row);
        //setData(newData);
        //setEditingId("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

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
    {
      title: "Action",
      key: "action",
      width: "10%",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              onClick={() => save(record._id)}
              style={{
                marginRight: 8,
              }}
            >
              <SaveOutlined />
            </a>
            <Popconfirm title='Sure to cancel?' onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Space size='middle'>
            <a disabled={editingId !== ""} onClick={() => edit(record)}>
              <EditOutlined />
            </a>

            <Popconfirm title='Sure to delete?' onConfirm={cancel}>
              <a>
                <DeleteOutlined />
              </a>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType:
          col.dataIndex === "cost"
            ? "number"
            : col.dataIndex === "date"
            ? "date"
            : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Form form={form} onFinish={save}>
      <Table
        rowKey={({ _id }) => _id}
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName='editable-row'
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
}
