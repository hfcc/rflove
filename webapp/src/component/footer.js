import './../css/unify/css/footers/footer-v2.css';

import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
        <div id="footer-v2" className="footer-v2">
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 md-margin-bottom-40">
                            <a href="index.html">Recommend Your Love && Find Your Love</a>
                            <p className="margin-bottom-20">Unify is an incredibly beautiful responsive Bootstrap Template for corporate and creative professionals.</p>

                            <form className="footer-subsribe">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Email Address" />
                                    <span className="input-group-btn">
                                        <button className="btn-u" type="button">Go</button>
                                    </span>
                                </div>
                            </form>
                        </div>

                        <div className="col-md-3 md-margin-bottom-40">
                            <div className="headline"><h2 className="heading-sm">Useful Links</h2></div>
                            <ul className="list-unstyled link-list">
                                <li><a href="#">About us</a><i className="fa fa-angle-right"></i></li>
                                <li><a href="#">Portfolio</a><i className="fa fa-angle-right"></i></li>
                                <li><a href="#">Latest jobs</a><i className="fa fa-angle-right"></i></li>
                                <li><a href="#">Community</a><i className="fa fa-angle-right"></i></li>
                                <li><a href="#">Contact us</a><i className="fa fa-angle-right"></i></li>
                            </ul>
                        </div>

                        <div className="col-md-3 md-margin-bottom-40">
                            <div className="latest-tweets">
                                <div className="headline"><h2 className="heading-sm">Latest Tweets</h2></div>
                                <div className="latest-tweets-inner">
                                    <i className="fa fa-twitter"></i>
                                    <p>
                                        <a href="#">@htmlstream</a>
                                        At vero seos etodela ccusamus et
                                        <a href="#">http://t.co/sBav7dm</a>
                                        <small className="twitter-time">2 hours ago</small>
                                    </p>
                                </div>
                                <div className="latest-tweets-inner">
                                    <i className="fa fa-twitter"></i>
                                    <p>
                                        <a href="#">@htmlstream</a>
                                        At vero seos etodela ccusamus et
                                        <a href="#">http://t.co/sBav7dm</a>
                                        <small className="twitter-time">4 hours ago</small>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 md-margin-bottom-40">
                            <div className="headline"><h2 className="heading-sm">Contact Us</h2></div>
                            <address className="md-margin-bottom-40">
                                <i className="fa fa-home"></i>25, Lorem Lis Street, California, US <br />
                                <i className="fa fa-phone"></i>Phone: 800 123 3456 <br />
                                <i className="fa fa-globe"></i>Website: <a href="#">www.htmlstream.com</a> <br />
                                <i className="fa fa-envelope"></i>Email: <a href="mailto:info@anybiz.com">info@anybiz.com</a>
                            </address>

                            <ul className="social-icons">
                                <li><a href="#" data-original-title="Facebook" className="rounded-x social_facebook"></a></li>
                                <li><a href="#" data-original-title="Twitter" className="rounded-x social_twitter"></a></li>
                                <li><a href="#" data-original-title="Goole Plus" className="rounded-x social_googleplus"></a></li>
                                <li><a href="#" data-original-title="Linkedin" className="rounded-x social_linkedin"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <div className="container">
                    <p className="text-center">2015 &copy; All Rights Reserved. Unify Theme by <a target="_blank" href="https://twitter.com/htmlstream">Htmlstream</a></p>
                </div>
            </div>
        </div>
        );
    }
}