import './css/reset.css';
import './css/main.less';
import './css/timeline.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/unify/css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Header from './component/header.js'

class Main extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div className="col-md-6">user info</div>
                    <div className="col-md-6">user description</div>
                </div>
                <div className="row">
                    <div className="col-md-9">
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
                    <div className="col-md-3">
                        type filter
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">footer</div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));