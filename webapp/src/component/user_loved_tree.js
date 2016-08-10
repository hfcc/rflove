import './../css/unify/css/pages/shortcode_timeline2.css';

import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router';

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
                        <span>{ loved.type }</span>
                        <span>{loved.time}</span>
                    </time>
                    <i className="cbp_tmicon rounded-x hidden-xs"></i>
                    <div className="cbp_tmlabel">
                        <div className="tag-box tag-box-v2 box-shadow shadow-effect-1">
                            <h2>
                                <Link to={`/`}>{loved.title}</Link>
                                {
                                    !!loved.link
                                    ? <a href={loved.link} className="pull-right"><i className="fa fa-external-link"></i></a>
                                    : null
                                }
                            </h2>
                            <div className="margin-bottom-5">
                                <p>
                                    {
                                        !!loved.userName
                                        ? <Link to={`/user/` + loved.userId}>{ "@" + loved.userName + ": "}</Link>
                                        : null
                                    }
                                    { loved.description }
                                </p>
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