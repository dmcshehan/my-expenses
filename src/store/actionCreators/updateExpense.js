import {
  ON_EXPENSES_UPDATE_SUCCESS,
  ON_EXPENSES_UPDATE_INIT
} from "../actionTypes/expense";

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
  return (dispatch, getState, getFirebase) => {
    const state = getState();
    const currentUserId = state.auth.user.uid;

    const firebase = getFirebase();
    firebase
      .database()
      .ref(`expenses/${key}`)
      .update(newData);
  };
};
