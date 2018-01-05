
'use strict';

import Immutable from 'immutable'

const {
  LOGIN,
} = require('../../Lib/constants').default;

const Form = Immutable.Record({
  state: LOGIN,
  disabled: false,
  error: null,
  isValid: false,
  isFetching: false,
  isSending: false,
  fields: new (Immutable.Record({
    username: '',
    profilePhoto:'',
    usernameHasError: false,
    usernameErrorMsg: '',
    password: '',
    passwordHasError: false,
    passwordErrorMsg: '',
    confirmPassword: '',
    confirmPasswordHasError: false,
    confirmPasswordErrorMsg: '',
  }))
});

/**
 * ## InitialState
 * The form is set
 */
let InitialState = Immutable.Record({
  form: new Form(),
});
export default InitialState;
