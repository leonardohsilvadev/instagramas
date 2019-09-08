import * as Types from '../actions/actionTypes';

export const addPost = post => {
    return {
        type: Types.ADD_POST,
        payload: post
    }
}