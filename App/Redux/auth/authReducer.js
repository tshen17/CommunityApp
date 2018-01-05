
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

import InitialState from './authInitialState'

const initialState = new InitialState();



// TODO: Add a valiaiton authorization system for all the fields. 

function authReducer (state = initialState, action) {

  const {type, payload} = action;

  switch (type) {
    case USERNAME_TEXT_CHANGE: {
      let nextState = state
        .setIn(['form', 'fields', 'username'], payload)
        .setIn(['form', 'error'], null);
      return nextState;
    }

    case PASSWORD_TEXT_CHANGE: {
      let nextState = state
        .setIn(['form', 'fields', 'password'], payload)
        .setIn(['form', 'error'], null);
      return nextState;
    }

    case CONFIRM_PASSWORD_TEXT_CHANGE: {
      let nextState = state
        .setIn(['form', 'fields', 'confirmPassword'], payload)
        .setIn(['form', 'error'], null);
      return nextState;
    }

    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
    case RESET_PASSWORD_REQUEST: {
      let nextState = state
        .setIn(['form', 'isFetching'], true)
        .setIn(['form', 'error'], null);
      return nextState;
    }

    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
    case RESET_PASSWORD_SUCCESS: {
      let nextState = state
        .setIn(['form', 'isFetching'], false)
        .setIn(['form', 'isSending'], false);
      return nextState;
    }

    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
    case RESET_PASSWORD_FAILURE: {
      let nextState = state
        .setIn(['form', 'isFetching'], false)
        .setIn(['form', 'isSending'], false)
        .setIn(['form', 'error'], action.payload);
      return nextState;
    }
  }
  return state;
}

export default authReducer;
