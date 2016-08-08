const userLovedFilterAction = {
    addTypeFilter: "ADD_TYPE_FILTER",
    removeTypeFilter: "REMOVE_TYPE_FILTER",
    addTagFilter: "ADD_TAG_FILTER",
    removeTagFilter: "REMOVE_TAG_FILTER"
}

const addTypeFilter = (filter) => {
    return {
        type: 'ADD_TYPE_FILTER',
        filter: filter
    };
}

const removeTypeFilter = (filter) => {
    return {
        type: 'REMOVE_TYPE_FILTER',
        filter: filter
    };
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
    addTypeFilter,
    removeTypeFilter,
    addTagFilter,
    removeTagFilter
};