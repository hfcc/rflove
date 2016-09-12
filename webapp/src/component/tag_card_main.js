import './../css/unify/css/pages/profile.css';

import React from 'react';
import { Link } from 'react-router';

export default class TagCardMain extends React.Component {
    render() {
        return (
            <div className="profile-blog">
                <div className="user-name">
                    {this.props.tag.name}
                </div>
                <div className="clearfix margin-bottom-20"></div>
                <p>{this.props.tag.description}</p>
                <hr />
                <ul className="list-inline share-list">
                    <li><i className="fa fa-heart red"></i>{this.props.tag.lovedCount}</li>
                    <li><i className="fa fa-group"></i>{this.props.tag.followerCount}</li>
                </ul>
            </div>
        );
    }
}