import './../css/unify/css/pages/shortcode_timeline2.css';

import React from 'react';
import _ from 'lodash';

export default class UserLovedContent extends React.Component {
    render() {
        return (
            <div className="panel panel-profile">
                <div className="panel-heading overflow-h">
                    <h2 className="panel-title heading-sm pull-left">
                        <i className="fa fa-heart red"></i> Loved
                    </h2>
                    <a href="#"><i className="fa fa-cog pull-right"></i></a>
                </div>
                <div className="panel-body margin-bottom-40">
                    <ul className="timeline-v2 timeline-me">
                        {this.renderTimeLine()}
                    </ul>
                </div>
            </div>
        );
    }
    renderTimeLine() {
        return _.map(this.props.user.lovedList, (loved, index) => {
            return (
                <li key={index}>
                    <time dateTime="" className="cbp_tmtime">
                        <span>{loved.time}</span>
                    </time>
                    <i className="cbp_tmicon rounded-x hidden-xs"></i>
                    <div className="cbp_tmlabel">
                        <h2>{loved.title}</h2>
                        <p>{loved.description}</p>
                    </div>
                </li>
            );
        });
    }
}