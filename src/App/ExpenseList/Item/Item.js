import React from "react";
import { List, Avatar, Button, Skeleton } from "antd";

const { Item } = List;

export default function ItemComp({ title }) {
  return (
    <Item
      actions={[
        <a key='list-loadmore-edit'>edit</a>,
        <a key='list-loadmore-more'>more</a>,
      ]}
    >
      {title}
    </Item>
  );
}
