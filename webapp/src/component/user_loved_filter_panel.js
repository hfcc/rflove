import React from 'react';
import _ from 'lodash';

export default class UserLovedFilterPanel extends React.Component {
    render() {
        return (
            <div className="panel panel-profile margin-bottom-20">
                <div className="panel-heading overflow-h">
                    <h2 className="panel-title heading-sm pull-left">
                        <i className= { "fa " + this.props.icon } ></i> { this.props.name }
                    </h2>
                </div>
                <div className="panel-body">
                    <form action="#" className="sky-form">
                        <ul className="list-unstyled social-contacts-v2">
                           {this.renderFilterList()}
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
    renderFilterList() {
        return _.map(this.props.filterList, (filter, index) => {
            return (
                <li key={index}>
                    <label className="checkbox">
                        <input type="checkbox" onChange = {(event) => {
                            if(event.target.checked){
                                this.props.OnAddFilter(filter.name);
                            } else {
                                this.props.OnRemoveFilter(filter.name);
                            }
                        }}/>
                        <i></i>
                        { filter.name }
                        <span className="badge badge-dark-blue pull-right margin-top-5">{ filter.count }</span>
                    </label>
                </li>
            );
        });
    }
}