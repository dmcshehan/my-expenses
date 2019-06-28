import * as actionTypes from "../actionTypes/index";
import combineObjectsAndReturn from "../../shared/combineObjectsAndReturn/combineObjectsAndReturn";

const intialState = {
  expenses: null,
  fetching: false,
  error: null
};

const fetchExpenses = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.ON_EXPENSES_FETCH_START:
      return combineObjectsAndReturn(state, { fetching: true });

    case actionTypes.ON_EXPENSES_FETCH_SUCCESS:
      return combineObjectsAndReturn(state, {
        expenses: action.allExpenses,
        fetching: false
      });

    case actionTypes.ON_EXPENSES_FETCH_FAIL:
      return combineObjectsAndReturn(state, {
        fetching: false,
        error: action.error
      });

    default:
      return state;
  }
};

export default fetchExpenses;
