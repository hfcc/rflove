import './../css/unify/css/pages/profile.css';

import React from 'react';
import { Link } from 'react-router';

export default class UserCardMain extends React.Component {
    render() {
        return (
            <div className="profile-blog">
                <div className="user-name">
                    <Link to={`/user/${this.props.user.id}`}>{this.props.user.name}</Link>
                </div>
                <div className="clearfix margin-bottom-20"></div>
                <p>{this.props.user.description}</p>
                <hr />
                <ul className="list-inline">
                    {this.renderUserTypeList()}
                </ul>
                <hr />
                <ul className="list-inline share-list">
                    <li><i className="fa fa-heart red"></i>{this.props.user.lovedCount}</li>
                    <li><i className="fa fa-group"></i>{this.props.user.followerCount}</li>
                </ul>
            </div>
        );
    }
    renderUserTypeList() {
        return this.props.user.lovedTypes.map((lovedType, index) => {
                        return (
                            <li className="margin-bottom-5" key={index}>
                                <span className="label label-dark-blue">
                                    {lovedType.name}
                                </span>
                                <span className="label label-light">
                                    {lovedType.count}
                                </span>
                            </li>
                        );
                    });
    }
}