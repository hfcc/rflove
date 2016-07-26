import React from 'react';
import _ from 'lodash';

export default class UserLovedTypeGroup extends React.Component{
    render() {
        return (
            <div className="panel panel-profile margin-bottom-20">
                <div className="panel-heading overflow-h">
                    <h2 className="panel-title heading-sm pull-left">
                        <i className="fa fa-filter"></i> Types
                    </h2>
                </div>
                <div className="panel-body">
                    <form action="#" className="sky-form">
                        <ul className="list-unstyled social-contacts-v2">
                           {this.renderTypeList()}
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
    renderTypeList() {
        return _.map(this.props.user.lovedTypes, (lovedType, index) => {
            return (
                <li key={index}>
                    <label className="checkbox">
                        <input type="checkbox"/>
                        <i></i>
                        {lovedType.name}
                        <span className="badge badge-dark-blue pull-right">{lovedType.count}</span>
                    </label>
                </li>
            );
        });
    }
}