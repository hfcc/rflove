import $ from 'jquery';

const baseUrl = "http://localhost:3000/";

const getUserList = (callBack) => {
    $.get('users', (userList) => {
        callBack(userList);
    });
}

const getUser = (userId, callBack) => {
    let url = baseUrl + "users/" + userId;
    $.get(url, (user) => {
        callBack(user);
    });
}

const getUserUnfollowUserList = (userId, callBack) => {
    let url = baseUrl + "users/" + userId + "/userList";
    $.get(url, (userList) => {
        callBack(userList);
    });
}

const getUserFollowingRecommend = (userId, callBack) => {
    let url = baseUrl + "users/" + userId + "/following";
    $.get(url, (data) => {
        callBack(data);
    });
}

export default {
    getUser,
    getUserList,
    getUserFollowingRecommend,
    getUserUnfollowUserList
}