import {
  ON_EXPENSES_UPDATE_SUCCESS,
  ON_EXPENSES_UPDATE_INIT
} from "../actionTypes/expense";

import axios from "../../axios/axios-expenses";
import { fetchExpensesAction } from "../actionCreators/fetchExpenses";

const updateExpenseSuccess = () => {
  return {
    type: ON_EXPENSES_UPDATE_SUCCESS
  };
};

const initializeUpdate = () => {
  return {
    type: ON_EXPENSES_UPDATE_INIT
  };
};

export const updateInit = () => {
  return dispatch => {
    dispatch(initializeUpdate());
  };
};

export const updateExpense = (key, newData) => {
  return (dispatch, getState) => {
    const state = getState();
    const currentUserId = state.auth.user.uid;

    console.log(newData);
    axios
      .put(`/${currentUserId}/${key}.json`, newData)
      .then(response => {
        dispatch(updateExpenseSuccess());
        dispatch(fetchExpensesAction());
      })
      .catch(error => {
        console.log(error);
      });
  };
};
