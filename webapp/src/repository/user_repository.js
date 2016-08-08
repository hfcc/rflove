import $ from 'jquery';

const getUser = (userId, callBack) => {
    let url = "http://localhost:3000/users/" + userId;
    $.get(url, (user) => {
        callBack(user);
    });
}

const getUserList = (callBack) => {
    $.get('users', (userList) => {
        callBack(userList);
    });
}

export default {
    getUser: getUser,
    getUserList: getUserList
}