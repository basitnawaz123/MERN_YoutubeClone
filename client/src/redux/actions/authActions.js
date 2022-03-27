import axios from "axios";
import {
  IS_AUTHENTICATED,
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
  USER_LOADED,
} from "../constants/authConstants";

export const signUp = (token) => {
  return {
    type: SIGN_UP,
    payload: token,
  };
};

export const SignIn = (token) => {
  localStorage.setItem("_token", token);
  return {
    type: SIGN_IN,
    payload: token,
  };
};

export const logOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const loadUser = (token) => {
  if (token != null) {
    return {
      type: USER_LOADED,
      payload: token,
    };
  } else {
    return {
      type: USER_LOADED,
      payload: null,
    };
  }
};
