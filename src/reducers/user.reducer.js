const initialState = {
    user: [],
    users: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ALL_USERS":
            return {
                ...state,
                users: action.data
            }
        case "FETCH_USER":
            return {
                ...state,
                user: action.data
            }
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.data.id)
            }
        default:
            return state;
    }
}

export default reducer;
