import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { notification } from "antd";
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

import {
  clearErrorNotification,
  clearSuccessNotification,
} from "../../store/actionCreators/notification";

export default function Notification() {
  const dispatch = useDispatch();
  const { success, error } = useSelector((state) => state.notification);

  function showNotification(args) {
    notification.open(args);
  }

  function clearSuccess() {
    dispatch(clearSuccessNotification());
  }

  function clearError() {
    dispatch(clearErrorNotification());
  }

  useEffect(() => {
    let args = {};
    if (success) {
      args = {
        message: success.title,
        duration: 3,
        icon: <CheckCircleOutlined />,
        onClose: clearSuccess,
      };

      showNotification(args);
    }
    if (error) {
      args = {
        message: error.title,
        duration: 0,
        icon: <ExclamationCircleOutlined />,
        onClose: clearError,
      };
      showNotification(args);
    }
  });
  return null;
}
