const userLovedFilterAction = {
    addTagFilter: "ADD_TAG_FILTER",
    removeTagFilter: "REMOVE_TAG_FILTER"
}

const addTagFilter = (filter) => {
    return {
        type: 'ADD_TAG_FILTER',
        filter: filter
    };
}

const removeTagFilter = (filter) => {
    return {
        type: "REMOVE_TAG_FILTER",
        filter: filter
    };
}

export {
    userLovedFilterAction,
    addTagFilter,
    removeTagFilter
};