import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_AUTHENTICATED, SET_UNAUTHENTICATED } from '../types';

const initialState = {
    authenticated: false,
    profileCompleted: false,
    firstName: undefined,
    lastName: undefined,
    dob: undefined,
    credentials: {},
}

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true,
            }
            break;
        case SET_UNAUTHENTICATED:
            return {
                ...state,
                unauthenticated: false,
            }
            break;
        default:
            return state;
    }
}
