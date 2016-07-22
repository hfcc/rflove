import './../css/unify/css/pages/profile.css';

import React from 'react';

export default class UserCardMain extends React.Component {
    render() {
        return (
            <div className="profile-blog">
                <div className="user-name">
                    <a href="#">{this.props.user.name}</a>
                </div>
                <div className="clearfix margin-bottom-20"></div>
                <p>{this.props.user.description}</p>
                <hr />
                <ul className="list-inline share-list">
                    <li><i className="fa fa-heart red"></i>{this.props.user.lovedCount} loved</li>
                    <li><i className="fa fa-group"></i>{this.props.user.followerCount} Followers</li>
                </ul>
            </div>
        );
    }
}