import produce from "immer";
import { SELECT_EXPENSE_LIST } from "../actionTypes/expenseListDetails";

const initialState = {
  selected: null,
};

export default (state = initialState, action) =>
  produce(state, (draftState) => {
    const { type, payload } = action;
    switch (type) {
      case SELECT_EXPENSE_LIST:
        draftState.selected = payload.selected;
      default:
        break;
    }
  });
