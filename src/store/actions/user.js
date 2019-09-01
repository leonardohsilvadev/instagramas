import * as types from './actionTypes';

export const login = user => {
    return {
        type: types.USER_LOGGED_IN,
        payload: user,
    }
}

export const logout = () => {
    return {
        type: types.USER_LOGGED_OUT
    }
}