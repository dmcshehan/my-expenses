import produce from "immer";
import {
  SHOW_ADD_EXPENSE_LIST_FORM,
  HIDE_ADD_EXPENSE_LIST_FORM,
} from "../actionTypes/addExpenseListForm";

const initialState = {
  isAddExpenseFormOpen: false,
};

export default (state = initialState, action) =>
  produce(state, (draftState) => {
    const { type } = action;
    switch (type) {
      case SHOW_ADD_EXPENSE_LIST_FORM:
        draftState.isAddExpenseFormOpen = true;
        break;
      case HIDE_ADD_EXPENSE_LIST_FORM:
        draftState.isAddExpenseFormOpen = false;
        break;
      default:
        break;
    }
  });
