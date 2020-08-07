import produce from "immer";
import { CHANGE_EXPENSE_LISTS } from "../actionTypes/expenseList.js";

const initialState = {
  expenseLists: [],
};

export default (state = initialState, action) =>
  produce(state, (draftState) => {
    const { type, payload } = action;
    switch (type) {
      case CHANGE_EXPENSE_LISTS:
        draftState.expenseLists = payload.expenseLists;
        break;

      default:
        break;
    }
  });
