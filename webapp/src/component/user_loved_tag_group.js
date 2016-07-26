import React from 'react';
import _ from 'lodash';

export default class UserLovedTagGroup extends React.Component {
    render() {
        return (
            <div className="panel panel-profile margin-bottom-20">
                <div className="panel-heading overflow-h">
                    <h2 className="panel-title heading-sm pull-left">
                        <i className="fa fa-tags"></i> Tags
                    </h2>
                </div>
                <div className="panel-body">
                    <form action="#" className="sky-form">
                        <ul className="list-unstyled social-contacts-v2">
                           {this.renderTagList()}
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
    renderTagList() {
        return _.map(this.props.user.lovedTags, (lovedTag, index) => {
            return (
                <li key={index}>
                    <label className="checkbox">
                        <input type="checkbox"/>
                        <i></i>
                        {lovedTag.name}
                        <span className="badge badge-dark-blue pull-right">{lovedTag.count}</span>
                    </label>
                </li>
            );
        });
    }
}