import React from "react";
import { List, Input, Popconfirm } from "antd";

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
            </span>,
            <span key='list-loadmore-more' onClick={update} className={icon}>
              Save
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
            </span>,

            <Popconfirm
              title='Deleting this list will delete all expenses associate with it. Sure to delete?'
              onConfirm={(e) => deleteLIst(e, _id)}
            >
              <span
                key='list-loadmore-more'
                onClick={stopPropogation}
                className={icon}
              >
                Delete
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
