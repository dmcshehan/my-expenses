import * as actionTypes from "../actionTypes/index";

// const updateExpenseSuccess = () => {
//   return {
//     type: actionTypes.ON_EXPENSES_UPDATE_SUCCESS
//   };
// };

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

export const updateExpense = newData => {
  return (dispatch, getState) => {
    const state = getState();

    const originalExpense = Object.keys(state.fetch.expenses);

    console.log(newData.id, originalExpense, state.fetch.expenses);

    // axios
    //   .put(`/expenses/${id}.json`, newData)
    //   .then(response => {
    //     dispatch(updateExpenseSuccess());
    //     dispatch(actionCreators.fetchExpenses(currentUserId));
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };
};
