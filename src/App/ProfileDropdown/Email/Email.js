import React from "react";
import { useSelector } from "react-redux";

import { Typography } from "antd";

//styles
import { mail } from "./Email.module.css";

const { Text } = Typography;

export default function Name() {
  const { email } = useSelector((state) => state.user).user;
  return <Text className={mail}>{email}</Text>;
}
