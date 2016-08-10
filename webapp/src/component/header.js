import './../css/unify/css/headers/header-v4-centered.css';

import React from 'react';
import { Link } from 'react-router';

import userAuthentication from '../helper/user_authentication.js';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header-v4">
                <div className="topbar-v1">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-6">
                                <ul className="list-inline top-v1-data">
                                    <li><i className="fa fa-sign-in"></i></li>
                                    <li><a href="#"><i className="fa fa-google"></i></a></li>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-github"></i></a></li>
                                    <li><a href="#"><i className="fa fa-weibo"></i></a></li>
                                    <li><a href="#"><i className="fa fa-weixin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="navbar navbar-default mega-menu" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to="/">
                                <h1>Recommend Your Love Find Your Love</h1>
                            </Link>

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
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`/user/1`}>
                                        My Recommend
                                    </Link>
                                </li>
                                 <li>
                                    <Link to={`/user/1/following`}>
                                        Following Recommend
                                    </Link>
                                </li>
                                 <li>
                                    <Link to="/user/1/userlist">
                                        unFollow Users
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
