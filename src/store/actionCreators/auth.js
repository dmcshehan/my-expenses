import {
  ON_AUTH_SUCCESS,
  ON_AUTH_START,
  ON_AUTH_FAIL,
  ON_AUTH_LOGOUT
} from "../actionTypes/auth.js";

const onAuthSuccess = user => {
  return {
    type: ON_AUTH_SUCCESS,
    user: user
  };
};
const onAuthStart = () => {
  return {
    type: ON_AUTH_START
  };
};

const onAuthFail = user => {
  return {
    type: ON_AUTH_FAIL
  };
};

export const authUserAction = ({ email, password }) => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();

    firebase
      .login({ email, password })
      .then(resuts => {
        console.log(resuts.user);
        dispatch(onAuthSuccess(resuts.user.user));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const getCurrentUserAction = () => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();

    let currentUser = firebase.auth().currentUser;

    console.log("currentUser", currentUser);
  };
};

export const logoutAction = () => {
  return dispatch => {
    dispatch({
      type: ON_AUTH_LOGOUT
    });
  };
};
