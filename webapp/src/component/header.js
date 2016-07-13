import './../css/unify/css/headers/header-v4-centered.css';
import './../css/unify/plugins/animate.css';
import './../css/unify/plugins/line-icons/line-icons.css';
import './../css/unify/css/theme-skins/dark.css';
import './../css/unify/css/theme-colors/dark-blue.css';

import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header-v4">
                <div className="topbar-v1">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="list-inline top-v1-contacts">
                                    <li>
                                        <i className="fa fa-envelope"></i> Email: <a href="mailto:hfcc8685@gmail.com">hfcc8685@gmail.com</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-6">
                                <ul className="list-inline top-v1-data">
                                    <li><a href="#"><i className="fa fa-home"></i></a></li>
                                    <li><a href="#"><i className="fa fa-globe"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="navbar navbar-default mega-menu" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="index.html">
                                <h1>Recommend Your Love && Find Your Love</h1>
                            </a>

                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
                                <span className="full-width-menu">Menu Bar</span>
                                <span className="icon-toggle">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="clearfix"></div>

                    <div className="collapse navbar-collapse navbar-responsive-collapse">
                        <div className="container">
                            <ul className="nav navbar-nav">
                                <li className="active">
                                    <a href="javascript:void(0);">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        Home
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
