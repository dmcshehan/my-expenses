import * as actionTypes from "../actionTypes/index";
import combineObjectsAndReturn from "../../shared/combineObjectsAndReturn/combineObjectsAndReturn";

const intialState = {
  user: null,
  error: null,
  authenticating: false
};

const auth = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.ON_AUTH_META_SET_START:
      return combineObjectsAndReturn(state, { authenticating: true });

    case actionTypes.ON_AUTH_META_SET_SUCCESS:
      return combineObjectsAndReturn(state, {
        user: action.user,
        authenticating: false
      });

    case actionTypes.ON_AUTH_META_SET_FAIL:
      return combineObjectsAndReturn(state, {
        error: action.error,
        authenticating: false
      });

    case actionTypes.ON_AUTH_LOGOUT:
      return combineObjectsAndReturn(state, { user: null });

    default:
      return state;
  }
};

export default auth;
