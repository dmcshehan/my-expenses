import {
  SHOW_ADD_EXPENSE_LIST_FORM,
  HIDE_ADD_EXPENSE_LIST_FORM,
} from "../actionTypes/addExpenseListForm";

function showAddExpenseListForm() {
  return (dispatch) => {
    dispatch({
      type: SHOW_ADD_EXPENSE_LIST_FORM,
    });
  };
}

function hideAddExpenseListForm() {
  return (dispatch) => {
    dispatch({
      type: HIDE_ADD_EXPENSE_LIST_FORM,
    });
  };
}

export { showAddExpenseListForm, hideAddExpenseListForm };
