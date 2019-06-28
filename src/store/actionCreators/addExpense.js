import * as actionTypes from '../actionTypes/index';
import axios from '../../axios/axios-expenses';

import * as actionCreators from './fetchExpenses';


const addExpenseSuccess = (id) => {
    return {
        type: actionTypes.ON_EXPENSE_ADD_SUCCESS,
        id: id
    }
}

const addExpenseStart = () => {
    return {
        type: actionTypes.ON_EXPENSE_ADD_START
    }
}

const addExpenseFail = () => {
    return {
        type: actionTypes.ON_EXPENSE_ADD_FAIL
    }
}


export const addExpense = (expenseDetails) => {
    return (dispatch, getState) => {

        const state = getState();
        const currentUserId = state.auth.user.uid;


        axios.post('/expenses.json', expenseDetails)
            .then(response => {
                dispatch(addExpenseStart());
                dispatch(addExpenseSuccess(response.data.name));
                dispatch(actionCreators.fetchExpenses(currentUserId));
            }).catch(error => {
                dispatch(addExpenseFail(error));
            })

    }
}


