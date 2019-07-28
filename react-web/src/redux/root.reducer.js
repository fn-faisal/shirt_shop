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
// filter.
import filter from './filter/filter.reducer';
// products.
import product from './product/product.reducer';
// cart.
import cart from './cart/cart.reducer';

//-------------------------------------------
// Combine reducers.
//-------------------------------------------

export default combineReducers({ auth, error, config, filter, product, cart });