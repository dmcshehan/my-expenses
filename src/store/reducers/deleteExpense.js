import * as actionTypes from '../actionTypes/index';
//import combineObjectsAndReturn from '../../shared/combineObjectsAndReturn/combineObjectsAndReturn';

const intialState = {};

const deleteExpenses = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.ON_EXPENSES_DELETE_START:
            return state;

        case actionTypes.ON_EXPENSES_DELETE_SUCCESS:
            return state;

        case actionTypes.ON_EXPENSES_DELETE_FAIL:
            return state;

        default:
            return state

    }
}

export default deleteExpenses;