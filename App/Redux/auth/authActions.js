import { NavigationActions } from 'react-navigation'

const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,

  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,

  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,

  USERNAME_TEXT_CHANGE,
  PASSWORD_TEXT_CHANGE,
  CONFIRM_PASSWORD_TEXT_CHANGE,
} = require('../../Lib/constants').default;

export function onUsernameChange(text) {
  return {
    type: USERNAME_TEXT_CHANGE,
    payload: text,
  }
}

export function onPasswordChange(text) {
  return {
    type: PASSWORD_TEXT_CHANGE,
    payload: text,
  }
}

export function onConfirmPasswordChange(text) {
  return {
    type: CONFIRM_PASSWORD_TEXT_CHANGE,
    payload: text,
  }
}

export function loginRequest() {
  return {
    type: LOGIN_REQUEST,
  }
}

export function loginSuccess(json) {
  return {
    type: LOGIN_SUCCESS,
    payload: json,
  }
}

export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  }
}

// Hardcode the middleware for now until you figure out a functional backend


export function login(username, password) {
  return (dispatch) => {
    dispatch(loginRequest());
    if (username !== '') {
      dispatch(NavigationActions.navigate({routeName: 'FeedScreen'}));
      dispatch(loginSuccess());
    } else {
      dispatch(loginFailure('Wrong username or password'));
    }
  }
}
