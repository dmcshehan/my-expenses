import produce from "immer";
import {
  SELECT_EXPENSE_LIST,
  SHOW_ADD_EXPENSE_FORM,
  HIDE_ADD_EXPENSE_FORM,
} from "../actionTypes/expenseListDetails";

const initialState = {
  isAddExpenseFormOpen: false,
  expenses: [],
  isAddExpenseFormOpen: false,
};

export default (state = initialState, action) =>
  produce(state, (draftState) => {
    const { type, payload } = action;
    switch (type) {
      case SELECT_EXPENSE_LIST:
        draftState.selected = payload.selected;
        break;
      case SHOW_ADD_EXPENSE_FORM:
        draftState.isAddExpenseFormOpen = true;
        break;
      case HIDE_ADD_EXPENSE_FORM:
        draftState.isAddExpenseFormOpen = false;
        break;
      default:
        break;
    }
  });
