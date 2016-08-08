export default function userLovedFilterReducer(state, action){
    switch (action.type) {
        case "ADD_TYPE_FILTER":
            return {
                typeFilterList: [...state.typeFilterList, action.filter],
                tagFilterList: state.tagFilterList
            };
        case "ADD_TAG_FILTER":
            return {
                typeFilterList: state.typeFilterList,
                tagFilterList: [...state.tagFilterList, action.filter]
            };
        case "REMOVE_TYPE_FILTER":
            let typeIndex = _.indexOf(state.typeFilterList, action.filter);
            return {
                typeFilterList: [...state.typeFilterList.slice(0, typeIndex), ...state.typeFilterList.slice(typeIndex + 1)],
                tagFilterList: state.tagFilterList
            };
        case "REMOVE_TAG_FILTER":
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
