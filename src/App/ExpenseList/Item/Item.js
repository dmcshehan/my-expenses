import React, { useState } from "react";
import { List, Form, Input } from "antd";
import { useDispatch } from "react-redux";

import {
  selectExpenseList,
  updateExpenseList,
} from "../../../store/actionCreators/expenseList";

import {
  DeleteOutlined,
  EditOutlined,
  CloseOutlined,
  SaveOutlined,
} from "@ant-design/icons";

import { item } from "./Item.module.css";

const { Item } = List;

export default function ItemComp({ title, _id }) {
  const dispatch = useDispatch();

  const [isFormVisible, makeFormVisible] = useState(false);
  const [updated, setUpdated] = useState(title);
  function selectList() {
    dispatch(selectExpenseList(_id));
  }

  function makeUpdatable(event) {
    event.stopPropagation();
    makeFormVisible(true);
  }

  function onUpdate(event) {
    setUpdated(event.target.value);
  }

  function cancelUpdate(event) {
    event.stopPropagation();
    makeFormVisible(false);
    setUpdated(title);
  }

  function stopPropogation(event) {
    event.stopPropagation();
  }

  function deleteLIst(event) {
    event.stopPropagation();
  }

  function update(event) {
    event.stopPropagation();
    dispatch(updateExpenseList(_id, { title: updated })).then(function () {
      makeFormVisible(false);
      setUpdated(title);
    });
  }

  return (
    <>
      {isFormVisible ? (
        <Item
          actions={[
            <a key='list-loadmore-edit' onClick={cancelUpdate}>
              <CloseOutlined />
            </a>,
            <a key='list-loadmore-more' onClick={update}>
              <SaveOutlined />
            </a>,
          ]}
          onClick={selectList}
          className={item}
        >
          <Input
            value={updated}
            onChange={onUpdate}
            onClick={stopPropogation}
          />
        </Item>
      ) : (
        <Item
          actions={[
            <a key='list-loadmore-edit' onClick={makeUpdatable}>
              <EditOutlined />
            </a>,
            <a key='list-loadmore-more' onClick={deleteLIst}>
              <DeleteOutlined />
            </a>,
          ]}
          onClick={selectList}
          className={item}
        >
          {title}
        </Item>
      )}
    </>
  );
}
