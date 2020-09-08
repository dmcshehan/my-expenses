import React from "react";
import { List } from "antd";
import { useDispatch } from "react-redux";

import { selectExpenseList } from "../../../store/actionCreators/expenseList";

import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import { item } from "./Item.module.css";

const { Item } = List;

export default function ItemComp({ title, _id }) {
  const dispatch = useDispatch();

  function selectList() {
    dispatch(selectExpenseList(_id));
  }

  return (
    <Item
      actions={[
        <a key='list-loadmore-edit'>
          <EditOutlined />
        </a>,
        <a key='list-loadmore-more'>
          <DeleteOutlined />
        </a>,
      ]}
      onClick={selectList}
      className={item}
    >
      {title}
    </Item>
  );
}
