import './css/reset.css';
import './css/main.less';
import './css/timeline.min.css';
import 'pills/dist/pills.min.css';


import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="twelve columns">header</div>
                </div>
                <div className="row">
                    <div className="six columns">user info</div>
                    <div className="six columns">user description</div>
                </div>
                <div className="row">
                    <div className="nine columns">
                        <div className="timeline timeline-left blue-blue-blue">
                            <div className="timeline-block">
                                <div className="timeline-icon timeline-icon-hide-border">
                                    <i className="fa fa-github fa-2"></i>
                                </div>
                                <div className="timeline-content">
                                    <p> Any content </p>
                                    <div className="timeline-date">Yesterday</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="three columns">
                        type filter
                    </div>
                </div>
                <div className="row">
                    <div className="twelve columns">footer</div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));