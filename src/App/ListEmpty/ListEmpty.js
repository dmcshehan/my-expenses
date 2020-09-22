import React from "react";

import { skeleton, info } from "./ListEmpty.module.css";

export default function ListEmpty({ styles, text }) {
  return (
    <div style={{ ...styles }} className={skeleton}>
      <p className={info}>{text}</p>
    </div>
  );
}
