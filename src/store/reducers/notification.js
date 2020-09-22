import produce from "immer";
import {
  SUCCESS_NOTIFICATION,
  ERROR_NOTIFICATION,
  CLEAR_ALL_NOTIFICATIONS,
  CLEAR_SUCCESS_NOTIFICATION,
  CLEAR_ERROR_NOTIFICATION,
} from "../actionTypes/notification";

const initialState = {
  success: null,
  error: null,
};

export default (state = initialState, action) =>
  produce(state, (draftState) => {
    const { type, payload } = action;
    switch (type) {
      case SUCCESS_NOTIFICATION:
        draftState.success = payload;
        break;
      case ERROR_NOTIFICATION:
        draftState.error = payload;
        break;

      case CLEAR_SUCCESS_NOTIFICATION:
        draftState.success = null;
        break;

      case CLEAR_ERROR_NOTIFICATION:
        draftState.error = null;
        break;

      case CLEAR_ALL_NOTIFICATIONS:
        draftState.error = null;
        draftState.success = null;
        break;

      default:
        break;
    }
  });
