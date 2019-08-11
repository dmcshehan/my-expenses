import * as actionTypes from "../actionTypes/index";
import axios from "../../axios/axios-expenses";

import { fetchExpensesAction } from "./fetchExpenses";

const deleteExpenseSuccess = () => {
  return {
    type: actionTypes.ON_EXPENSES_DELETE_SUCCESS
  };
};

export const deleteExpense = key => {
  return (dispatch, getState) => {
    const state = getState();
    const currentUserId = state.auth.user.uid;

    axios
      .delete(`/${currentUserId}/${key}.json`)
      .then(response => {
        dispatch(deleteExpenseSuccess());
        dispatch(fetchExpensesAction(currentUserId));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
