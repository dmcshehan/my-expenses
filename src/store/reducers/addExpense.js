import * as actionTypes from "../actionTypes/index";
import combineObjectsAndReturn from "../../shared/combineObjectsAndReturn/combineObjectsAndReturn";

const intialState = {
  expenses: null
};

const addExpenses = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.ON_EXPENSE_ADD_START:
      return combineObjectsAndReturn(state);

    case actionTypes.ON_EXPENSE_ADD_SUCCESS:
      return combineObjectsAndReturn(state);

    case actionTypes.ON_EXPENSE_ADD_FAIL:
      return combineObjectsAndReturn(state);

    default:
      return state;
  }
};

export default addExpenses;
