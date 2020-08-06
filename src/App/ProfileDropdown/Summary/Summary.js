import React from "react";

//custom comps
import Name from "../Name/Name";
import Email from "../Email/Email";

//styles
import { summary } from "./Summary.module.css";

export default function Summary() {
  return (
    <div className={summary}>
      <Name />
      <Email />
    </div>
  );
}
