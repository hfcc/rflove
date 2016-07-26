import './../css/unify/css/pages/shortcode_timeline2.css';

import React from 'react';

export default class UserLovedContent extends React.Component {
    render() {
        return (
            <div className="panel panel-profile">
                <div className="panel-heading overflow-h">
                    <h2 className="panel-title heading-sm pull-left"><i className="fa fa-heart red"></i> Loved</h2>
                    <a href="#"><i className="fa fa-cog pull-right"></i></a>
                </div>
                <div className="panel-body margin-bottom-40">
                    <ul className="timeline-v2 timeline-me">
                        <li>
                            <time dateTime="" className="cbp_tmtime"><span>Mobile Design</span> <span>2012 - Current</span></time>
                            <i className="cbp_tmicon rounded-x hidden-xs"></i>
                            <div className="cbp_tmlabel">
                                <h2>BFC NYC Partners</h2>
                                <p>Winter purslane courgette pumpkin quandong komatsuna fennel green bean cucumber watercress. Peasprouts wattle seed rutabaga okra yarrow cress avocado grape.</p>
                            </div>
                        </li>
                        <li>
                            <time dateTime="" className="cbp_tmtime"><span>Web Designer</span> <span>2007 - 2012</span></time>
                            <i className="cbp_tmicon rounded-x hidden-xs"></i>
                            <div className="cbp_tmlabel">
                                <h2>Freelance</h2>
                                <p>Caulie dandelion maize lentil collard greens radish arugula sweet pepper water spinach kombu courgette lettuce.</p>
                            </div>
                        </li>
                        <li>
                            <time dateTime="" className="cbp_tmtime"><span>Photodesigner</span> <span>2003 - 2007</span></time>
                            <i className="cbp_tmicon rounded-x hidden-xs"></i>
                            <div className="cbp_tmlabel">
                                <h2>Toren Condo</h2>
                                <p>Caulie dandelion maize lentil collard greens radish arugula sweet pepper water spinach kombu courgette lettuce. Celery coriander bitterleaf epazote radicchio shallot.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}