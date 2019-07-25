import { createAction } from '../utils';

// services.
import { loadConfig } from './config.service';

export const ACTIONS = {
    LOAD_CONFIG : 'LOAD_CONFIG'
}

export const initializers = {
    loadConfig : () => async (dispatch) => {
        // load the config.
        let config = await loadConfig();
        return dispatch(createAction( ACTIONS.LOAD_CONFIG, config ));
    }
}