import * as actionTypes from '../actionTypes/index';
import axios from '../../axios/axios-expenses';

import * as actionCreators from '../actionCreators/fetchExpenses';

const updateExpenseSuccess = () => {
    return {
        type: actionTypes.ON_EXPENSES_UPDATE_SUCCESS
    }
}

export const updateExpense = (id, newData) => {
    return (dispatch, getState) => {

        const state = getState();
        const currentUserId = state.auth.user.uid;

        axios
            .put(`/expenses/${id}.json`, newData)
            .then(response => {
                dispatch(updateExpenseSuccess());
                dispatch(actionCreators.fetchExpenses(currentUserId));
            }).catch(error => {
                console.log(error);
            })
    }
}




