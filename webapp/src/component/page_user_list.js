import './../css/unify/css/pages/profile.css';

import React from 'react';
import _ from 'lodash';
import $ from 'jquery';

import UserCardMain from './user_card_main.js';

export default class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userList: [] };
    }
    componentDidMount() {
        $.get('users', (userList) => {
            this.setState({userList: userList});
        });
    }
    render() {
        return (
            <div className="container content profile">
                <div className="row">
                    <div className="col-md-12">
                        <div className="profile-body margin-bottom-20">
                           {this.renderUserList()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    renderUserList() {
        return (
            _(this.state.userList)
            .chunk(3)
            .map((users, usersIndex) => {
                return(
                    <div className="row margin-bottom-20" key={usersIndex}>
                        {
                            _.map(users, (user, userIndex) => {
                                var className = "col-sm-4 ";
                                if(userIndex === 0 || userIndex%3 === 0){
                                    className += "sm-margin-bottom-20"
                                }
                                return (
                                    <div className={className} key={userIndex}>
                                        <UserCardMain user={user} />
                                    </div>
                                );
                            })
                        }
                    </div>
                );
            })
            .value()
        );
    }
}