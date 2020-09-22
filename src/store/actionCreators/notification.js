import {
  SUCCESS_NOTIFICATION,
  ERROR_NOTIFICATION,
  CLEAR_ALL_NOTIFICATIONS,
  CLEAR_SUCCESS_NOTIFICATION,
  CLEAR_ERROR_NOTIFICATION,
} from "../actionTypes/notification";

function displaySuccessNotification(notificationInfo) {
  return {
    type: SUCCESS_NOTIFICATION,
    payload: {
      ...notificationInfo,
    },
  };
}

function displayErrorNotification(message) {
  return {
    type: ERROR_NOTIFICATION,
    payload: {
      message,
    },
  };
}

function clearAllNotifications(message) {
  return {
    type: CLEAR_ALL_NOTIFICATIONS,
  };
}

function clearSuccessNotification() {
  return {
    type: CLEAR_SUCCESS_NOTIFICATION,
  };
}

function clearErrorNotification() {
  return {
    type: CLEAR_ERROR_NOTIFICATION,
  };
}

export {
  displaySuccessNotification,
  displayErrorNotification,
  clearAllNotifications,
  clearErrorNotification,
  clearSuccessNotification,
};
