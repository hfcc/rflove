import './../css/unify/css/pages/profile.css';

import React from 'react';
import _ from 'lodash';

import TagCardMain from './tag_card_main.js';
import tagRepository from '../repository/tag_repository.js';


export default class TagList extends React.Component {
     constructor(props) {
        super(props);
        this.state = { tagList: [] };
    }
    componentDidMount() {
        tagRepository.getTagList((tagList) => {
            this.setState({tagList: tagList});
        });
    }
    render() {
        return (
             <div className="container content-xs profile">
                <div className="row">
                    <div className="col-md-12">
                        <div className="profile-body">
                           { this.renderTagList() }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    renderTagList() {
        return (
            _(this.state.tagList)
            .chunk(4)
            .map((tags, tagsIndex) => {
                return(
                    <div className="row margin-bottom-20" key={tagsIndex}>
                        {
                            _.map(tags, (tag, tagIndex) => {
                                var className = "col-sm-3 ";
                                if(tagIndex === 0 || tagIndex != 3){
                                    className += "sm-margin-bottom-20"
                                }
                                return (
                                    <div className={className} key={tagIndex}>
                                        <TagCardMain tag={tag} />
                                    </div>
                                );
                            })
                        }
                    </div>
                );
            })
            .value()
        );
    }
}