import userActionTypes from './user.types';

export const googleSignInStart = () => {
    return {
        type: userActionTypes.GOOGLE_SIGN_IN_START
    }
};

export const emailSignInStart = (emailAndPassword) => {
    return {
        type: userActionTypes.EMAIL_SIGN_IN_START,
        payload: emailAndPassword
    }
};

export const signInSuccess = (user) => {
    return {
        type: userActionTypes.SIGN_IN_SUCCESS,
        payload: user
    }
};

export const signInFailure = (error) => {
    return {
        type: userActionTypes.SIGN_IN_FAILURE,
        payload: error
    }
};

export const checkUserSession = () => {
    return {
        type: userActionTypes.CHECK_USER_SESSION
    }
};

export const signOutStart = () => {
    return {
        type: userActionTypes.SIGN_OUT_START
    }
};

export const signOutSuccess = () => {
    return {
        type: userActionTypes.SIGN_OUT_SUCCESS
    }
};

export const signOutFailure = (error) => {
    return {
        type: userActionTypes.SIGN_OUT_FAILURE,
        payload: error
    }
};

export const signUpStart = (userCredentials) => {
    return {
        type: userActionTypes.SIGN_UP_START,
        payload: userCredentials
    }
};

export const signUpSuccess = ({ user, additionalData }) => {
    return {
        type: userActionTypes.SIGN_UP_SUCCESS,
        payload: { user, additionalData }
    }
};

export const signUpFailure = (error) => {
    return {
        type: userActionTypes.SIGN_UP_FAILURE,
        payload: error
    }
};




