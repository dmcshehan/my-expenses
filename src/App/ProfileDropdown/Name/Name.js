import React from "react";
import { useSelector } from "react-redux";

import { Typography } from "antd";

//styles
import { name } from "./Name.module.css";

const { Text } = Typography;

export default function Name() {
  const { displayName } = useSelector((state) => state.user).user;
  return <Text className={name}>{displayName}</Text>;
}
