import * as actionTypes from "../actionTypes/index";
import axios from "../../axios/axios-expenses";
import { fetchExpenses } from "../actionCreators/fetchExpenses";

const updateExpenseSuccess = () => {
  return {
    type: actionTypes.ON_EXPENSES_UPDATE_SUCCESS
  };
};

const initializeUpdate = () => {
  return {
    type: actionTypes.ON_EXPENSES_UPDATE_INIT
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
        dispatch(fetchExpenses());
      })
      .catch(error => {
        console.log(error);
      });
  };
};
