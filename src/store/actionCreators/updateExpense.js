import {
  ON_UPDATE_EXPENSES_SUCCESS,
  ON_UPDATE_EXPENSES_FAIL
} from "../actionTypes/expense";

const onUpdateExpenseSuccess = () => {
  return {
    type: ON_UPDATE_EXPENSES_SUCCESS
  };
};

const onUpdateExpenseFail = error => {
  return {
    type: ON_UPDATE_EXPENSES_FAIL,
    payload: {
      error
    }
  };
};

export const updateExpenseAction = (key, newData) => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    firebase
      .database()
      .ref(`expenses/${key}`)
      .update(newData)
      .then(() => {
        dispatch(onUpdateExpenseSuccess());
      })
      .catch(error => {
        dispatch(onUpdateExpenseFail(error));
      });
  };
};
