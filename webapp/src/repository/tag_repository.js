import $ from 'jquery';

const baseUrl = "http://localhost:3000/";

const getTagList = (callBack) => {
    $.get('tags', (tagList) => {
        callBack(tagList);
    });
}

export default {
    getTagList
}