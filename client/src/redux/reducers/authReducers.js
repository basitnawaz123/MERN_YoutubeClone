import {
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT,
  USER_LOADED,
} from "../constants/authConstants";
import jwt_decode from "jwt-decode";
const initialState = {
  token: localStorage.getItem("_token"),
  isLoggedIn: false,
  name: null,
  email: null,
  _id: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
    case SIGN_UP:
    case USER_LOADED:
      if (action.payload != null) {
        var user = jwt_decode(action.payload);
        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          _id: user._id,
          isLoggedIn: user.auth,
        };
      }

    case SIGN_OUT:
      localStorage.removeItem("_token");

      return {
        token: null,
        name: null,
        email: null,
        _id: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
