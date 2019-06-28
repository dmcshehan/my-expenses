import * as actionTypes from "../actionTypes/index";
import * as actionCreators from "../actionCreators/index";
import axios from "../../axios/axios-expenses";

const authSuccess = user => {
  return {
    type: actionTypes.ON_AUTH_META_SET_SUCCESS,
    user: user
  };
};
const authStart = () => {
  return {
    type: actionTypes.ON_AUTH_META_SET_START
  };
};

const authFail = user => {
  return {
    type: actionTypes.ON_AUTH_META_SET_FAIL
  };
};

export const auth = user => {
  //console.log("auth user function", user);

  return (dispatch, getState) => {
    let queryParams = `?orderBy="userId"&equalTo="${user.uid}"`;
    //console.log("came inside return function");
    axios
      .get(`/users.json${queryParams}`)
      .then(response => {
        //console.log(response);

        if (
          response.status === 200 &&
          Object.keys(response.data).length !== 0
        ) {
          //console.log("in");
          //here I add baseCurrency to the auth user from the firebase database
          Object.keys(response.data).forEach(firebaseUserId => {
            user.baseCurrency = response.data[firebaseUserId].baseCurrency;
          });

          dispatch(authStart());
          dispatch(authSuccess(user));
          dispatch(actionCreators.fetchExpenses(user.uid));
        } else if (Object.keys(response.data).length === 0) {
          let newUser = {
            userId: user.uid,
            baseCurrency: "USD"
          };

          axios.post(`/users.json`, newUser).then(response => {
            //returns the firebase ID of the newly added user, checking weather its length is > 0
            //which means there is a valid firebase ID

            if (response.data.name.length > 0) {
              //Doing the same thing like above function, not usre weather its right
              dispatch(authStart());
              dispatch(
                authSuccess({
                  ...user,
                  baseCurrency: "USD"
                })
              );
              dispatch(actionCreators.fetchExpenses(user.uid));
            }
          });
        }
      })
      .catch(error => {
        dispatch(authFail(error));
      });
  };
};

export const logout = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.ON_AUTH_LOGOUT
    });
  };
};
