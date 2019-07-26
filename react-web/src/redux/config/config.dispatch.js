// initializers
import { initializers } from './config.action';

// store for dispatching jobs.
import store from '../store';
 
// dispatch.
export default {
    loadConfig: () => store.dispatch(initializers.loadConfig())
};