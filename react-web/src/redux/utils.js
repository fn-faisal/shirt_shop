export const createAction = ( type, payload ) => {
    return { type: type, payload: payload };
}

export const hasError = ( action ) => {
    if ( !('payload' in action) )
        return false;
    if ( Object.keys(action.payload).filter( pl => pl === 'errors' ).length <= 0 )
        return false;
    if ( action.payload.errors.length <= 0 )
        return false;
    return true;
}