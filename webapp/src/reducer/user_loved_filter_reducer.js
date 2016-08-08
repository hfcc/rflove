import { userLovedFilterAction } from '../action/user_loved_filter_action.js';

export default function userLovedFilterReducer(state, action){
    switch (action.type) {
        case userLovedFilterAction.addTypeFilter:
            return {
                typeFilterList: [...state.typeFilterList, action.filter],
                tagFilterList: state.tagFilterList
            };
        case userLovedFilterAction.addTagFilter:
            return {
                typeFilterList: state.typeFilterList,
                tagFilterList: [...state.tagFilterList, action.filter]
            };
        case userLovedFilterAction.removeTypeFilter:
            let typeIndex = _.indexOf(state.typeFilterList, action.filter);
            return {
                typeFilterList: [...state.typeFilterList.slice(0, typeIndex), ...state.typeFilterList.slice(typeIndex + 1)],
                tagFilterList: state.tagFilterList
            };
        case userLovedFilterAction.removeTagFilter:
            let tagIndex = _.indexOf(state.tagFilterList, action.filter);
            return {
                typeFilterList: state.typeFilterList,
                tagFilterList: [...state.tagFilterList.slice(0, tagIndex), ...state.tagFilterList.slice(tagIndex + 1)]
            };
        default:
            return {
                typeFilterList: [],
                tagFilterList: []
            }
    }
}
