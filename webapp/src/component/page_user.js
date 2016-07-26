import './../css/unify/css/pages/profile.css';
import React from 'react';
import $ from 'jquery'

import UserCardDetail from './user_card_detail.js';
import UserLovedContent from './user_loved_content.js';
import UserLovedTypeGroup from './user_loved_type_group.js';
import UserLovedTagGroup from './user_loved_tag_group.js';

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: {} };
    }
    componentDidMount() {
        let url = "http://localhost:3000/users/" + this.props.params.userId;
        console.log(url);
        $.get(url, (user) => {
            this.setState({user: user});
        });
    }
    render() {
        return (
            <div className="container content-xs profile">
                <div className="row">
                    <div className="col-md-12">
                        <div className="profile-body">
                            <UserCardDetail user={this.state.user}/>
                            <div className="row">
                                <div className="col-md-9">
                                   <UserLovedContent user={this.state.user}/>
                                </div>

                                <div className="col-md-3">
                                    <UserLovedTypeGroup user={this.state.user}/>
                                    <UserLovedTagGroup user={this.state.user}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}