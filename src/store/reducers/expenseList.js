import produce from "immer";
import {
  CHANGE_EXPENSE_LISTS_SUCCESS,
  SELECT_EXPENSE_LIST_SUCCESS,
} from "../actionTypes/expenseList.js";

const initialState = {
  expenseLists: [],
  selected: null,
};

export default (state = initialState, action) =>
  produce(state, (draftState) => {
    const { type, payload } = action;
    switch (type) {
      case CHANGE_EXPENSE_LISTS_SUCCESS:
        draftState.expenseLists = payload.expenseLists;
        break;
      case SELECT_EXPENSE_LIST_SUCCESS:
        //draftState.selected = payload.listId;
        draftState.selected = state.expenseLists.find(
          (expenseList) => expenseList._id === payload.listId
        );
        break;

      default:
        break;
    }
  });
