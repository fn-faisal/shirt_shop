import { combineReducers } from 'redux';

//-------------------------------------------
// Import reducers.
//-------------------------------------------

// auth.
import auth from './auth/auth.reducer';
// errors.
import error from './error/error.reducer';

//-------------------------------------------
// Combine reducers.
//-------------------------------------------

export default combineReducers({ auth, error });