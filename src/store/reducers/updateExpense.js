import * as actionTypes from '../actionTypes/index';
//import combineObjectsAndReturn from '../../shared/combineObjectsAndReturn/combineObjectsAndReturn';

const intialState = {};

const updateExpenses = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.ON_EXPENSES_UPDATE_START:
            return state;

        case actionTypes.ON_EXPENSES_UPDATE_SUCCESS:
            return state;

        case actionTypes.ON_EXPENSES_UPDATE_FAIL:
            return state;

        default:
            return state

    }
}

export default updateExpenses;