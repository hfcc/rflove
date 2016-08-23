import { userLovedFilterAction } from '../action/user_loved_filter_action.js';

export default function userLovedFilterReducer(state = [], action){
    switch (action.type) {
        case userLovedFilterAction.addTagFilter:
            return [...state, action.filter];
        case userLovedFilterAction.removeTagFilter:
            let tagIndex = _.indexOf(state, action.filter);
            return [...state.slice(0, tagIndex), ...state.slice(tagIndex + 1)];
        default:
            return [];
    }
}
