import { combineReducers } from 'redux';

//-------------------------------------------
// Import reducers.
//-------------------------------------------

// config.
import config from './config/config.reducer';
// auth.
import auth from './auth/auth.reducer';
// errors.
import error from './error/error.reducer';


//-------------------------------------------
// Combine reducers.
//-------------------------------------------

export default combineReducers({ auth, error, config });