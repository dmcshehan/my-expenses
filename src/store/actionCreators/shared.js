import { ON_ACTION_FAIL, ON_ACTION_START } from "../actionTypes/expense";

export const onActionStart = () => ({
  type: ON_ACTION_START
});

export const onActionFail = error => ({
  type: ON_ACTION_FAIL,
  payload: {
    error
  }
});
