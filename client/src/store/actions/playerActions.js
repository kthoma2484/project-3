export const createPlayer  = (player) => {
    return (dispatch, getState,  { getFirebase, getFirestore }) => {
        // make async call to database
        dispatch({ type: 'Create_Player', player});
    }
};