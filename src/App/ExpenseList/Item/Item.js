import React from "react";
import { List, Input, Popconfirm } from "antd";

// import {
//   DeleteOutlined,
//   EditOutlined,
//   CloseOutlined,
//   SaveOutlined,
// } from "@ant-design/icons";

import { item, icon } from "./Item.module.css";

const { Item } = List;

export default function ItemComp({
  title,
  _id,
  update,
  deleteLIst,
  cancelUpdate,
  onUpdate,
  makeUpdatable,
  selectList,
  stopPropogation,
  updating,
}) {
  return (
    <>
      {updating._id === _id ? (
        <Item
          actions={[
            <span
              key='list-loadmore-edit'
              onClick={cancelUpdate}
              className={icon}
            >
              Cancel
              {/* <CloseOutlined /> */}
            </span>,
            <span key='list-loadmore-more' onClick={update} className={icon}>
              Save
              {/* <SaveOutlined /> */}
            </span>,
          ]}
          className={item}
        >
          <Input
            value={updating.title}
            onChange={onUpdate}
            onClick={stopPropogation}
          />
        </Item>
      ) : (
        <Item
          actions={[
            <span
              key='list-loadmore-edit'
              onClick={(e) => makeUpdatable(e, _id)}
              className={icon}
            >
              Edit
              {/* <EditOutlined /> */}
            </span>,

            <Popconfirm title='Sure to delete?' onConfirm={deleteLIst}>
              <span
                key='list-loadmore-more'
                onClick={stopPropogation}
                className={icon}
              >
                Delete
                {/* <DeleteOutlined /> */}
              </span>
            </Popconfirm>,
          ]}
          onClick={() => selectList(_id)}
          className={item}
        >
          {title}
        </Item>
      )}
    </>
  );
}
