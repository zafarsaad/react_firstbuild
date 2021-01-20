import * as ActionTypes from './ActionTypes';

export const Comments = (state = { errMess: null, comments: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};
        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};
        case ActionTypes.ADD_COMMENT:
            const comment = action.payload;
            // This below is not being done 1. JSON server assigned id
            // 2. Adding date in the postComment method
            // comment.id = state.comments.length;
            // comment.date = new Date().toISOString();
            return {...state, comments: state.comments.concat(comment)};
        default:
            return state;
    }
};