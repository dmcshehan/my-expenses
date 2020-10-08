import produce from "immer";
import {
  CHANGE_EXPENSE_LISTS_SUCCESS,
  SELECT_EXPENSE_LIST_SUCCESS,
  SHOW_ADD_EXPENSE_LIST_FORM,
  HIDE_ADD_EXPENSE_LIST_FORM,
  UPDATE_EXPENSE_LIST_SUCCESS,
  CLEAR_SELECTED_EXPENSE_LIST,
} from "../actionTypes/expenseList.js";

const initialState = {
  expenseLists: [],
  selected: null,
  isAddExpenseListFormOpen: false,
};

export default (state = initialState, action) =>
  produce(state, (draftState) => {
    const { type, payload } = action;
    switch (type) {
      case CHANGE_EXPENSE_LISTS_SUCCESS:
        draftState.expenseLists = payload.expenseLists;
        break;

      case UPDATE_EXPENSE_LIST_SUCCESS:
        if (payload.updated._id === state.selected._id) {
          draftState.selected = payload.updated;
        }
        break;

      case SELECT_EXPENSE_LIST_SUCCESS:
        //draftState.selected = payload.listId;
        draftState.selected = state.expenseLists.find(
          (expenseList) => expenseList._id === payload.listId
        );
        break;

      case SHOW_ADD_EXPENSE_LIST_FORM:
        draftState.isAddExpenseListFormOpen = true;
        break;
      case HIDE_ADD_EXPENSE_LIST_FORM:
        draftState.isAddExpenseListFormOpen = false;
        break;

      case CLEAR_SELECTED_EXPENSE_LIST:
        draftState.selected = null;
        break;

      default:
        break;
    }
  });
