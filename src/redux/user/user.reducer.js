const INITIAL_STATE = {
    currentUser: null
};

// state = INITIAL_STATE  means that if state is not defined(not set) it takes the default value

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }

        default: state
    }
}

export default userReducer;