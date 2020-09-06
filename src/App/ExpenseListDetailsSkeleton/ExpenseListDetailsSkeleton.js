import React from "react";
import { Result, Button } from "antd";
import { SmileOutlined, UnorderedListOutlined } from "@ant-design/icons";

export default function ExpenseListDetailsSkeleton() {
  return (
    <div>
      <Result
        icon={<SmileOutlined />}
        title='Please, Select a list from Expense Lists!'
      />
    </div>
  );
}
