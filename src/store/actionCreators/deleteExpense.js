import * as actionTypes from '../actionTypes/index';
import axios from '../../axios/axios-expenses';

import * as actionCreators from '../actionCreators/fetchExpenses';


const deleteExpenseSuccess = () => {
    return {
        type: actionTypes.ON_EXPENSES_DELETE_SUCCESS
    }
}

export const deleteExpense = (id) => {
    return (dispatch, getState) => {

        const state = getState();
        const currentUserId = state.auth.user.uid;

        axios
            .delete(`/expenses/${id}.json`)
            .then(response => {
                dispatch(deleteExpenseSuccess());
                dispatch(actionCreators.fetchExpenses(currentUserId));
            }).catch(error => {
                console.log(error);
            })
    }
}



