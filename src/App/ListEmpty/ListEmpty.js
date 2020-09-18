import React from "react";

import { Typography } from "antd";

import { skeleton, info } from "./ListEmpty.module.css";

const { Paragraph } = Typography;

export default function ListEmpty({ styles, text }) {
  return (
    <div style={{ ...styles }} className={skeleton}>
      <p className={info}>{text}</p>
    </div>
  );
}
