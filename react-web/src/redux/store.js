import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// import root reducer.
import reducer from './root.reducer';

export default createStore( reducer, applyMiddleware(thunk) );
