import React from 'react';
import UserLovedTree from './user_loved_tree.js';

export default class UserLovedContent extends React.Component {
    render() {
        return (
            <div className="panel panel-profile">
                <div className="panel-heading overflow-h">
                    <h2 className="panel-title heading-sm pull-left">
                        <i className="fa fa-heart red"></i> Loved
                    </h2>
                </div>
                <div className="panel-body margin-bottom-40">
                    <UserLovedTree lovedList={this.props.user.lovedList}/>
                </div>
            </div>
        );
    }

}