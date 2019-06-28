import * as actionTypes from "../actionTypes/index";
import combineObjectsAndReturn from "../../shared/combineObjectsAndReturn/combineObjectsAndReturn";

const intialState = {
  totalSpent: 0,
  calculating: false
};

const calculateExpenses = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.CALCULATE_TOTAL_SPENT_START:
      return combineObjectsAndReturn(state, { calculating: true });

    case actionTypes.CALCULATE_TOTAL_SPENT_SUCCESS:
      return combineObjectsAndReturn(state, { totalSpent: action.totalSpent });

    case actionTypes.BASE_CURRENCY_UPDATE_SUCCESS:
      return combineObjectsAndReturn(state, {
        baseCurrency: action.newBaseCurrency
      });
    default:
      return state;
  }
};

export default calculateExpenses;
