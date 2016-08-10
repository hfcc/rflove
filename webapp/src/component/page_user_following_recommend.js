import './../css/unify/css/pages/profile.css';

import _ from 'lodash';
import React from 'react';
import { createStore } from 'redux';

import UserLovedContent from './user_loved_content.js';
import UserLovedFilterPanel from './user_loved_filter_panel.js'

import {addTypeFilter, removeTypeFilter, addTagFilter, removeTagFilter} from '../action/user_loved_filter_action.js';
import userLovedFilterReducer from '../reducer/user_loved_filter_reducer.js';

import userRepository from '../repository/user_repository.js';

const store = createStore(userLovedFilterReducer);

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            lovedList: []
        };
    }

    componentDidMount() {
        userRepository.getUserFollowingRecommend(this.props.params.userId, (data) => {
            this.setState({
                data: data,
                lovedList: data.lovedList
            });
        });

        this.unsubscribe = store.subscribe(() => {
            let filterList = _.filter(this.state.data.lovedList, (loved) => {
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
                            <div className="row">
                                <div className="col-md-9">
                                   <UserLovedContent lovedList={this.state.lovedList}/>
                                </div>

                                <div className="col-md-3">
                                    <UserLovedFilterPanel
                                        name = "Types"
                                        icon = "fa-filter"
                                        filterList = {this.state.data.lovedTypes}
                                        OnAddFilter = { (filter) => {
                                            store.dispatch(addTypeFilter(filter));
                                        }}
                                        OnRemoveFilter = {(filter) => {
                                            store.dispatch(removeTypeFilter(filter));
                                        }}/>
                                    <UserLovedFilterPanel
                                        name = "Tags"
                                        icon = "fa-tags"
                                        filterList = { this.state.data.lovedTags}
                                        OnAddFilter = { (filter) => {
                                            store.dispatch(addTagFilter(filter));
                                        }}
                                        OnRemoveFilter = {(filter) => {
                                            store.dispatch(removeTagFilter(filter));
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