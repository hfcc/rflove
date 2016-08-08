import './../css/unify/css/pages/profile.css';

import $ from 'jquery';
import _ from 'lodash';
import React from 'react';
import { createStore } from 'redux';

import UserCardDetail from './user_card_detail.js';
import UserLovedContent from './user_loved_content.js';
import UserLovedFilterPanel from './user_loved_filter_panel.js'

import userLovedFilterReducer from '../reducer/user_loved_filter_reducer.js';

const store = createStore(userLovedFilterReducer);

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            lovedList: []
        };
    }

    componentDidMount() {
        let url = "http://localhost:3000/users/" + this.props.params.userId;
        $.get(url, (user) => {
            this.setState({
                user: user,
                lovedList: user.lovedList
            });
        });

         this.unsubscribe = store.subscribe(() => {
            let filterList = _.filter(this.state.user.lovedList, (loved) => {
                    let typeFilter = false;
                    if (store.getState().typeFilterList.length === 0) {
                        typeFilter = true;
                    } else {
                        typeFilter = _.indexOf(store.getState().typeFilterList, loved.type) > -1;
                    }

                    let tagFilter = false;
                    if (store.getState().tagFilterList.length === 0) {
                        tagFilter = true;
                    } else {
                        tagFilter = _.intersection(store.getState().tagFilterList, loved.tags).length > 0;
                    }
                    return typeFilter && tagFilter;
                });
            this.setState({lovedList: filterList});
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
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
                                   <UserLovedContent lovedList={this.state.lovedList}/>
                                </div>

                                <div className="col-md-3">
                                    <UserLovedFilterPanel
                                        name = "Types"
                                        icon = "fa-filter"
                                        filterList = {this.state.user.lovedTypes}
                                        OnAddFilter = { (filter) => {
                                            store.dispatch({
                                                type: 'ADD_TYPE_FILTER',
                                                filter: filter
                                            });
                                        }}
                                        OnRemoveFilter = {(filter) => {
                                            store.dispatch({
                                                type: 'REMOVE_TYPE_FILTER',
                                                filter: filter
                                            });
                                        }}/>
                                    <UserLovedFilterPanel
                                        name = "Tags"
                                        icon = "fa-tags"
                                        filterList = { this.state.user.lovedTags}
                                        OnAddFilter = { (filter) => {
                                            store.dispatch({
                                                type: 'ADD_TAG_FILTER',
                                                filter: filter
                                            });
                                        }}
                                        OnRemoveFilter = {(filter) => {
                                            store.dispatch({
                                                type: 'REMOVE_TAG_FILTER',
                                                filter: filter
                                            });
                                        }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}