import './../css/unify/css/pages/profile.css';

import _ from 'lodash';
import React from 'react';
import { createStore } from 'redux';

import UserCardDetail from './user_card_detail.js';
import UserLovedContent from './user_loved_content.js';
import UserLovedFilterPanel from './user_loved_filter_panel.js'

import { addTagFilter, removeTagFilter} from '../action/user_loved_filter_action.js';
import userLovedFilterReducer from '../reducer/user_loved_filter_reducer.js';

import userRepository from '../repository/user_repository.js';

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
        userRepository.getUser(this.props.params.userId, (user) => {
            this.setState({
                user: user,
                lovedList: user.lovedList
            });
        });

        this.unsubscribe = store.subscribe(() => {
            let filterList = _.filter(this.state.user.lovedList, (loved) => {
                    let tagFilter = false;
                    if (store.getState().length === 0) {
                        tagFilter = true;
                    } else {
                        tagFilter = _.intersection(store.getState(), loved.tags).length > 0;
                    }
                    return tagFilter;
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
                                        name = "Tags"
                                        icon = "fa-tags"
                                        filterList = { this.state.user.lovedTags}
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