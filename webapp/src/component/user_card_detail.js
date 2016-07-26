import './../css/unify/css/pages/profile.css';

import React from 'react';
import _ from 'lodash';

export default class UserCardDetail extends React.Component {
    render() {
        return (
            <div className="profile-bio">
                <div className="row">
                    <div className="col-md-12">
                        <h2>{this.props.user.name}</h2>
                        <hr />
                        <p>{this.props.user.description}</p>
                        <hr />
                        <ul className="list-inline">
                            {this.renderUserSocialContacts()}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
    renderUserSocialContacts(){
        return _.map(this.props.user.socialContacts, (socialContact, index) => {
                    let className = "rounded-x fa fa-" + socialContact.type;
                    return (
                        <li key={index}>
                            <i className={className}></i>
                            <a href="#"> {socialContact.name}</a>
                        </li>
                    );
                });
    }
}