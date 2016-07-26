import './../css/unify/css/pages/profile.css';
import React from 'react';

import UserCardDetail from './user_card_detail.js';
import UserLovedContent from './user_loved_content.js';
import UserLovedTypeGroup from './user_loved_type_group.js';
import UserLovedTagGroup from './user_loved_tag_group.js';

export default class User extends React.Component {
    render() {
        return (
            <div className="container content-xs profile">
                <div className="row">
                    <div className="col-md-12">
                        <div className="profile-body">
                            <UserCardDetail />
                            <div className="row">
                                <div className="col-md-9">
                                   <UserLovedContent />
                                </div>

                                <div className="col-md-3">
                                    <UserLovedTypeGroup />
                                    <UserLovedTagGroup />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}