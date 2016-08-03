import './../css/unify/css/pages/shortcode_timeline2.css';

import React from 'react';
import _ from 'lodash';

export default class UserLovedTree extends React.Component {
    render() {
        return (
            <ul className="timeline-v2 timeline-me">
                {this.renderTimeLine()}
            </ul>
        );
    }
     renderTimeLine() {
        return _.map(this.props.lovedList, (loved, index) => {
            return (
                <li key={index}>
                    <time dateTime="" className="cbp_tmtime">
                        <span>{loved.type}</span>
                        <span>{loved.time}</span>
                    </time>
                    <i className="cbp_tmicon rounded-x hidden-xs"></i>
                    <div className="cbp_tmlabel">
                        <div className="tag-box tag-box-v2 box-shadow shadow-effect-1">
                            <h2><a href={loved.link}>{loved.title}</a></h2>
                            <div className="margin-bottom-5">
                                <p>{loved.description}</p>
                            </div>
                            <div>
                            {
                                _.map(loved.tags, (tag, tagIndex) => {
                                    return (
                                        <span className="label label-dark-blue" key={tagIndex}>{tag}</span>
                                    );
                                })
                            }
                            </div>
                        </div>
                    </div>
                </li>
            );
        });
    }
}