import produce from "immer";
import {
  FETCH_EXPENSES_SUCCESS,
  SHOW_ADD_EXPENSE_FORM,
  HIDE_ADD_EXPENSE_FORM,
} from "../actionTypes/expenseListDetails";

const initialState = {
  expenses: [],
  isAddExpenseFormOpen: false,
};

export default (state = initialState, action) =>
  produce(state, (draftState) => {
    const { type, payload } = action;
    switch (type) {
      case FETCH_EXPENSES_SUCCESS:
        draftState.expenses = payload.expenses;
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
