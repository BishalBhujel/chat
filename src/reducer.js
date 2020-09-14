export const initialState = {
    user: null,
};

export const actionTypes = {
    SET_User: "SET_USER",
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_User:
            return {
                ...state,
                user: action.user,
            };
        
        default:
            return state;
    }
};

export default reducer;