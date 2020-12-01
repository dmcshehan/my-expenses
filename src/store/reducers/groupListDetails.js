import produce from "immer";
import {
  FETCH_EXPENSES_SUCCESS_FOR_SELECTED_GROUP,
  CLEAR_EXPENSES,
} from "../actionTypes/groupListDetails";

const initialState = {
  expenses: [],
};

export default (state = initialState, action) =>
  produce(state, (draftState) => {
    const { type, payload } = action;
    switch (type) {
      case FETCH_EXPENSES_SUCCESS_FOR_SELECTED_GROUP:
        console.log(payload.expenses);
        draftState.expenses = payload.expenses;
        break;

      case CLEAR_EXPENSES:
        draftState.expenses = [];
        break;

      default:
        break;
    }
  });
